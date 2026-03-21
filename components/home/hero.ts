import { siteConfig } from "@/content/site.config";
import { createCTA } from "@/lib/cta";

export const heroContent = {
  title: "Lavandería y Planchaduría en Tepic",
  subtitle: "La ropa sucia ya no se lava en casa. Nosotros la lavamos por ti con cuidado profesional.",
  
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