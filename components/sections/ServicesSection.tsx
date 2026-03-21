"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

interface Service {
  readonly title: string;
  readonly description: string;
  readonly badge?: string;
}

interface ServicesSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly services: readonly Service[];
}

export const ServicesSection = ({ eyebrow, title, subtitle, services }: ServicesSectionProps) => {
  return (
    <Section id="servicios" className="relative py-20 lg:py-32 w-full max-w-none">
      
      {/* --- IMAGEN GIGANTE DESVANECIDA (Reemplaza al PNG animado) --- */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 pointer-events-none overflow-hidden">
         {/* Aquí pondrás una foto tuya (ej. toallas dobladas, agua, o planchas industriales) */}
         <img 
           src="/images/services-bg.webp" 
           alt="Cuidado profesional de ropa" 
           className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
         />
         
         {/* Máscaras de degradado: Esto hace el efecto "desvanecido" perfecto hacia tu fondo oscuro */}
         {/* Desvanece la izquierda para que el texto principal se lea */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
         {/* Desvanece arriba y abajo para que no se vea un corte duro con las otras secciones */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#0EA5E9] via-transparent to-[#0F172A]" />
      </div>

      {/* --- CONTENIDO DE SERVICIOS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left max-w-3xl mb-16">
          {eyebrow && (
            <Badge variant="default" className="mb-4 bg-white/10 text-[#93C5FD] border-white/20 backdrop-blur-md px-4 py-1 inline-flex">
              {eyebrow}
            </Badge>
          )}
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 drop-shadow font-light max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* GRID DE SERVICIOS - Efecto Cristal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0F172A]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden"
            >
              {/* Resplandor interno sutil al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {service.badge && (
                <Badge variant="success" className="mb-5 bg-[#22C55E]/20 text-[#4ADE80] border-[#22C55E]/30 relative z-10">
                  {service.badge}
                </Badge>
              )}
              
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md relative z-10">
                {service.title}
              </h3>
              
              <p className="text-blue-50/70 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}; 