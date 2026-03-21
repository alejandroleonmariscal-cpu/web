import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'info';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  const styles = {
    default: "bg-[#F8FAFC] text-[#6B7280] border-gray-200",
    success: "bg-[#DCFCE7] text-[#166534] border-[#22C55E]/20",
    info: "bg-[#DBEAFE] text-[#1E3A8A] border-[#2563EB]/10",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};