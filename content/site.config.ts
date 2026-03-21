import { SiteConfig } from "@/types/site";
import { createCTA } from "@/lib/cta";
import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";

const rawPhone = "+52 311 713 4207";
const whatsappMessage = "Hola Súperclean, me gustaría solicitar información sobre sus servicios.";

export const siteConfig: SiteConfig = {
  businessName: "Lavandería y Planchaduría Súperclean",
  tagline: "La ropa sucia ya no se lava en casa, nosotros la lavamos.",
  description: "Servicio profesional de lavado y planchado en Tepic. Especialistas en edredones y servicio a domicilio para tu comodidad.",
  phone: rawPhone,
  whatsapp: rawPhone,
  address: "Av. Juárez 277 B, Centro de Tepic",
  city: "Tepic",
  serviceArea: "Centro y zona metropolitana de Tepic",
  hours: "Lunes a sábado: 08:30 – 19:00",
  
  primaryCTA: createCTA({
    label: "Pedir servicio por WhatsApp",
    href: createWhatsAppLink(rawPhone, whatsappMessage),
    variant: "primary",
    isExternal: true
  }),
  
  secondaryCTA: createCTA({
    label: "Cómo llegar",
    href: "https://maps.google.com/?q=Av.+Juarez+277+B,+Centro,+Tepic",
    variant: "outline",
    isExternal: true
  })
};