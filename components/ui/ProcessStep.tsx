import React from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description?: string;
}

export const ProcessStep = ({ step, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 relative group">
      
      {/* Círculo "Burbuja de Cristal" que se ilumina al pasar el mouse */}
      <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-2xl font-extrabold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:border-[#22C55E] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] group-hover:text-white transition-all duration-300 relative z-10">
        {step}
      </div>
      
      {/* Título en blanco brillante */}
      <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md transition-colors duration-300">
        {title}
      </h3>
      
      {/* Descripción en tono celeste claro para lectura cómoda */}
      {description && (
        <p className="text-blue-100/70 text-sm leading-relaxed max-w-[250px] font-light">
          {description}
        </p>
      )}
      
    </div>
  );
};