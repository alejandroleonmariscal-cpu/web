// src/types/pricing.ts

export interface PricingItem {
  readonly label: string;
  readonly price: string;
  readonly note?: string; // El "?" es clave para que sea opcional
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