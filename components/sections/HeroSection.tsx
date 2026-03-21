"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface Highlight {
  readonly text: string;
  readonly icon?: string;
}

interface HeroSectionProps {
  content: {
    readonly title: string;
    readonly subtitle: string;
    readonly primaryCta: { readonly label: string; readonly href: string };
    readonly secondaryCta: { readonly label: string; readonly href: string };
    readonly highlights: readonly Highlight[]; 
  };
}

export const HeroSection = ({ content }: HeroSectionProps) => {
  const { title, subtitle, primaryCta, secondaryCta, highlights } = content;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bubbles, setBubbles] = useState<{id: number, size: number, left: number, duration: number, delay: number}[]>([]);

  useEffect(() => {
    // 1. Lógica del Video: Cámara Lenta + Loop de 2 seg
    const video = videoRef.current;
    if (video) {
      // Ajustamos la velocidad (0.4 es un slow-motion elegante)
      video.playbackRate = 0.4; 

      const handleLoop = () => {
        // En cuanto toca el segundo 2, regresa al inicio
        if (video.currentTime >= 1.5) {
          video.currentTime = 0;
        }
      };

      video.addEventListener('timeupdate', handleLoop);
      return () => video.removeEventListener('timeupdate', handleLoop);
    }

    // 2. Generación de Burbujas (Solo cliente para evitar Hydration Error)
    const generatedBubbles = [...Array(10)].map((_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <Section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-12 p-0 m-0 w-full max-w-none">
      
      {/* --- FONDO CINEMÁTICO: VIDEO + FALLBACK --- */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-surface.webp" 
          className="object-cover w-full h-full opacity-60 scale-110"
        >
          {/* RUTA ACTUALIZADA: public/videos/lavadoravideo.mp4 */}
          <source src="/videos/lavadoravideo.mp4" type="video/mp4" />
          
          {/* Imagen de respaldo por si el video no carga */}
          <img 
            src="/images/hero-surface.webp" 
            alt="Lavandería Súperclean Tepic" 
            className="object-cover w-full h-full opacity-80 animate-slow-zoom"
          />
        </video>
        
        {/* Capas de Gradiente: El look "Deep Blue" de SúperClean */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#1E3A8A]/40 to-[#1E3A8A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/40 to-transparent" />
      </div>

      {/* --- BURBUJAS --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute bg-white/20 rounded-full blur-[2px] animate-float-up"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              bottom: '-50px',
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 text-center lg:text-left max-w-3xl">
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {highlights?.map((item, index) => (
                <Badge 
                  key={index} 
                  variant="default"
                  className={index === 1 
                    ? "bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/30 backdrop-blur-md" 
                    : "bg-white/10 text-white border border-white/20 backdrop-blur-md"}
                >
                  {item.text}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
              {title}
            </h1>
            
            <p className="text-xl md:text-3xl text-blue-50/90 max-w-2xl mx-auto lg:mx-0 leading-tight font-light drop-shadow-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <Button 
              href={primaryCta.href} 
              variant="primary" 
              size="lg" 
              external 
              className="bg-[#22C55E] hover:bg-[#16a34a] text-white border-none shadow-[0_0_40px_rgba(34,197,94,0.4)] px-10 py-5 text-xl font-bold"
            >
              {primaryCta.label}
            </Button>
            <Button 
              href={secondaryCta.href} 
              variant="outline" 
              size="lg" 
              className="text-white border-white/30 bg-white/5 backdrop-blur-md px-10 py-5 text-xl"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};