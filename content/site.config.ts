import { SiteConfig } from "@/types/site";
import { createCTA } from "@/lib/cta";
import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";

const rawPhone = "+52 311 713 4207";
const whatsappMessage = "Hola Súperclean, me gustaría solicitar información sobre sus servicios.";

export const siteConfig: SiteConfig = {
  businessName: "Lavandería y Planchaduría Súperclean",
  tagline: "La ropa sucia ya no se lava en casa, nosotros la lavamos.",
  description: "Servicio profesional de lavado y planchado en Tepic. Especialistas en edredones y servicio a domicilio para tu comodidad.",
  
  // --- PROPIEDAD FALTANTE AGREGADA ---
  state: "Nayarit", 
  
  phone: rawPhone,
  whatsapp: rawPhone,
  
  // Actualizada a la ubicación oficial de Residencial la Loma
  address: "Paseo de la Loma 407, Colonia Residencial la Loma",
  city: "Tepic",
  serviceArea: "Tepic y zona metropolitana",
  hours: "Lunes a sábado: 08:30 – 19:00",
  
  primaryCTA: createCTA({
    label: "Pedir servicio por WhatsApp",
    href: createWhatsAppLink(rawPhone, whatsappMessage),
    variant: "primary",
    isExternal: true
  }),
  
  secondaryCTA: createCTA({
    label: "Cómo llegar",
    href: "https://maps.app.goo.gl/Yp9HwUf8r1Vf6Z4M8", // Asegúrate de que este link sea el correcto de Maps
    variant: "outline",
    isExternal: true
  })
};