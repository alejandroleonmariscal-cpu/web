import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white border border-[#F8FAFC] shadow-sm rounded-2xl overflow-hidden transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
};