import React from 'react';

// --- SECCIONES (Componentes Visuales) ---
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { DeliverySection } from '@/components/sections/DeliverySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

// --- CONTENIDO (Data del Negocio) ---
import { heroContent } from '@/components/home/hero'; 
import { servicesContent } from '@/components/home/services';
import { pricingContent } from '@/components/home/pricing';
import { processContent } from '@/components/home/process';
import { deliveryContent } from '@/components/home/delivery';
import { locationContent } from '@/components/home/location';
import { reviewsContent } from '@/components/home/reviews';
import { faqContent } from '@/components/home/faq';
import { ctaContent } from '@/components/home/cta';

export default function HomePage() {
  return (
    // Importante: Ningún color de fondo aquí. Dejamos que se vea el "Océano" del Layout
    <div className="flex flex-col w-full relative z-10">
      <HeroSection content={heroContent} />
      <ServicesSection {...servicesContent} />
      <PricingSection {...pricingContent} />
      <ProcessSection {...processContent} />
      <DeliverySection {...deliveryContent} />
      <LocationSection {...locationContent} />
      <ReviewsSection {...reviewsContent} />
      <FAQSection {...faqContent} />
      <CTASection {...ctaContent} />
    </div>
  );
}