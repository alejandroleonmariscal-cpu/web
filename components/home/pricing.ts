// src/components/home/pricing.ts
import { PricingSectionProps } from '@/types/pricing';

export const pricingContent: PricingSectionProps = {
  eyebrow: "Tarifas Transparentes",
  title: "Precios que te encantarán",
  subtitle: "Cuidado profesional para tu ropa con precios claros y sin sorpresas.",
  supportNote: "Precios sujetos a peso final o tipo de prenda. Sin cargos ocultos.",
  
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
    href: "https://wa.me/523117134207" // El número de SúperClean
  }
};