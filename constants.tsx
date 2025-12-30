
import React from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Youtube,
  Cpu,
  Trophy,
  BrainCircuit
} from 'lucide-react';
import { Skill, Project, Achievement } from './types';

export const PERSONAL_DETAILS = {
  name: "Mudili Bhavani Prasad",
  role: "Computer Science Engineer",
  university: "Vignan University, Andhra Pradesh",
  location: "Andhra Pradesh, India",
  email: "bmudili918@gmail.com",
  phone: "+91 9391844926",
  objective: "To become a skilled and disciplined software engineer capable of solving real-world problems through technology and innovation. I aim to continuously improve my technical expertise, communication skills, and leadership abilities while contributing to impactful projects.",
  socials: {
    linkedin: "https://www.linkedin.com/in/mudili-bhavani-prasad-873460276/",
    leetcode: "https://leetcode.com/u/71AbItAHho/",
    hackerrank: "https://www.hackerrank.com/profile/bmudili918",
    github: "https://github.com/",
    youtube: "https://www.youtube.com/@MBPKnowledgeHub"
  }
};

export const SKILLS: Skill[] = [
  { name: 'C / C++', level: 90, category: 'Programming' },
  { name: 'Java', level: 85, category: 'Programming' },
  { name: 'Python', level: 88, category: 'Programming' },
  { name: 'Django', level: 92, category: 'Web' },
  { name: 'HTML/CSS/JS', level: 85, category: 'Web' },
  { name: 'MERN Stack', level: 60, category: 'Web' },
  { name: 'PostgreSQL', level: 80, category: 'Databases' },
  { name: 'SQL', level: 85, category: 'Databases' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'AWS (Basic)', level: 65, category: 'Tools' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'DSA', level: 88, category: 'Other' },
  { name: 'Presentation', level: 90, category: 'Other' }
];

export const PROJECTS: Project[] = [
  {
    title: "Trendr – Social Media Web App",
    description: "Full-scale Instagram clone with advanced backend scaling features.",
    techStack: ["Django", "PostgreSQL", "Redis", "Celery", "Docker", "AWS S3"],
    features: [
      "User authentication & complex profiles",
      "Real-time messaging & stories",
      "Scalable task management with Redis/Celery",
      "Containerized deployment with Gunicorn & Nginx"
    ],
    image: "https://picsum.photos/seed/trendr/800/600"
  },
  {
    title: "MyTodo with Weather",
    description: "A productivity app combining task management with real-time environmental context.",
    techStack: ["Django", "JavaScript", "SQL", "OpenWeather API"],
    features: [
      "Dynamic CRUD operations",
      "Real-time weather integration",
      "Sleek, responsive UI"
    ],
    image: "https://picsum.photos/seed/todo/800/600"
  },
  {
    title: "Student Records Management",
    description: "A secure and efficient system for educational institutions to handle data.",
    techStack: ["Python", "Django", "SQL"],
    features: [
      "Secure database handling",
      "Admin dashboard with analytics",
      "Intuitive student management interface"
    ],
    image: "https://picsum.photos/seed/records/800/600"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "GATE 2025 Aspirant",
    description: "Intensive preparation in TOC, DBMS, OS, CN, and Data Structures."
  },
  {
    title: "Content Creator @ MBP Knowledge Hub",
    description: "Educating peers through quality video content on YouTube."
  },
  {
    title: "Seminar Speaker",
    description: "Conducted seminars on Associative Memory and Creative Thinking."
  },
  {
    title: "Entrepreneurship",
    description: "Building MBP Life Lab, a content services startup for academic success."
  }
];
