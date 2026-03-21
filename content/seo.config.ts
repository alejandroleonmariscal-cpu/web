import { siteConfig } from "@/content/site.config";
// Usamos el alias @/ para apuntar directo a la subcarpeta whatsapp
import { createWhatsAppLink } from "@/lib/whatsapp/whatsapp";

export const seoConfig = {
  title: {
    default: siteConfig.businessName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  canonical: "https://superclean-tepic.com", // Ajustar cuando se tenga el dominio final
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://superclean-tepic.com",
    siteName: siteConfig.businessName,
    title: siteConfig.businessName,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    handle: "@supercleantepic",
    site: "@supercleantepic",
    cardType: "summary_large_image",
  },
  // Ejemplo de cómo inyectar el link de WhatsApp en metadata si fuera necesario
  contactLink: createWhatsAppLink(siteConfig.whatsapp, "Hola, vengo desde su sitio web."),
};

export type SeoConfig = typeof seoConfig;