import type { SocialLink } from "@/lib/profile-data"

export function SocialIcons({ links }: { links: SocialLink[] }) {
  return (
    <nav aria-label="Redes sociales" className="flex flex-wrap items-center justify-center gap-3">
      {links.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
          >
            <Icon className="size-5" aria-hidden="true" />
          </a>
        )
      })}
    </nav>
  )
}
