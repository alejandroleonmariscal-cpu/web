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
    // SECCIÓN OSCURA: Azul Marino de la marca
    <Section id="faq" className="relative py-24 lg:py-44 w-full max-w-none overflow-hidden bg-[#0B1B3D]">
      
      {/* --- FOTO DE FONDO (Vapor visible sobre azul) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/faq-bg.webp" 
          alt="Vapor de limpieza profesional" 
          // El mix-blend-screen hace que el vapor resalte sobre el fondo oscuro
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110" 
        />
        
        {/* Degradados para fundir la foto con el Azul Marino */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D] via-transparent to-[#0B1B3D]" />

        {/* Destello naranja sutil en la esquina inferior */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#FF4A17]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <Badge variant="default" className="mb-8 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-md px-6 py-2 uppercase tracking-[0.2em] text-[10px] font-black">
              {eyebrow}
            </Badge>
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
              {title}
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100/60 font-light leading-relaxed">
              {subtitle}
            </p>

            {/* Decoración: Burbujas flotantes */}
            <div className="mt-16 hidden lg:flex items-center space-x-4 opacity-30">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xs animate-bounce" style={{ animationDuration: '4s' }} />
            </div>
          </div>

          {/* LADO DERECHO: ACORDEONES (Efecto Cristal sobre Marino) */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
              
              {/* Brillo interno */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              {/* El componente FAQItem heredará el estilo claro para leerse sobre el cristal oscuro */}
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