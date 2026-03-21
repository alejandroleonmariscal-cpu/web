import React from 'react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // El gran lienzo continuo: de celeste agua (superficie) a azul marino profundo
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0EA5E9] via-[#1E3A8A] to-[#0F172A] relative selection:bg-[#22C55E] selection:text-white">
      
      {/* Textura sutil general: Agregamos una cuadrícula/burbujas muy tenue para dar textura de agua */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '48px 48px' }} 
      />

      <div className="relative z-10 flex flex-col flex-grow">
        {/* El Header (Navegación transparente) irá aquí */}
        
        <main className="flex-grow">
          {children}
        </main>

        {/* El Footer irá aquí */}
      </div>
    </div>
  );
}