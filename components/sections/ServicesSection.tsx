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
    // CAMBIO DE LOOK: Fondo Azul Marino (#0B1B3D) para crear alto contraste con el Hero blanco
    <Section id="servicios" className="relative py-20 lg:py-32 w-full max-w-none bg-[#0B1B3D]">
      
      {/* --- IMAGEN GIGANTE DESVANECIDA (Opacidad baja para mantenerlo elegante) --- */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 pointer-events-none overflow-hidden">
         {/* Aquí pondrás la foto tuya de las máquinas o ropa impecable */}
         <img 
           src="/images/services-bg.webp" 
           alt="Cuidado profesional de ropa" 
           className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
         />
         
         {/* Máscaras de degradado: Desvanece hacia el Azul Marino */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D] via-transparent to-[#0B1B3D]" />
      </div>

      {/* --- CONTENIDO DE SERVICIOS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- NUEVA ALERTA: ÚNICA SUCURSAL --- */}
        <div className="mb-16 bg-[#FF4A17]/10 border border-[#FF4A17]/30 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 justify-between shadow-2xl backdrop-blur-sm animate-pulse-slow">
          <div className="flex items-start gap-4">
            <div className="bg-[#FF4A17] p-3 rounded-full text-white shrink-0 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div className="text-left">
              <h4 className="text-white font-black text-xl mb-1 drop-shadow-sm">¡Atención! Única Sucursal Oficial</h4>
              <p className="text-blue-100/70 text-sm md:text-base font-light max-w-2xl leading-relaxed">
                Para garantizar la calidad que nos distingue desde hace años, te recordamos que NO contamos con sucursales. No te dejes confundir por imitaciones; visítanos únicamente en nuestro local de la Av. Juárez.
              </p>
            </div>
          </div>
        </div>
        {/* --- FIN DE ALERTA --- */}


        <div className="text-center lg:text-left max-w-3xl mb-16">
          {eyebrow && (
            <Badge variant="default" className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-1 inline-flex font-bold uppercase tracking-wider text-xs">
              {eyebrow}
            </Badge>
          )}
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-tighter leading-[1.1]">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100/70 font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* GRID DE SERVICIOS - Tarjetas Claras sobre fondo oscuro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              // Tarjetas blancas con toque de cristal para no ser pesadas
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4A17]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {service.badge && (
                <Badge variant="success" className="mb-6 bg-[#FF4A17]/20 text-[#FF4A17] border-[#FF4A17]/30 relative z-10 font-black uppercase tracking-widest text-[10px]">
                  {service.badge}
                </Badge>
              )}
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[#FF4A17] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-blue-100/60 text-sm md:text-base leading-relaxed relative z-10 font-light group-hover:text-blue-50 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};