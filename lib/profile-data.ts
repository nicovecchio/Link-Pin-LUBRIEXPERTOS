import type { ComponentType, SVGProps } from "react"
import { MapPin } from "lucide-react"
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from "@/components/brand-icons"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type SocialLink = {
  label: string
  url: string
  icon: IconType
}

export type MainLink = {
  title: string
  subtitle?: string
  url: string
  icon?: IconType
}

export type ProfileData = {
  avatarUrl: string
  name: string
  bio: string
  socialLinks: SocialLink[]
  links: MainLink[]
}

export const profileData: ProfileData = {
  avatarUrl: "/profile..png",
  name: "LUBRIEXPERTOS",
  bio: "Este es tu lugar. Somos los expertos",
  socialLinks: [
    {
      label: "Ubicación y Reviews",
      url: "https://www.google.com/maps/place/F4Q9%2BGFM+LUBRIEXPERTOS,+Calle+Pasteur,+Caracas+1041,+Miranda/@10.4888328,-66.8813384,17z/data=!4m6!3m5!1s0x8c2a58ddc3d1e215:0x210138aebf03e05d!8m2!3d10.4888328!4d-66.8813384!16s%2Fg%2F11dft1xgxd?hl=es&g_ep=Eg1tbF8yMDI2MDkxNV8wIJvbDyoASAJQAg%253D%253D",
      icon: MapPin,
    },
    {
      label: "WhatsApp",
      url: "https://wa.link/44vhlz",
      icon: WhatsAppIcon,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/lubriexpertos?stkn=MWwzMGowNzUyZWFzNA%3D%3D",
      icon: InstagramIcon,
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@lubriexpertos1?_r=1&_t=ZN-99x0zRMwPPq",
      icon: TikTokIcon,
    },
  ],
  links: [
    {
      title: "Ubicación y Reviews",
      subtitle: "Calle Pasteur, Caracas",
      url: "https://www.google.com/maps/place/F4Q9%2BGFM+LUBRIEXPERTOS,+Calle+Pasteur,+Caracas+1041,+Miranda/@10.4888328,-66.8813384,17z/data=!4m6!3m5!1s0x8c2a58ddc3d1e215:0x210138aebf03e05d!8m2!3d10.4888328!4d-66.8813384!16s%2Fg%2F11dft1xgxd?hl=es&g_ep=Eg1tbF8yMDI2MDkxNV8wIJvbDyoASAJQAg%253D%253D",
      icon: MapPin,
    },
    {
      title: "WhatsApp",
      subtitle: "Contáctanos directamente",
      url: "https://wa.link/44vhlz",
      icon: WhatsAppIcon,
    },
    {
      title: "Instagram",
      subtitle: "@lubriexpertos",
      url: "https://www.instagram.com/lubriexpertos?stkn=MWwzMGowNzUyZWFzNA%3D%3D",
      icon: InstagramIcon,
    },
    {
      title: "TikTok",
      subtitle: "@lubriexpertos1",
      url: "https://www.tiktok.com/@lubriexpertos1?_r=1&_t=ZN-99x0zRMwPPq",
      icon: TikTokIcon,
    },
  ],
}
