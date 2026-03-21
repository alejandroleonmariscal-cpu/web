import { siteConfig } from "@/content/site.config";

export const locationContent = {
  eyebrow: "Ubicación",
  title: "Estamos en el Centro de Tepic",
  subtitle: "Visítanos en nuestra sucursal o contáctanos para servicio a domicilio.",
  addressLines: [siteConfig.address, siteConfig.city + ", " + siteConfig.state],
  hours: siteConfig.hours,
  // URL DE EMBED CORREGIDA PARA SÚPER-CLEAN TEPIC
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.7208154564344!2d-104.8973710238466!3d21.5000551703666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273d435df761f7%3A0xcf5bfd2fdb0df9e8!2sLavander%C3%ADa%20S%C3%BAper-Clean!5e0!3m2!1ses-419!2smx!4v1710457200000!5m2!1ses-419!2smx", 
  primaryCta: siteConfig.secondaryCTA, // "Cómo llegar"
  secondaryCta: siteConfig.primaryCTA // WhatsApp
};