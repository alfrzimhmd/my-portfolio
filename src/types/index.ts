// src/types/index.ts

// ============================================
// THEME
// ============================================
export type ThemeMode = 'dark' | 'light';

// ============================================
// PERSONAL INFO (untuk CV & Navbar)
// ============================================
export interface PersonalInfo {
  name: string;
  role: string;
  subtitle?: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  website?: string;
  availability?: string;
  status?: string;        // Untuk Hero component
  description?: string;   // Untuk Hero component
  year?: string;          // Untuk Footer component
  photo?: string;         // Profile photo
}

// ============================================
// CV TYPES (dari project sebelah)
// ============================================
export interface CVEducation {
  institution: string;
  degree: string;
  period: string;
  coursework: string[];
}

export interface CVSkillCategory {
  category: string;
  skills: string[];
}

export interface CVProject {
  title: string;
  tech: string;
  role: string;
  description: string;
  highlights?: string[];
}

export interface CVExperience {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  summary: string;
  education: CVEducation[];
  skills: CVSkillCategory[];
  projects: CVProject[];
  experience: CVExperience[];
}

// ============================================
// PROJECT TYPES (dari project saat ini)
// ============================================
export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'App Development' | 'Web Development' | 'UI/UX Design' | 'Reverse Engineering';
  categorySlug: 'app' | 'web' | 'uiux' | 'research';
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  github?: string | null;  // Allow null
  demo?: string | null;    // Allow null
  features?: string[];
  images?: string[];
  orientation?: 'landscape' | 'portrait';
  videoUrl?: string | null;
  isInteractive?: boolean;
  caseStudy?: {
    overview: string;
    problem: string;
    approach: string;
    design: string;
    development: string;
    challenges: string[];
    result: string;
    technologies: { name: string; purpose: string }[];
    gallery: { title: string; caption: string; type: 'mobile' | 'desktop' | 'diagram' }[];
    links: { label: string; url: string; type: 'github' | 'demo' | 'docs' }[];
  };
}

// ============================================
// SKILL TYPES (dari project saat ini)
// ============================================
export interface SkillItem {
  name: string;
  category: string;
  level?: string;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  focusAreas: string[];
  visualType: 'smartphone' | 'browser' | 'design_board' | 'debug_panel';
}

// ============================================
// TIMELINE TYPES (dari project saat ini)
// ============================================
export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
}

// ============================================
// SOCIAL TYPES (dari project saat ini)
// ============================================
export interface SocialLink {
  platform: string;
  label: string;
  value: string;
  url: string;
}

// ============================================
// NAVBAR PROPS (tambahan untuk type checking)
// ============================================
export interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenCV?: () => void;
}

// ============================================
// COMMAND PALETTE TYPES
// ============================================
export interface CommandItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  action: () => void;
  shortcut?: string;
  category?: string;
}

// ============================================
// SYSTEM STATUS TYPES
// ============================================
export interface SystemStatus {
  uptime: string;
  status: 'online' | 'offline' | 'maintenance';
  version: string;
  lastDeploy: string;
  services: {
    name: string;
    status: 'operational' | 'degraded' | 'down';
    latency?: string;
  }[];
}