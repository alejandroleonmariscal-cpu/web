"use client"; // <--- ESTO ES VITAL

import React from 'react';

export const WashingMachineDrum = () => {
  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center p-4">
      
      {/* 1. Aro Exterior (Acero Inoxidable) */}
      <div className="absolute inset-0 rounded-full border-[12px] border-[#CBD5E1] shadow-[0_0_40px_rgba(37,99,235,0.1)] z-30" />
      <div className="absolute inset-2 rounded-full border-[4px] border-white/30 z-30" />

      {/* 2. Contenedor del Tambor */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1E3A8A] flex items-center justify-center">
        
        {/* Capa de Agua/Fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A] via-[#2563EB] to-[#1D4ED8]" />

        {/* 3. La Ropa (Blobs animados) */}
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite] opacity-70">
          <div className="absolute top-10 left-10 w-40 h-32 bg-[#DBEAFE] rounded-full blur-2xl rotate-45" />
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-white rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#2563EB] rounded-full blur-3xl" />
        </div>

        {/* 4. La Espuma (Burbujas) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/80 rounded-full blur-[1px] animate-bubble"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 80 + 10}%`,
                bottom: '-20px',
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3,
                // Definimos la animación directamente si no quieres tocar globals.css
                animationDuration: `${Math.random() * 2 + 3}s`
              }}
            />
          ))}
        </div>

        {/* 5. Cristal del frente */}
        <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/10 via-transparent to-white/20 backdrop-blur-[2px]">
          <div className="absolute top-[10%] left-[20%] w-[60%] h-[10%] bg-white/20 rounded-full rotate-[-15deg] blur-md" />
        </div>
      </div>

      <div className="absolute -bottom-10 w-3/4 h-10 bg-[#2563EB]/10 blur-3xl rounded-full -z-10" />

      {/* Estilos para la animación de burbujas */}
      <style jsx>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-300px) scale(1.2); opacity: 0; }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};