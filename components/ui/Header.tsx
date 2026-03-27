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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Función para subir al inicio suavemente
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false); // Cerramos menú por si acaso
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio', onClick: scrollToTop },
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
            ? 'py-2 bg-[#0B1B3D]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'py-6 bg-[#0B1B3D]/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO: Fix de link al Inicio */}
          <a 
            href="#inicio" 
            onClick={scrollToTop} // <--- ESTE ES EL FIX
            className="flex items-center group relative z-[80]"
          >
            <img 
              src="/images/logo.png" 
              alt="Logo Súper-Clean" 
              className={`transition-all duration-500 object-contain w-auto ${
                isScrolled 
                  ? 'h-12 lg:h-16' 
                  : 'h-16 lg:h-32' 
              } group-hover:scale-105 group-active:scale-95`}
            />
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={link.onClick ? link.onClick : undefined}
                className="text-[11px] font-black text-white/70 hover:text-[#FF4A17] transition-all duration-300 uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ACCIONES */}
          <div className="flex items-center gap-4 relative z-[80]">
            <Button 
              href="https://wa.me/tu-numero" 
              variant="primary" 
              size="sm"
              external
              className="hidden sm:flex bg-[#25D366] hover:bg-[#1DA851] border-none font-black shadow-[0_10px_30px_rgba(37,211,102,0.3)] px-8 py-6 text-lg rounded-2xl"
            >
              WhatsApp
            </Button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-4 rounded-2xl border transition-all duration-300 ${
                isMenuOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'
              } text-white`}
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

      {/* MENÚ MÓVIL */}
      <div 
        className={`fixed inset-0 z-[65] md:hidden transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[#0B1B3D]/98 backdrop-blur-[40px]" />
        
        <div className="relative h-full flex flex-col justify-center items-center px-8">
          <img src="/images/logo.png" alt="Logo" className="h-32 mb-16 opacity-30" />

          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={link.onClick ? link.onClick : () => setIsMenuOpen(false)}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#FF4A17] transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};