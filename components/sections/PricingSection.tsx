"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PricingSectionProps } from '@/types/pricing'; 

export const PricingSection = ({
  eyebrow, title, subtitle, pricingItems, supportNote, primaryCta
}: PricingSectionProps) => {
  return (
    <Section id="precios" className="relative py-24 lg:py-40 w-full max-w-none overflow-hidden bg-white">
      
      {/* --- FONDO CLARO CON DESTELLOS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[30%] h-[30%] bg-[#FF4A17]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {eyebrow && (
              <Badge variant="default" className="mb-8 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-md px-5 py-1.5 uppercase tracking-[0.2em] text-[10px] font-black">
                {eyebrow}
              </Badge>
            )}
            
            <h2 className="text-5xl md:text-7xl font-black text-[#0B1B3D] mb-8 leading-[0.9] tracking-tighter">
              {title}
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              {subtitle}
            </p>

            {supportNote && (
              <div className="hidden lg:flex items-center gap-3 bg-blue-50 p-5 rounded-2xl border border-blue-100 mb-10 text-left shadow-sm">
                <span className="text-2xl">✨</span>
                <p className="text-[#0B1B3D] font-medium text-sm">{supportNote}</p>
              </div>
            )}
            
            <div className="hidden lg:block">
              {primaryCta && (
                <Button 
                  href={primaryCta.href} 
                  variant="primary" 
                  size="lg" 
                  external
                  className="bg-[#FF4A17] hover:bg-[#E03A0F] text-white shadow-[0_20px_40px_rgba(255,74,23,0.2)] px-12 py-6 text-xl font-black rounded-2xl border-none transition-all hover:-translate-y-1"
                >
                  {primaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* LADO DERECHO: TARJETA DE SERVICIOS */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-14 shadow-[0_40px_100px_rgba(11,27,61,0.08)] relative z-20">
              <div className="space-y-8">
                {pricingItems?.map((item, index) => (
                  <div key={index} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0 transition-all hover:translate-x-2">
                    
                    {/* TEXTO DEL SERVICIO */}
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0B1B3D] group-hover:text-[#FF4A17] transition-colors">
                        {item.label}
                      </h3>
                      {item.note && (
                        <p className="text-slate-500 text-sm md:text-base font-light mt-1 uppercase tracking-wider">
                          {item.note}
                        </p>
                      )}
                    </div>
                    
                    {/* BOTÓN WHATSAPP DINÁMICO */}
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        {/* Ícono de WhatsApp */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        {item.ctaLabel}
                      </a>
                    </div>

                  </div>
                ))}
              </div>
              
              <div className="mt-12 lg:hidden text-left">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="primary" size="lg" className="w-full bg-[#FF4A17] py-6 text-xl font-black rounded-2xl shadow-xl">
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