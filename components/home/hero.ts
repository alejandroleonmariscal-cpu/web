import { siteConfig } from "@/content/site.config";
import { createCTA } from "@/lib/cta";

export const heroContent = {
  // Un título fuerte para el SEO en Google
  title: "Lavandería y Planchaduría en Tepic",
  
  // EL SLOGAN EXACTO (Sin agregados raros)
  subtitle: "La ropa sucia ya no se lava en casa, nosotros la lavamos por ti.",
  
  primaryCta: siteConfig.primaryCTA,
  
  secondaryCta: createCTA({
    label: "Ver servicios",
    href: "#servicios",
    variant: "secondary"
  }),

  highlights: [
    {
      icon: "pin",
      text: "Centro de Tepic"
    },
    {
      icon: "clock",
      text: "Abierto Lunes a Sábado"
    },
    {
      icon: "truck",
      text: "Servicio a domicilio"
    }
  ]
} as const;

export type HeroContent = typeof heroContent;