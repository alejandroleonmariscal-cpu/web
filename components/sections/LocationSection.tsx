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
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta?: { readonly label: string; readonly href: string };
}

export const LocationSection = ({
  eyebrow = "Ubicación",
  title,
  subtitle,
  addressLines,
  hours,
  primaryCta,
}: LocationSectionProps) => {
  return (
    // CAMBIO DE LOOK: Fondo Azul Marino (#0B1B3D)
    <Section id="ubicacion" className="relative py-24 lg:py-40 w-full max-w-none overflow-hidden bg-[#0B1B3D]">
      
      {/* --- EFECTOS DE LUZ --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FF4A17]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LADO IZQUIERDO: INFORMACIÓN */}
          <div className="max-w-xl text-center lg:text-left">
            {eyebrow && (
              <Badge variant="default" className="mb-6 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-md px-4 py-1.5 uppercase tracking-widest text-[10px] font-black">
                {eyebrow}
              </Badge>
            )}
            
            {/* Título en Blanco */}
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              {title}
            </h2>
            
            {/* Subtítulo en Azul Claro tenue */}
            <p className="text-xl text-blue-100/60 mb-12 font-light leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-10 mb-12">
              {/* Dirección */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:bg-[#FF4A17] group-hover:border-[#FF4A17] transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1.5 group-hover:text-[#FF4A17] transition-colors">Local Oficial</h4>
                  {addressLines.map((line, i) => (
                    <p key={i} className="text-blue-100/50 text-lg font-light tracking-wide">{line}</p>
                  ))}
                </div>
              </div>

              {/* Horario */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:bg-[#FF4A17] group-hover:border-[#FF4A17] transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1.5 group-hover:text-[#FF4A17] transition-colors">Horario de atención</h4>
                  <p className="text-blue-100/50 text-lg font-light tracking-wide">{hours}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button 
                href={primaryCta.href} 
                variant="primary" 
                className="bg-[#25D366] hover:bg-[#1DA851] text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] px-10 py-4 font-black rounded-2xl transition-all hover:-translate-y-1"
              >
                {primaryCta.label}
              </Button>
            </div>
          </div>

          {/* LADO DERECHO: FOTO Y MAPA CON ESTILO CRISTAL */}
          <div className="relative group space-y-6">
            
            {/* Foto del Local */}
            <div className="relative bg-white/5 border border-white/10 p-3 rounded-[3rem] shadow-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20">
              <div className="relative w-full h-[250px] lg:h-[300px] rounded-[2.5rem] overflow-hidden bg-slate-800">
                <img 
                  src="/images/local-fachada.webp" 
                  alt="Fachada de Lavandería SúperClean en Tepic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6 bg-[#0B1B3D]/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse"></span>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Abierto Hoy</span>
                </div>
              </div>
            </div>

            {/* Mapa de Google corregido */}
            <div className="w-full h-[250px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7423.932168316989!2d-104.8927349576138!3d21.50904837105271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273703173d3d0f%3A0xf75263b28be40c11!2sLavander%C3%ADa%20y%20Planchadur%C3%ADa%20S%C3%BAperclean!5e0!3m2!1ses-419!2smx!4v1774643937436!5m2!1ses-419!2smx5" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>

          </div>
          
        </div>
      </div>
    </Section>
  );
};