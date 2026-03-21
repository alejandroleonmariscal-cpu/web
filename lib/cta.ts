import { CTA, CTAVariant } from "../types/cta";
// Corregimos la ruta para entrar a la subcarpeta whatsapp/whatsapp
import { createWhatsAppLink } from "./whatsapp/whatsapp";

interface CreateCTAParams {
  label: string;
  href: string;
  variant?: CTAVariant;
  isExternal?: boolean;
}

/**
 * Helper para construir objetos CTA de forma consistente.
 */
export function createCTA({
  label,
  href,
  variant = 'primary',
  isExternal = false,
}: CreateCTAParams): CTA {
  const finalIsExternal = isExternal || href.startsWith('http') || href.startsWith('https');

  return {
    label,
    href,
    variant,
    isExternal: finalIsExternal,
  };
}

/**
 * Helper específico para CTAs de WhatsApp
 * Ahora usa el import superior para evitar errores de resolución en el build
 */
export function createWhatsAppCTA(label: string, phone: string, message: string): CTA {
  return createCTA({
    label,
    href: createWhatsAppLink(phone, message),
    variant: 'primary',
    isExternal: true,
  });
}