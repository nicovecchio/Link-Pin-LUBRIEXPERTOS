import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#050505] p-4">
      {/* Patron de malla de fibra de carbono */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1f0303_1px,transparent_1px)] [background-size:16px_16px] opacity-80"
      />

      {/* Resplandor rojo deportivo superior e inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-red-700/40 via-red-950/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-red-950/50 to-transparent"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 to-red-900 opacity-90 blur-md"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-red-500/30 object-cover shadow-2xl"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-black tracking-wider text-white sm:text-3xl uppercase drop-shadow-md">
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

        <footer className="pt-2 text-center text-xs text-zinc-500">
          {`© ${new Date().getFullYear()} ${name}`}
        </footer>
      </section>
    </main>
  )
}
