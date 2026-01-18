import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  value: string;
  image: string;
  category: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  website: string;
  goal: string;
}