"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface DeliverySectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly highlights?: readonly string[];
  readonly primaryCta: { readonly label: string; readonly href: string };
}

export const DeliverySection = ({
  eyebrow = "Servicio a domicilio",
  title,
  subtitle,
  highlights,
  primaryCta
}: DeliverySectionProps) => {
  return (
    // CAMBIO CLAVE: Quitamos max-w-7xl de aquí para que el blanco sea de orilla a orilla
    <Section id="domicilio" className="relative py-16 md:py-24 lg:py-40 w-full overflow-visible bg-white">
      
      {/* --- EFECTO DE LIMPIEZA --- */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-50 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4 z-0" />

      {/* Contenedor centrado para el contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tarjeta de Diseño "Clean" */}
        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(11,27,61,0.05)] p-6 md:p-12 lg:p-20 overflow-visible relative group transition-all duration-700">
          
          {/* --- LA CAMIONETA --- */}
          <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 lg:-right-20 w-40 h-40 md:w-64 md:h-64 lg:w-[550px] lg:h-[550px] pointer-events-none z-30">
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full lg:w-2/3 h-1/4 bg-blue-200/30 rounded-full blur-[40px] lg:blur-[60px] opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1000" />
            <img 
              src="/images/delivery-van.png" 
              alt="Delivery Súperclean Tepic" 
              className="object-contain w-full h-full drop-shadow-[0_20px_30px_rgba(11,27,61,0.15)] transform scale-110 lg:scale-100 lg:group-hover:scale-105 lg:group-hover:-translate-x-4 transition-all duration-1000 ease-out" 
            />
          </div>

          <div className="max-w-2xl relative z-10">
            <Badge variant="default" className="mb-6 lg:mb-8 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-md px-4 py-1.5 uppercase tracking-wider text-[10px] lg:text-xs font-black">
              {eyebrow}
            </Badge>
            
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#0B1B3D] mb-6 lg:mb-8 leading-[1.1] tracking-tighter">
              {title}
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 lg:mb-12 leading-relaxed font-medium max-w-[85%] lg:max-w-lg">
              {subtitle}
            </p>

            {/* Viñetas */}
            {highlights && (
              <div className="flex flex-wrap gap-3 mb-10 lg:mb-14">
                {highlights.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2 lg:space-x-3 bg-white py-2 px-4 lg:py-3 lg:px-6 rounded-full border border-slate-100 shadow-sm hover:border-[#FF4A17]/30 transition-all group/pill">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_5px_10px_rgba(37,211,102,0.2)]">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 lg:w-4 lg:h-4 text-white">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#0B1B3D] font-bold text-xs lg:text-sm">{point}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="relative z-40">
              <Button 
                href={primaryCta.href} 
                variant="primary" 
                size="lg" 
                external
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white border-none shadow-[0_15px_30px_rgba(37,211,102,0.3)] px-12 py-5 font-black text-lg rounded-2xl transform hover:-translate-y-1 transition-all"
              >
                {primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};