// src/data/socials.ts
import { PersonalInfo, SocialLink } from '../types';

// Personal Info lengkap dengan semua properti yang dibutuhkan
export const personalInfo: PersonalInfo = {
  name: "Muhammad Alfarizi",
  role: "Software Developer & Reverse Engineer",
  subtitle: "App Development · Web Development · UI/UX · Reverse Engineering",
  email: "mhmdalfrzi.03@gmail.com",
  location: "Batang, Jawa Tengah, Indonesia",
  github: "github.com/alfrzimhmd",
  linkedin: "linkedin.com/in/alfarizi-muhammad",
  availability: "Open for Collaboration",
  status: "Available for Projects",
  description: "I build applications and websites, design digital experiences, and explore how software works—from the interface to the underlying systems.",
  year: "2026",
};

// Social links dengan nama 'socials' untuk kompatibilitas
export const socials: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    value: "@alfrzimhmd",
    url: "https://github.com/alfrzimhmd",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    value: "Alfarizi Muhammad",
    url: "https://linkedin.com/in/alfarizi-muhammad",
  },
  {
    platform: "email",
    label: "Email",
    value: "mhmdalfrzi.03@gmail.com",
    url: "mailto:mhmdalfrzi.03@gmail.com",
  },
];

// Export untuk kompatibilitas dengan nama lama
export const socialLinks = socials;

// Default export untuk fleksibilitas
export default { personalInfo, socials, socialLinks };