// src/types/pricing.ts

export interface PricingItem {
  readonly label: string;
  readonly ctaLabel: string; // Ejemplo: "Consultar" o "Agendar"
  readonly href: string;     // El link directo a WhatsApp
  readonly note?: string; 
}

export interface PricingSectionProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly pricingItems: readonly PricingItem[];
  readonly supportNote: string;
  readonly primaryCta: {
    readonly label: string;
    readonly href: string;
  };
}