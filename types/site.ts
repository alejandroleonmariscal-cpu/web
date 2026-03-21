import { CTA } from "./cta";

export interface SiteConfig {
  businessName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  state: string; // <-- Agregamos esta línea para corregir el error ts(2339)
  serviceArea: string;
  hours: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  tertiaryCTA?: CTA;
}