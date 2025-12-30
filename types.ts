
export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Web' | 'Databases' | 'Tools' | 'Other';
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  ACHIEVEMENTS = 'achievements',
  CONTACT = 'contact',
  RESUME = 'resume'
}
