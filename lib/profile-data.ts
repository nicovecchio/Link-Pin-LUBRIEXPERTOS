import type { ComponentType, SVGProps } from "react"
import { MapPin } from "lucide-react"
import { WhatsAppIcon, InstagramIcon } from "@/components/brand-icons"

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

// ────────────────────────────────────────────────────────────────
//  Edita libremente este objeto para personalizar tu página.
// ────────────────────────────────────────────────────────────────
export const profileData: ProfileData = {
  avatarUrl: "/profile.png",
  name: "Zaituna Cafe",
  bio: "Compartir contigo nos hace feliz",
  socialLinks: [
    {
      label: "Instagram",
      url: "https://instagram.com/zaitunacafe",
      icon: InstagramIcon,
    },
    {
      label: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=584242753345&text&type=phone_number&app_absent=0",
      icon: WhatsAppIcon,
    },
  ],
  links: [
    {
      title: "Visítanos",
      subtitle: "Zaituna Café · Sambil Caracas",
      url: "https://google.com/maps/place/Zaituna+Café+Sambil+Caracas/@10.4888557,-66.8539086,18.5z/data=!4m8!3m7!1s0x8c2a59a8552d2501:0x8fc704ab3a62205b!8m2!3d10.4886374!4d-66.8541086!9m1!1b1!16s%2Fg%2F11sdbfwg6q?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
      icon: MapPin,
    },
  ],
}
