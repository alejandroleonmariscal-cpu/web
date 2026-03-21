import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Aquí pondremos la URL de producción cuando la tengas. 
  // Por ahora, usamos una base para que el build pase.
  const baseUrl = 'https://lavanderia-superclean.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si llegas a crear páginas extra como /blog o /contacto, las agregaríamos aquí abajo
  ];
}