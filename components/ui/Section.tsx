import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section = ({ 
  children, 
  id, 
  className = '', 
  containerClassName = '' 
}: SectionProps) => {
  return (
    <section id={id} className={`py-12 md:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};