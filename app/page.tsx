import Image from 'next/image'
import { Chakra_Petch } from 'next/font/google'
import { profileData } from '@/lib/profile-data'
import { SocialIcons } from '@/components/social-icons'
import { LinkButton } from '@/components/link-button'

const fontBrand = Chakra_Petch({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
})

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#030303] p-4">
      {/* Fondo diagonal de alto contraste (Cockpit) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-950/60 via-[#0a0000] to-black"
      />

      {/* Focos de luz LED asimétricos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-red-600/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-red-900/20 blur-[130px]"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-red-600 blur-sm opacity-70"
            />
            <Image
              src={avatarUrl || '/placeholder.svg'}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-white/20 object-cover"
            />
          </div>

          <div className="space-y-2">
            {/* Nombre con tipografía compacta, inclinada y estilo motor */}
            <h1
              className={`${fontBrand.className} text-balance text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white`}
            >
              {name}
            </h1>
            <p className="mx-auto max-w-xs text-pretty text-sm font-medium leading-relaxed text-zinc-300">
              {bio}
            </p>
          </div>
        </header>

        {/* Redes sociales */}
        <SocialIcons links={socialLinks} />

        {/* Enlaces principales */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.title} link={link} />
          ))}
        </div>

        {/* Firma comercial acoplada al estilo automotriz/deportivo */}
        <footer className="pt-2 text-center text-sm font-semibold tracking-wide text-zinc-400">
          Powered by{' '}
          <a
            href="https://tarjetaspersonalizadas.ve"
            target="_blank"
            rel="noopener noreferrer"
            className={`${fontBrand.className} bg-gradient-to-r from-red-500 via-red-400 to-zinc-200 bg-clip-text text-transparent uppercase tracking-wider transition-opacity hover:opacity-80`}
          >
            tarjetaspersonalizadas.ve
          </a>
        </footer>
      </section>
    </main>
  )
}
