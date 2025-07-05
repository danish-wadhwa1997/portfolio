export interface Personal {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  avatar?: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
  testing: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  features: string[];
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  contact: Contact;
} 