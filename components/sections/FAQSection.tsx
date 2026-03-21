"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { FAQItem } from '@/components/ui/FAQItem';

interface FAQ {
  readonly question: string;
  readonly answer: string;
}

interface FAQSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly items: readonly FAQ[];
}

export const FAQSection = ({
  eyebrow = "Preguntas frecuentes",
  title,
  subtitle,
  items
}: FAQSectionProps) => {
  return (
    <Section id="faq" className="relative py-24 lg:py-44 w-full max-w-none overflow-hidden bg-[#0F172A]">
      
      {/* --- FOTO DE FONDO (TEXTURA DE VAPOR O BURBUJAS) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/faq-bg.webp" 
          alt="Vapor de limpieza profesional" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110" 
        />
        
        {/* Capas de degradado para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />

        {/* Nube de luz blanca (Espuma) detrás del texto */}
        <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LADO IZQUIERDO: TEXTO (Ahora sobre fondo con textura) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <Badge variant="default" className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-md px-6 py-2 uppercase tracking-[0.2em] text-[10px] font-black">
              {eyebrow}
            </Badge>
            
            <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-none tracking-tighter drop-shadow-2xl">
              {title}
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100/60 font-light leading-relaxed drop-shadow-md">
              {subtitle}
            </p>

            {/* Decoración sutil: Burbuja de cristal flotante */}
            <div className="mt-16 hidden lg:flex items-center space-x-4 opacity-40">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xs animate-bounce" style={{ animationDuration: '4s' }} />
            </div>
          </div>

          {/* LADO DERECHO: ACORDEONES (Panel de Cristal Reforzado) */}
          <div className="lg:col-span-7">
            <div className="bg-[#1E3A8A]/30 backdrop-blur-[50px] border border-white/20 rounded-[3rem] p-8 md:p-14 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
              
              {/* Reflejo de luz en la esquina del panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <div className="divide-y divide-white/10">
                {items.map((item, index) => (
                  <FAQItem 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
};