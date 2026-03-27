"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { ReviewCard } from '@/components/ui/ReviewCard';

interface Review {
  readonly author: string;
  readonly quote: string;
  readonly source?: string;
}

interface ReviewsSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly reviews: readonly Review[];
}

export const ReviewsSection = ({
  eyebrow = "Opiniones",
  title,
  subtitle,
  reviews
}: ReviewsSectionProps) => {
  return (
    // SECCIÓN CLARA: Fondo blanco que ocupa todo el ancho
    <Section id="resenas" className="relative py-24 lg:py-44 w-full max-w-none overflow-hidden bg-white">
      
      {/* --- FOTO DE FONDO (Rescatada y Visible) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/reviews-bg.webp" 
          alt="Textura de ropa limpia" 
          // Subimos opacidad y usamos multiply para que los detalles se marquen sobre el blanco
          className="w-full h-full object-cover opacity-30 mix-blend-multiply scale-110" 
        />
        
        {/* Degradados blancos para que la foto no ensucie los bordes de la sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        
        {/* Un toque de luz naranja muy sutil en el fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4A17]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="default" className="mb-6 bg-[#FF4A17]/10 text-[#FF4A17] border-[#FF4A17]/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.2em] text-[10px] font-black">
            {eyebrow}
          </Badge>
          
          {/* Título en Azul Marino para máximo contraste */}
          <h2 className="text-4xl md:text-7xl font-black text-[#0B1B3D] mb-8 tracking-tighter leading-[0.9]">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* GRID DE RESEÑAS (Aquí brillarán tus ReviewCard oscuras) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group h-full transform transition-all duration-700 hover:-translate-y-4"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};