import { type LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  // gradient: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export interface Technology {
  name: string;
  icon: string;
  description: string;
}