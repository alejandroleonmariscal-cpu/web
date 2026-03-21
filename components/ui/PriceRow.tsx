import React from 'react';

interface PriceRowProps {
  label: string;
  price: string;
  note?: string;
}

export const PriceRow = ({ label, price, note }: PriceRowProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between items-baseline gap-4">
        {/* Etiqueta del servicio en Blanco puro */}
        <span className="text-lg md:text-xl font-bold text-white tracking-tight">
          {label}
        </span>
        
        {/* Línea punteada decorativa blanca tenue */}
        <div className="flex-grow border-b border-dotted border-white/20 mb-1" />
        
        {/* Precio en Blanco brillante con sombra */}
        <span className="text-xl md:text-2xl font-black text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
          {price}
        </span>
      </div>
      
      {/* Nota descriptiva en celeste muy claro */}
      {note && (
        <span className="text-sm md:text-base text-blue-200/60 font-medium italic">
          {note}
        </span>
      )}
    </div>
  );
};