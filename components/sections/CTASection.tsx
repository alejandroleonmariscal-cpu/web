"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta?: { readonly label: string; readonly href: string };
  readonly trustNote?: string;
}

export const CTASection = ({
  eyebrow = "Listo para pedir servicio",
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustNote
}: CTASectionProps) => {
  return (
    // CAMBIO A BLANCO: Fondo blanco puro para cerrar con limpieza
    <Section className="relative pt-24 lg:pt-40 pb-0 w-full max-w-none overflow-hidden bg-white">
      
      {/* --- FONDO CINEMÁTICO LIGHT --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-bg.webp" 
          alt="Agua cristalina y fresca" 
          // Opacidad baja y mix-blend-multiply para que se vea sutil sobre el blanco
          className="w-full h-full object-cover opacity-10 mix-blend-multiply scale-110" 
          style={{ animation: 'slow-drift 20s ease-in-out infinite' }}
        />
        
        {/* Luces sutiles en los bordes */}
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#FF4A17]/5 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Degradado para fundir con el blanco de la página */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tarjeta de Cristal Claro */}
        <div className="bg-slate-50/80 backdrop-blur-[60px] border-t border-l border-r border-slate-200/50 rounded-t-[4rem] lg:rounded-t-[6rem] p-10 md:p-24 text-center relative overflow-hidden shadow-[0_-20px_80px_rgba(11,27,61,0.05)]">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {eyebrow && (
              <Badge variant="default" className="mb-10 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-xl px-8 py-2.5 text-xs lg:text-sm uppercase tracking-[0.3em] font-black shadow-sm">
                {eyebrow}
              </Badge>
            )}
            
            {/* Título en Azul Marino */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0B1B3D] mb-10 leading-[0.95] tracking-tighter">
              {title}
            </h2>
            
            <p className="text-xl md:text-3xl text-slate-600 mb-16 font-light leading-tight max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
              <div className="relative group">
                {/* Brillo del botón WhatsApp */}
                <div className="absolute -inset-1 bg-[#22C55E] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
                <Button 
                  href={primaryCta.href} 
                  variant="primary" 
                  size="lg" 
                  external
                  className="relative bg-[#25D366] hover:bg-[#1DA851] text-white border-none px-12 py-6 text-2xl font-black rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  <span className="flex items-center justify-center gap-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.347-.272.273-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    {primaryCta.label}
                  </span>
                </Button>
              </div>
              
              <Button 
                href={secondaryCta?.href || "#"} 
                variant="outline" 
                size="lg"
                className="bg-white border-slate-200 text-[#0B1B3D] hover:bg-slate-50 hover:border-slate-300 px-12 py-6 text-xl font-bold rounded-2xl transition-all"
              >
                {secondaryCta?.label || "Ver más"}
              </Button>
            </div>

            {trustNote && (
              <p className="text-slate-400 text-xs lg:text-sm font-black tracking-[0.4em] uppercase flex items-center justify-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                {trustNote}
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};