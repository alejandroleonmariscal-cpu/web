// Cambiamos "../site.config" por "@/content/site.config"
import { siteConfig } from "@/content/site.config";

export const pricingContent = {
  eyebrow: "Precios claros",
  title: "Precios simples y sin sorpresas",
  subtitle: "Te decimos el precio antes de lavar para que sepas exactamente cuánto pagarás.",
  supportNote: "Precio sujeto a tipo de prenda o peso final. Sin cargos ocultos.",
  pricingItems: [
    { label: "Lavado por kilo", price: "$--", note: "Precio por volumen de ropa" },
    { label: "Planchado por prenda", price: "$--", note: "Desde camisas hasta vestidos" },
    { label: "Edredones", price: "$--", note: "Varía según tamaño (Ind/Mat/KS)" }
  ],
  primaryCta: siteConfig.primaryCTA
} as const;

export type PricingContent = typeof pricingContent;