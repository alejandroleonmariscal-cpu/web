import { SiteConfig } from "@/types/site";
// Importamos el contrato que creamos en el Paso 1
import { PricingSectionProps } from "../src/types/pricing";
import { createCTA } from "@/lib/cta";
import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";

const rawPhone = "+52 311 713 4207";
const whatsappMessage = "Hola Súperclean, me gustaría solicitar información sobre sus servicios.";

// 1. CONFIGURACIÓN GENERAL DEL SITIO
export const siteConfig: SiteConfig = {
  businessName: "Lavandería y Planchaduría Súperclean",
  tagline: "La ropa sucia ya no se lava en casa, nosotros la lavamos.",
  description: "Servicio profesional de lavado y planchado en Tepic. Especialistas en edredones y servicio a domicilio para tu comodidad.",
  state: "Nayarit", 
  phone: rawPhone,
  whatsapp: rawPhone,
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
    href: "https://maps.app.goo.gl/tu-link-real", 
    variant: "outline",
    isExternal: true
  })
};

// 2. CONFIGURACIÓN DE PRECIOS (La carnita del negocio)
export const pricingContent: PricingSectionProps = {
  eyebrow: "Tarifas Transparentes",
  title: "Precios que te encantarán",
  subtitle: "Cuidado profesional para tu ropa con precios claros y sin sorpresas.",
  supportNote: "Precios sujetos a peso final o tipo de prenda. Sin cargos ocultos.",
  
  // Aquí están tus precios reales de la captura
  pricingItems: [
    { label: "Lavado kilo", price: "$26.00", note: "Ropa de uso normal (no lavado en seco)" },
    { label: "Lunes de promoción", price: "$130.00", note: "Inicia la semana con todo limpio" },
    { label: "Cobertor", price: "$95.00", note: "Limpieza profunda y suavidad" },
    { label: "Edredón", price: "$125.00", note: "Lavado en lavadora Industrial" },
    { label: "Planchado por docena", price: "$145.00", note: "12 piezas (Martes a Sábado)" },
    { label: "Servicio a domicilio", price: "$30.00", note: "Recolección y entrega en tu puerta" },
  ],

  primaryCta: {
    label: "Agendar por WhatsApp",
    href: createWhatsAppLink(rawPhone, whatsappMessage)
  }
};