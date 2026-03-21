
export interface Highlight {
  icon?: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  badge?: string;
}

export interface PricingItem {
  label: string;
  price: string;
  note?: string;
}

export interface ProcessStepItem {
  title: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  quote: string;
  source?: string;
}