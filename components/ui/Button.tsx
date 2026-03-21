import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#1E3A8A] text-white hover:bg-[#2563EB] focus:ring-[#1E3A8A]",
    secondary: "bg-[#DBEAFE] text-[#1E3A8A] hover:bg-blue-200 focus:ring-[#DBEAFE]",
    outline: "border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#F8FAFC] focus:ring-[#1E3A8A]",
    ghost: "text-[#6B7280] hover:text-[#1E3A8A] hover:bg-[#F8FAFC] focus:ring-gray-200",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
};