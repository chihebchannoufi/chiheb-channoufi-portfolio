// Shared type definitions for portfolio content.
// Keeping these centralized means data files (JSON or TS) and the
// components that render them always agree on shape.

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  metrics?: { label: string; value: string }[];
  pipeline?: string[]; // ordered stages, e.g. "React UI" -> "Laravel API" -> "Flask ML"
  links?: { label: string; url: string }[];
  featured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string; // e.g. "02/2026"
  status: "completed" | "in-progress";
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  mode: string; // Remote / Hybrid / On-site
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: "in-progress" | "completed";
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  items: string[];
}
