import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0b0f0a] px-4 py-12 text-white">
      {/* Fondo con gradiente sutil en tonos verde oliva */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(74,93,42,0.45),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(120,140,70,0.22),transparent_45%),radial-gradient(circle_at_50%_120%,rgba(52,66,32,0.5),transparent_50%)]"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-8">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#4a5d2a] via-[#78883f] to-[#a3b56a] opacity-60 blur-md"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-white/20 object-cover shadow-xl"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{name}</h1>
            <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-white/60">{bio}</p>
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

        <footer className="pt-2 text-center text-xs text-white/30">
          {`© ${new Date().getFullYear()} ${name}`}
        </footer>
      </section>
    </main>
  )
}
