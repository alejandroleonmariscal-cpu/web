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
    <Section id="resenas" className="relative py-24 lg:py-44 w-full max-w-none overflow-hidden bg-[#0F172A]">
      
      {/* --- FOTO DE FONDO DINÁMICA --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/reviews-bg.webp" 
          alt="Textura de ropa limpia" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110" 
        />
        
        {/* Capas de profundidad: desvanece la foto para que las reseñas floten */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]" />
        
        {/* "Espuma" blanca para dar luz a las tarjetas */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[130px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="default" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.2em] text-[10px] font-black">
            {eyebrow}
          </Badge>
          
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 drop-shadow-2xl tracking-tight leading-none">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100/60 font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* GRID DE RESEÑAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group h-full transform transition-all duration-700 hover:-translate-y-4 hover:rotate-1"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};