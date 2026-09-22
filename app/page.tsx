import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#030303] p-4">
      {/* Fondo diagonal de alto contraste */}
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
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-red-600 blur-sm opacity-70"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-white/20 object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-black tracking-widest text-white sm:text-3xl uppercase">
              {name}
            </h1>
            <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-zinc-300">
              {bio}
            </p>
          </div>
        </header>

        <SocialIcons links={socialLinks} />

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
