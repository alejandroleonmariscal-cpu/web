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
    <Section id="domicilio" className="relative py-16 md:py-24 lg:py-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      
      {/* --- ESPUMA DE FONDO --- */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-white/5 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4 z-0" />

      {/* Tarjeta de Cristal */}
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-6 md:p-12 lg:p-20 overflow-visible relative group transition-all duration-700">
        
        {/* --- LA CAMIONETA (Ahora visible en móvil) --- */}
        <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 lg:-right-20 w-40 h-40 md:w-64 md:h-64 lg:w-[550px] lg:h-[550px] pointer-events-none z-30">
          
          {/* Resplandor de Espuma Blanca debajo (ajustado para móvil) */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full lg:w-2/3 h-1/4 bg-white/20 rounded-full blur-[40px] lg:blur-[80px] opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1000" />
          
          <img 
            src="/images/delivery-van.png" 
            alt="Delivery Súperclean Tepic" 
            className="object-contain w-full h-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] transform scale-110 lg:scale-100 lg:group-hover:scale-105 lg:group-hover:-translate-x-4 transition-all duration-1000 ease-out" 
          />
        </div>

        <div className="max-w-2xl relative z-10">
          <Badge variant="default" className="mb-6 lg:mb-8 bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-1 uppercase tracking-wider text-[10px] lg:text-xs font-bold">
            {eyebrow}
          </Badge>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 lg:mb-8 leading-tight tracking-tight drop-shadow-2xl">
            {title}
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-blue-100/80 mb-8 lg:mb-12 leading-relaxed font-light drop-shadow-md max-w-[80%] lg:max-w-lg">
            {subtitle}
          </p>

          {/* Viñetas Estilo "Píldora" (Ajustadas para móvil) */}
          {highlights && (
            <div className="flex flex-wrap gap-3 mb-10 lg:mb-14">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-center space-x-2 lg:space-x-3 bg-white/5 py-1.5 px-3 lg:py-2.5 lg:px-5 rounded-full border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-[#22C55E] flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 text-white">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-[11px] lg:text-sm">{point}</span>
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
              className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16a34a] text-white border-none shadow-[0_15px_30px_rgba(34,197,94,0.3)] px-10 py-4 lg:py-5 font-bold text-base lg:text-lg rounded-2xl transform hover:-translate-y-1 transition-all"
            >
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};