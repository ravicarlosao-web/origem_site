export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  client?: string;
  url: string;
  displayUrl?: string;
  year: string;
  timeline: string;
  status: string;
  image: string;
  alt: string;
  tags: string[];
  logoSvg?: string;
  logoImg?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  code?: string;
  number: string;
  timeline: string;
  title: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  bgImage?: string;
}

export interface AddonService {
  code: string;
  name: string;
  price: string;
  status?: string;
  description?: string;
}

export interface ArticleItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  company: string;
  companyLogo: string;
  date: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface ClientLogo {
  name: string;
  svg: string;
  width?: number;
  height?: number;
}
