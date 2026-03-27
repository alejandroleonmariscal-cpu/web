"use client";

import React from 'react';

export const Footer = () => {
  return (
    // FONDO: Azul Marino oficial (#0B1B3D)
    <footer className="relative bg-[#0B1B3D] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* --- EFECTOS DE FONDO --- */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4A17]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 items-center">
          
          {/* Bloque 1: Identidad (Logo Gigante y Sin Texto) */}
          <div className="md:col-span-5 space-y-8 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                // Logo extra grande como en el Header
                className="h-24 lg:h-32 w-auto object-contain transition-transform hover:scale-105"
              />
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
                <a href="#inicio" className="hover:text-[#FF4A17] transition-all duration-300">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#FF4A17] transition-all duration-300">Servicios</a>
              </li>
              <li>
                <a href="#precios" className="hover:text-[#FF4A17] transition-all duration-300">Tarifas</a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#FF4A17] transition-all duration-300">Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Bloque 3: Botón de WhatsApp (High Impact) */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Atención al Cliente</h4>
            
            <a 
              href="https://wa.me/523117434207?text=Hola,%20me%20gustaría%20solicitar%20un%20servicio." 
              target="_blank" 
              rel="noopener noreferrer"
              // Botón estilo WhatsApp moderno
              className="group flex items-center gap-5 bg-[#25D366] hover:bg-[#1DA851] rounded-[2rem] p-5 shadow-[0_20px_40px_rgba(37,211,102,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-white/20 p-3 rounded-2xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="text-left leading-none">
                <p className="text-white text-2xl font-black tracking-tighter mb-1">WhatsApp</p>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Enviar Mensaje</p>
              </div>
            </a>

            <p className="mt-8 text-blue-100/30 text-sm flex items-center justify-center md:justify-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_10px_#25D366]" />
              Servicio a domicilio disponible
            </p>
          </div>
        </div>

        {/* --- BARRA FINAL (CRÉDITOS) --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-blue-100/10 text-[9px] font-bold tracking-[0.5em] uppercase">
             © {new Date().getFullYear()} TEPIC, NAYARIT.
          </div>
          
          {/* EL SELLO DE TU AGENCIA */}
          <a 
            href="https://somoslazaro.marketing" 
            target="_blank" 
            className="group flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-[#FF4A17]/40 hover:bg-white/10 transition-all duration-500 shadow-xl"
          >
            <p className="text-blue-100/40 text-xs font-medium transition-all group-hover:text-white">
              Hecho con amor por <span className="font-black text-white/70 group-hover:text-[#FF4A17] transition-colors">somoslazaro.marketing</span>
            </p>
            <span className="text-[#FF4A17] text-lg animate-pulse">⚡</span>
          </a>
        </div>
      </div>
    </footer>
  );
};