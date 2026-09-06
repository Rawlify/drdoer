export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  subjects?: string[];
  turnaround?: string;
  partner?: string;
  partnerLogo?: string;
  pricing?: string;
  badge?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  iconName?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
