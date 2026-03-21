"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface LocationSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly addressLines: readonly string[];
  readonly hours: string;
  readonly mapEmbedUrl?: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta?: { readonly label: string; readonly href: string };
}

export const LocationSection = ({
  eyebrow = "Ubicación",
  title,
  subtitle,
  addressLines,
  hours,
  mapEmbedUrl,
  primaryCta,
  secondaryCta
}: LocationSectionProps) => {
  return (
    <Section id="ubicacion" className="relative py-24 lg:py-40 w-full max-w-none overflow-hidden bg-[#0F172A]">
      
      {/* --- EFECTO DE ESPUMA Y LUZ --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LADO IZQUIERDO: INFORMACIÓN CON ESTILO PREMIUM */}
          <div className="max-w-xl">
            <Badge variant="default" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
              {eyebrow}
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
              {title}
            </h2>
            
            <p className="text-xl text-blue-100/80 mb-12 font-light leading-relaxed drop-shadow-md">
              {subtitle}
            </p>

            <div className="space-y-10 mb-12">
              {/* Dirección */}
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:bg-[#2563EB]/40 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1.5">Nuestra sucursal</h4>
                  {addressLines.map((line, i) => (
                    <p key={i} className="text-blue-50/70 text-lg font-light tracking-wide">{line}</p>
                  ))}
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:bg-[#2563EB]/40 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1.5">Horario de atención</h4>
                  <p className="text-blue-50/70 text-lg font-light tracking-wide">{hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <Button 
                href={primaryCta.href} 
                variant="primary" 
                className="bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-[0_10px_30px_rgba(34,197,94,0.3)] px-10 py-4 font-bold rounded-2xl"
              >
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button 
                  href={secondaryCta.href} 
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-md px-10 py-4 rounded-2xl"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* LADO DERECHO: EL MAPA (TRATAMIENTO DE CRISTAL) */}
          <div className="relative group">
            {/* Brillo decorativo detrás del mapa */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-white/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="w-full h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)] bg-white/5 relative border border-white/10 backdrop-blur-sm">
              {mapEmbedUrl ? (
                <iframe 
                  src={mapEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  className="relative z-10 opacity-80 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-blue-200/40">
                  <span className="animate-pulse">Cargando mapa de Súper-Clean...</span>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
};