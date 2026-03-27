import { SiteConfig } from "@/types/site";
import { PricingSectionProps } from "../src/types/pricing";
import { createCTA } from "@/lib/cta";
import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";

// 1. DATOS DE CONTACTO
const rawPhone = "+52 311 743 4207";
const baseMsg = "Hola Súperclean, me gustaría solicitar información.";

// 1. CONFIGURACIÓN GENERAL DEL SITIO
export const siteConfig: SiteConfig = {
  businessName: "Lavandería y Planchaduría Súperclean",
  tagline: "La ropa sucia ya no se lava en casa, nosotros la lavamos por ti",
  description: "Lavado y planchado por encargo, para que disfrutes de tu tiempo y tengas tu ropa limpia y bien planchada.",
  state: "Nayarit", 
  phone: rawPhone,
  whatsapp: rawPhone,
  address: "Av. Juárez 277-B, entre P. Sánchez y 12 de Octubre. Col. Centro",
  city: "Tepic",
  serviceArea: "Zona Centro, Cd del Valle y Libramiento",
  hours: "Lunes a Viernes de 08:30 a 19:00 | Sábados de 08:30 a 14:00",
  
  primaryCTA: createCTA({
    label: "Pedir servicio por WhatsApp",
    href: createWhatsAppLink(rawPhone, baseMsg),
    variant: "primary",
    isExternal: true
  }),
  
  secondaryCTA: createCTA({
    label: "Cómo llegar",
    href: "https://maps.google.com/?q=Av.+Juárez+277-B,+Centro,+Tepic,+Nayarit", 
    variant: "outline",
    isExternal: true
  })
};

// 2. CONFIGURACIÓN DE PRECIOS (Convertida a Botones de Acción)
export const pricingContent: PricingSectionProps = {
  eyebrow: "Servicios Profesionales",
  title: "Cuidado que tu ropa merece",
  subtitle: "Haz clic en el servicio que necesites y cotiza directamente con nosotros por WhatsApp.",
  supportNote: "¡Facturamos todos tus servicios! Precios sujetos a peso o tipo de prenda.",
  
  pricingItems: [
    { 
      label: "Lavado por kilo", 
      ctaLabel: "Cotizar ahora", 
      href: createWhatsAppLink(rawPhone, "Hola! Me interesa el servicio de lavado por kilo."),
      note: "Ropa de uso normal (no lavado en seco)" 
    },
    { 
      label: "Lunes de promoción en planchado", 
      ctaLabel: "Consultar promoción", 
      href: createWhatsAppLink(rawPhone, "Hola! Me interesa la promoción de lunes en planchado."),
      note: "Inicia la semana con todo impecable" 
    },
    { 
      label: "Cobertores", 
      ctaLabel: "Preguntar precio", 
      href: createWhatsAppLink(rawPhone, "Hola! Quiero preguntar el precio para lavado de cobertores."),
      note: "Limpieza profunda y suavidad garantizada" 
    },
    { 
      label: "Edredones", 
      ctaLabel: "Pedir informes", 
      href: createWhatsAppLink(rawPhone, "Hola! Me interesa el lavado de edredones en lavadora industrial."),
      note: "Lavado en lavadora Industrial" 
    },
    { 
      label: "Planchado por docena", 
      ctaLabel: "Agendar servicio", 
      href: createWhatsAppLink(rawPhone, "Hola! Quiero agendar un servicio de planchado por docena."),
      note: "12 piezas (Martes a Sábado)" 
    },
  ],

  primaryCta: {
    label: "Ver todos los servicios",
    href: createWhatsAppLink(rawPhone, "Hola! Me gustaría conocer todos sus servicios y precios.")
  }
};