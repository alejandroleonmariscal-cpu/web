"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group rounded-xl p-3 -mx-3 hover:bg-white/5 transition-colors duration-300"
      >
        <span className="text-lg md:text-xl font-bold text-white drop-shadow-sm group-hover:text-[#93C5FD] transition-colors pr-4">
          {question}
        </span>
        
        {/* Icono de flecha en una burbuja de cristal */}
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 flex-shrink-0 shadow-inner group-hover:bg-[#2563EB]/40 transition-colors duration-300">
          <svg
            className={`w-5 h-5 text-white transform transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#93C5FD]' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      {/* Contenedor de la respuesta con animación suave */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out px-1 ${
          isOpen ? 'max-h-96 opacity-100 mt-4 mb-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-blue-50/70 font-light text-lg leading-relaxed pb-4">
          {answer}
        </p>
      </div>
    </div>
  );
};