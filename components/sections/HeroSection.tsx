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
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.4; 
      const handleLoop = () => {
        if (video.currentTime >= 1.5) {
          video.currentTime = 0;
        }
      };
      video.addEventListener('timeupdate', handleLoop);
      return () => video.removeEventListener('timeupdate', handleLoop);
    }

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
    // Fondo base blanco
    <Section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-12 p-0 m-0 w-full max-w-none bg-white">
      
      {/* --- FONDO CINEMÁTICO LIGHT (AHORA SÍ SE VE EL VIDEO) --- */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none bg-white">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-surface.webp" 
          // Subimos la opacidad para que el video sea súper visible
          className="absolute inset-0 object-cover w-full h-full opacity-60 scale-110 mix-blend-multiply"
        >
          <source src="/videos/lavadoravideo.mp4" type="video/mp4" />
          <img 
            src="/images/hero-surface.webp" 
            alt="Lavandería Súperclean Tepic" 
            className="absolute inset-0 object-cover w-full h-full opacity-60 mix-blend-multiply animate-slow-zoom"
          />
        </video>
        
        {/* Neblina blanca SUAVE solo a la izquierda para poder leer el texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
      </div>

      {/* --- BURBUJAS --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute bg-[#0B1B3D]/10 rounded-full blur-[2px] animate-float-up"
            style={{
               width: `${b.size}px`, height: `${b.size}px`, left: `${b.left}%`, bottom: '-50px',
               animationDuration: `${b.duration}s`, animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12 text-center lg:text-left max-w-3xl">
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {highlights?.map((item, index) => (
                <Badge 
                  key={index} 
                  variant="default"
                  className={index === 1 
                    ? "bg-[#FF4A17]/10 text-[#FF4A17] border border-[#FF4A17]/20 backdrop-blur-md px-4 py-1.5" 
                    : "bg-blue-50/80 text-[#0B1B3D] border border-blue-100 backdrop-blur-md px-4 py-1.5 font-bold"}
                >
                  {item.text}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-[#0B1B3D] leading-[0.95] tracking-tighter drop-shadow-sm">
              {title}
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-700 max-w-3xl mx-auto lg:mx-0 leading-tight font-medium drop-shadow-sm">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <Button 
              href={primaryCta.href} 
              variant="primary" 
              size="lg" 
              external 
              className="bg-[#FF4A17] hover:bg-[#E03A0F] text-white border-none shadow-[0_15px_30px_rgba(255,74,23,0.3)] px-10 py-5 text-xl font-black rounded-2xl transition-all hover:-translate-y-1"
            >
              {primaryCta.label}
            </Button>
            <Button 
              href={secondaryCta.href} 
              variant="outline" 
              size="lg" 
              className="text-[#0B1B3D] border-[#0B1B3D]/20 bg-white/80 hover:bg-blue-50 px-10 py-5 text-xl font-bold rounded-2xl shadow-sm transition-all"
            >
              {secondaryCta.label}
            </Button>
          </div>
          
        </div>
      </div>
    </Section>
  );
};