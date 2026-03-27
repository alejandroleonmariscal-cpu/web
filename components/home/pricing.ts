// src/components/home/pricing.ts

import { PricingSectionProps } from '@/types/pricing';

export const pricingContent: PricingSectionProps = {
  eyebrow: "Servicios Profesionales",
  title: "Cuidado que tu ropa merece",
  subtitle: "Haz clic en el servicio que necesites y cotiza directamente con nosotros por WhatsApp.",
  supportNote: "¡Facturamos todos tus servicios! Precios sujetos a peso o tipo de prenda.",
  
  pricingItems: [
    { 
      label: "Lavado por kilo", 
      ctaLabel: "Cotizar ahora", 
      href: "https://wa.me/523117434207?text=Hola!%20Me%20interesa%20el%20servicio%20de%20lavado%20por%20kilo.",
      note: "Ropa de uso normal (no lavado en seco)" 
    },
    { 
      label: "Lunes de promoción", 
      ctaLabel: "Consultar promo", 
      href: "https://wa.me/523117434207?text=Hola!%20Me%20interesa%20la%20promoción%20de%20lunes%20en%20planchado.",
      note: "Inicia la semana con todo impecable" 
    },
    { 
      label: "Cobertores", 
      ctaLabel: "Preguntar precio", 
      href: "https://wa.me/523117434207?text=Hola!%20Quiero%20preguntar%20el%20precio%20para%20lavado%20de%20cobertores.",
      note: "Limpieza profunda y suavidad garantizada" 
    },
    { 
      label: "Edredones", 
      ctaLabel: "Pedir informes", 
      href: "https://wa.me/523117434207?text=Hola!%20Me%20interesa%20el%20lavado%20de%20edredones%20en%20lavadora%20industrial.",
      note: "Lavado en lavadora Industrial" 
    },
    { 
      label: "Planchado por pieza o por docena", // <-- EL CAMBIO SOLICITADO
      ctaLabel: "Agendar servicio", 
      href: "https://wa.me/523117434207?text=Hola!%20Quiero%20agendar%20un%20servicio%20de%20planchado%20por%20docena.",
      note: "" // <-- SE BORRÓ "(Martes a Sábado)"
    },
  ],

  primaryCta: {
    label: "Ver todos los servicios",
    href: "https://wa.me/523117434207?text=Hola!%20Me%20gustaría%20conocer%20todos%20sus%20servicios."
  }
};