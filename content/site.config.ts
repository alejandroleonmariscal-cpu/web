import { SiteConfig } from "@/types/site";
import { PricingSectionProps } from "../src/types/pricing";
import { createCTA } from "@/lib/cta";
import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";

// 1. EL NÚMERO DE TELÉFONO CORREGIDO
const rawPhone = "+52 311 743 4207";
const whatsappMessage = "Hola Súperclean, me gustaría solicitar información sobre sus servicios.";

// 1. CONFIGURACIÓN GENERAL DEL SITIO
export const siteConfig: SiteConfig = {
  businessName: "Lavandería y Planchaduría Súperclean",
  tagline: "La ropa sucia ya no se lava en casa, nosotros la lavamos.",
  // Descripción actualizada a petición del cliente
  description: "Lavado y planchado por encargo, para que disfrutes de tu tiempo y tengas tu ropa limpia y bien planchada.",
  state: "Nayarit", 
  phone: rawPhone,
  whatsapp: rawPhone,
  // Dirección exacta corregida
  address: "Av. Juárez 277-B, entre P. Sánchez y 12 de Octubre. Col. Centro",
  city: "Tepic",
  serviceArea: "Tepic y zona metropolitana",
  // Horarios actualizados con el sábado
  hours: "Lunes a Viernes de 08:30 a 19:00 | Sábados de 08:30 a 14:00",
  
  primaryCTA: createCTA({
    label: "Pedir servicio por WhatsApp",
    href: createWhatsAppLink(rawPhone, whatsappMessage),
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

// 2. CONFIGURACIÓN DE PRECIOS 
export const pricingContent: PricingSectionProps = {
  eyebrow: "Tarifas Transparentes",
  title: "Precios que te encantarán",
  subtitle: "Cuidado profesional para tu ropa con precios claros y sin sorpresas.",
  // Facturación agregada aquí como nota de confianza
  supportNote: "Precios sujetos a peso final o tipo de prenda. Sin cargos ocultos. ¡Facturamos tus servicios!",
  
  pricingItems: [
    { label: "Lavado kilo", price: "$26.00", note: "Ropa de uso normal (no lavado en seco)" },
    { label: "Lunes de promoción en planchado", price: "$130.00", note: "Inicia la semana con todo limpio" },
    { label: "Cobertor", price: "$95.00", note: "Limpieza profunda y suavidad" },
    { label: "Edredón", price: "$125.00", note: "Lavado en lavadora Industrial" },
    { label: "Planchado por docena", price: "$145.00", note: "12 piezas (Martes a Sábado)" },
    // El servicio a domicilio fue removido de la lista de precios por estrategia
  ],

  primaryCta: {
    label: "Agendar por WhatsApp",
    href: createWhatsAppLink(rawPhone, whatsappMessage)
  }
};