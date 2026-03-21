"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { ProcessStep } from '@/components/ui/ProcessStep';

interface Step {
  readonly title: string;
  readonly description?: string;
}

interface ProcessSectionProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly steps: readonly Step[];
}

export const ProcessSection = ({
  eyebrow = "Proceso",
  title,
  subtitle,
  steps
}: ProcessSectionProps) => {
  return (
    <Section id="proceso" className="relative py-24 lg:py-40 w-full max-w-none overflow-hidden bg-[#0F172A]">
      
      {/* --- EL CAMINITO DE ESPUMA (FONDO) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] right-[15%] w-80 h-80 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-white/5 rounded-full blur-[110px]" />
        
        {/* SVG del Caminito - Usamos inline style para la animación para evitar errores de Hydration */}
        <svg 
          className="hidden lg:block absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20" 
          viewBox="0 0 1200 600" 
          fill="none"
        >
          <path 
            d="M 200 100 Q 600 50 1000 300 T 200 500" 
            stroke="white" 
            strokeWidth="4" 
            strokeDasharray="12 12" 
            style={{
              animation: 'dash 60s linear infinite'
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="default" className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-1">
            {eyebrow}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 font-light">
            {subtitle}
          </p>
        </div>

        <div className="relative flex flex-col space-y-24 lg:space-y-0 lg:block min-h-[600px]">
          {steps.map((item, index) => {
            const positions = [
              "lg:top-0 lg:left-0",
              "lg:top-1/4 lg:right-0 lg:text-right",
              "lg:bottom-0 lg:left-1/4",
            ];

            return (
              <div 
                key={index} 
                className={`relative z-10 lg:absolute ${positions[index]} transition-all duration-700 hover:scale-105`}
              >
                <div className={`flex flex-col ${index === 1 ? 'lg:items-end' : 'lg:items-start'} items-center`}>
                  <ProcessStep 
                    step={index + 1}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};