"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

interface Service {
  readonly title: string;
  readonly description: string;
  readonly badge?: string;
  readonly image: string; // Nueva propiedad para la foto
}

interface ServicesSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly services: readonly Service[];
}

export const ServicesSection = ({ eyebrow, title, subtitle, services }: ServicesSectionProps) => {
  return (
    <Section id="servicios" className="relative py-24 lg:py-40 w-full max-w-none bg-[#0B1B3D]">
      
      {/* --- FONDO DECORATIVO --- */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 pointer-events-none opacity-20">
         <img 
           src="/images/services-bg.webp" 
           alt="Textura" 
           className="w-full h-full object-cover mix-blend-overlay" 
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ALERTA SUCURSAL */}
        <div className="mb-20 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center gap-6 backdrop-blur-md">
          <div className="bg-[#FF4A17] p-4 rounded-2xl text-white shadow-[0_0_20px_rgba(255,74,23,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-black text-xl mb-1 italic">¡AVISO IMPORTANTE!</h4>
            <p className="text-blue-100/50 text-sm font-light">Garantizamos tu ropa solo en nuestra **Única Sucursal Oficial** de Av. Juárez. No tenemos otras ubicaciones.</p>
          </div>
        </div>

        {/* CABECERA */}
        <div className="text-center lg:text-left max-w-3xl mb-20">
          <Badge className="mb-6 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 px-6 py-2 uppercase font-black tracking-widest text-[10px]">
            {eyebrow || "Nuestros Servicios"}
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            {title}
          </h2>
          <p className="text-xl text-blue-100/60 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-4 shadow-2xl"
            >
              {/* CONTENEDOR DE IMAGEN */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-transparent opacity-60" />
                
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-[#FF4A17] text-white border-none px-4 py-1.5 font-black text-[10px] shadow-xl">
                      {service.badge}
                    </Badge>
                  </div>
                )}
              </div>

              {/* TEXTO DE LA CARD */}
              <div className="p-10">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#FF4A17] transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-100/50 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};