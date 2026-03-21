"use client";

import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* --- EFECTOS DE FONDO (BIOLUMINISCENCIA) --- */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Bloque 1: Identidad */}
          <div className="md:col-span-5 space-y-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img 
                src="/images/logo.png" 
                alt="Logo Súper-Clean" 
                className="h-16 w-auto object-contain"
              />
              <div className="text-left">
                <span className="text-white font-black text-2xl tracking-tighter uppercase italic leading-none block">
                  SúperClean
                </span>
                <span className="text-[#22C55E] text-[10px] font-bold tracking-[0.4em] uppercase">
                  Tepic, Nayarit
                </span>
              </div>
            </div>
            <p className="text-blue-100/40 text-lg font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              Cuidado textil de alta gama con tecnología industrial. Tu ropa, como nueva, siempre a tiempo.
            </p>
          </div>

          {/* Bloque 2: Navegación */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Explorar</h4>
            <ul className="space-y-4 text-blue-100/30 font-medium">
              <li>
                <a href="#servicios" className="hover:text-[#22C55E] transition-all duration-300">Servicios</a>
              </li>
              <li>
                <a href="#precios" className="hover:text-[#22C55E] transition-all duration-300">Tarifas</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#22C55E] transition-all duration-300">Nuestro Método</a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#22C55E] transition-all duration-300">Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Bloque 3: Contacto High-End (BOTÓN DE WHATSAPP REAL) */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Contacto Directo</h4>
            
            <a 
              href="https://wa.me/523117434207?text=Hola%20Súperclean,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios." 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 hover:border-[#22C55E]/50 hover:bg-[#22C55E]/10 rounded-[2rem] p-6 backdrop-blur-2xl w-full shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#22C55E] p-2.5 rounded-full text-white group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <p className="text-[#22C55E] text-2xl font-black italic tracking-tighter">
                    311 743 4207
                  </p>
                </div>
                <p className="text-white/40 group-hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">
                  Clic para agendar por WhatsApp
                </p>
              </div>
            </a>

            <p className="mt-6 text-blue-100/30 text-sm flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Servicio a domicilio disponible
            </p>
          </div>
        </div>

        {/* --- BARRA FINAL DE CRÉDITOS --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-blue-100/10 text-[9px] font-bold tracking-[0.5em] uppercase">
            SúperClean Lavanderías © {new Date().getFullYear()}
          </div>
          
          {/* EL SELLO DE LA AGENCIA */}
          <a 
            href="https://somoslazaro.marketing" 
            target="_blank" 
            className="group flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-[#22C55E]/40 hover:bg-white/10 transition-all duration-500 shadow-xl"
          >
            <p className="text-blue-100/40 text-xs font-medium transition-all group-hover:text-white">
              Hecho con amor por <span className="font-black text-white/70 group-hover:text-[#22C55E] transition-colors">somoslazaro.marketing</span>
            </p>
            <span className="text-[#22C55E] text-lg animate-pulse">❤️</span>
          </a>
        </div>
      </div>
    </footer>
  );
};