"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll al abrir menú para evitar que se mueva el fondo
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Precios', href: '#precios' },
    { name: 'Domicilio', href: '#domicilio' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[70] transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-[#0F172A]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO DINÁMICO */}
          <a href="#inicio" className="flex items-center gap-3 group relative z-[80]">
            <img 
              src="/images/logo.png" 
              alt="Logo Súper-Clean" 
              className={`transition-all duration-500 object-contain ${
                isScrolled ? 'h-10 lg:h-11' : 'h-12 lg:h-14'
              } group-hover:scale-110 group-active:scale-95`}
            />
            <div className="flex flex-col leading-none hidden sm:flex">
              <span className="text-white font-black text-xl tracking-tighter uppercase italic">SúperClean</span>
              <span className="text-[#22C55E] text-[8px] font-bold tracking-[0.3em] uppercase">Tepic</span>
            </div>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-bold text-white/50 hover:text-[#22C55E] hover:tracking-[0.2em] transition-all duration-300 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ACCIONES + TOGGLE MÓVIL */}
          <div className="flex items-center gap-4 relative z-[80]">
            <Button 
              href="https://wa.me/tu-numero" 
              variant="primary" 
              size="sm"
              external
              className="hidden sm:flex bg-[#22C55E] hover:bg-[#16a34a] border-none font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Pedir Servicio
            </Button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-2xl border transition-all duration-300 ${
                isMenuOpen 
                ? 'bg-white/10 border-white/20 rotate-90' 
                : 'bg-white/5 border-white/10'
              } backdrop-blur-md text-white`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL - EXPERIENCIA DE INMERSIÓN */}
      <div 
        className={`fixed inset-0 z-[65] md:hidden transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Fondo con Glassmorphism extremo */}
        <div className="absolute inset-0 bg-[#020617]/98 backdrop-blur-[40px]" />
        
        {/* Luces de fondo decorativas (Efecto Agua/Espuma) */}
        <div className="absolute top-[10%] right-[-20%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-20%] w-80 h-80 bg-[#22C55E]/10 rounded-full blur-[100px]" />

        <div className="relative h-full flex flex-col justify-center items-center px-8">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-black text-white uppercase tracking-tighter transition-all duration-500 delay-[${index * 100}ms] ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:text-[#22C55E] active:scale-95`}
                style={{ transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Sello de Agencia en el menú móvil */}
          <div className={`absolute bottom-16 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-12 h-[1px] bg-white/10" />
            <p className="text-white/20 text-[9px] font-bold tracking-[0.5em] uppercase">Estrategia Digital por</p>
            <a 
              href="https://somoslazaro.marketing" 
              className="flex items-center gap-2 group"
            >
              <span className="text-white/40 text-xs font-light group-hover:text-white transition-colors">Hecho con amor por</span>
              <span className="text-white/60 font-black text-xs group-hover:text-[#22C55E] transition-colors">
                somoslazaro.marketing
              </span>
              <span className="text-[#22C55E] animate-bounce">❤️</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};