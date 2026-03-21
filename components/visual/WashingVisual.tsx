import React from 'react';

export const WashingVisual = () => {
  return (
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
      {/* Capas circulares que evocan un tambor de lavadora y burbujas */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DBEAFE] to-white opacity-60 animate-pulse" />
      
      <div className="absolute w-4/5 h-4/5 rounded-full border-2 border-[#2563EB]/10 flex items-center justify-center">
        <div className="w-3/4 h-3/4 rounded-full border border-[#2563EB]/20 bg-gradient-to-b from-white to-[#DBEAFE] shadow-inner" />
      </div>

      {/* Micro-detalle de burbujas CSS */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white/80 blur-sm" />
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-[#2563EB]/5 blur-md" />
      
      {/* Iconografía central minimalista (opcional) */}
      <div className="relative z-10 text-[#1E3A8A]/20">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-32 h-32">
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
         </svg>
      </div>
    </div>
  );
};