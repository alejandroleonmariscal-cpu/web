import React from 'react';

interface ReviewCardProps {
  readonly author: string;
  readonly quote: string;
  readonly source?: string;
}

export const ReviewCard = ({ author, quote, source }: ReviewCardProps) => {
  return (
    <div className="flex flex-col h-full p-10 bg-white/10 backdrop-blur-[40px] border border-white/20 rounded-[2.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:bg-white/15 transition-all duration-700 relative overflow-hidden group">
      
      {/* --- DETALLES DE "ESPUMA" DECORATIVOS --- */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-700" />
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl" />

      {/* --- ESTRELLAS DORADAS CON GLOW --- */}
      <div className="flex space-x-1.5 mb-8 relative z-10">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-6 h-6 text-[#FBBF24] drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] transform group-hover:scale-110 transition-transform" 
            style={{ transitionDelay: `${i * 50}ms` }}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* --- CITA (TEXTO PRINCIPAL) --- */}
      <blockquote className="flex-grow mb-10 relative z-10">
        <p className="text-white text-xl md:text-2xl leading-relaxed font-light italic drop-shadow-sm">
          "{quote}"
        </p>
      </blockquote>
      
      {/* --- PIE DE TARJETA (AUTOR) --- */}
      <div className="mt-auto relative z-10 flex items-center justify-between border-t border-white/10 pt-8">
        <div className="flex items-center space-x-4">
          {/* Avatar estilo burbuja de jabón */}
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 text-xl shadow-inner backdrop-blur-md">
            👤
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-lg tracking-tight">{author}</span>
            {source && (
              <span className="text-[10px] font-bold text-blue-200/50 uppercase tracking-[0.2em] mt-0.5">
                {source}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};