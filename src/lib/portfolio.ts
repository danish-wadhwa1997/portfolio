import portfolioData from '@/data/portfolio.json';
import { PortfolioData } from '@/types/portfolio';

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}

export function getPersonalInfo() {
  return getPortfolioData().personal;
}

export function getSkills() {
  return getPortfolioData().skills;
}

export function getExperience() {
  return getPortfolioData().experience;
}

export function getProjects() {
  return getPortfolioData().projects;
}

export function getEducation() {
  return getPortfolioData().education;
}

export function getCertifications() {
  return getPortfolioData().certifications;
}

export function getContact() {
  return getPortfolioData().contact;
} 