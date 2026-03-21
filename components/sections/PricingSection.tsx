"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Definimos qué puede recibir el componente para que TypeScript esté feliz
interface PricingItem {
  readonly label: string;
  readonly price: string;
  readonly note?: string;
}

interface PricingSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly pricingItems: readonly PricingItem[];
  readonly supportNote?: string;
  readonly primaryCta?: { readonly label: string; readonly href: string };
}

export const PricingSection = ({
  eyebrow, title, subtitle, pricingItems, supportNote, primaryCta
}: PricingSectionProps) => {
  return (
    <Section id="precios" className="relative py-24 lg:py-40 w-full max-w-none overflow-hidden bg-[#0F172A]">
      
      {/* --- FONDO CON TEXTURA (Sombras y Luces) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {eyebrow && (
              <Badge variant="default" className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-md px-5 py-1.5 uppercase tracking-[0.2em] text-[10px] font-black">
                {eyebrow}
              </Badge>
            )}
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
              {title}
            </h2>
            
            <p className="text-xl text-blue-100/60 mb-12 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              {subtitle}
            </p>

            {supportNote && (
              <div className="hidden lg:flex items-center gap-3 bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 mb-10 text-left shadow-2xl">
                <span className="text-2xl">✨</span>
                <p className="text-white font-medium text-sm">{supportNote}</p>
              </div>
            )}
            
            <div className="hidden lg:block">
              {primaryCta && (
                <Button 
                  href={primaryCta.href} 
                  variant="primary" 
                  size="lg" 
                  external
                  className="bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-[0_20px_40px_rgba(34,197,94,0.3)] px-12 py-6 text-xl font-black rounded-2xl border-none transition-all hover:-translate-y-1"
                >
                  {primaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* LADO DERECHO: TARJETA DE PRECIOS */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[3.5rem] p-8 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <div className="space-y-10">
                {pricingItems.map((item, index) => (
                  <div key={index} className="group flex items-center justify-between gap-6 border-b border-white/5 pb-6 last:border-0 last:pb-0 transition-all hover:translate-x-2">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#22C55E] transition-colors">
                        {item.label}
                      </h3>
                      {item.note && (
                        <p className="text-blue-100/40 text-sm md:text-base font-light mt-1 uppercase tracking-wider">
                          {item.note}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 lg:hidden">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="primary" size="lg" className="w-full bg-[#22C55E] py-6 text-xl font-black rounded-2xl">
                    {primaryCta.label}
                  </Button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};