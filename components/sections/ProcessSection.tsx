"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

interface Step {
  readonly title: string;
  readonly description?: string;
}

interface ProcessSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly steps: readonly Step[];
}

export const ProcessSection = ({
  eyebrow = "Proceso",
  title,
  subtitle,
  steps
}: ProcessSectionProps) => {
  return (
    // CAMBIO DE LOOK: Azul Marino profundo del logo
    <Section id="proceso" className="relative py-24 lg:py-40 w-full max-w-none overflow-hidden bg-[#0B1B3D]">
      
      {/* --- DECORACIÓN DE FONDO (Burbujas y Brillos) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-[#FF4A17]/10 rounded-full blur-[100px]" />
        
        {/* SVG de la línea punteada (Caminito) */}
        <svg 
          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10" 
          viewBox="0 0 1200 600" 
          fill="none"
        >
          <path 
            d="M 100 300 Q 300 100 600 300 T 1100 300" 
            stroke="white" 
            strokeWidth="3" 
            strokeDasharray="10 15"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="default" className="mb-6 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-md px-5 py-1.5 uppercase tracking-widest text-[10px] font-black">
            {eyebrow}
          </Badge>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            {title}
          </h2>
          <p className="text-xl text-blue-100/60 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* PASOS DEL PROCESO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="relative group transition-all duration-500 hover:-translate-y-3"
            >
              {/* Tarjeta de Paso */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 h-full flex flex-col items-center lg:items-start text-center lg:text-left shadow-2xl group-hover:bg-white/10 transition-colors">
                
                {/* Número del Paso (Naranja SúperClean) */}
                <div className="w-16 h-16 rounded-2xl bg-[#FF4A17] flex items-center justify-center text-white text-3xl font-black mb-8 shadow-[0_10px_20px_rgba(255,74,23,0.4)] group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                
                {item.description && (
                  <p className="text-blue-100/50 text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                )}

                {/* Decoración sutil al final de la tarjeta */}
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-1 bg-[#FF4A17] rounded-full" />
                </div>
              </div>

              {/* Conector visual (solo en desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4A17" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};