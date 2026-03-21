export type CTAVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

export interface CTA {
  label: string;
  href: string;
  variant?: CTAVariant;
  isExternal?: boolean;
}