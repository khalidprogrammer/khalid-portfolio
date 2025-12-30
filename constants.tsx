
import React from 'react';
import { Github, Linkedin, Mail, FileText, Globe, Database, Cpu, Layers, BarChart3, Map } from 'lucide-react';
import { Project, Experience, Certification, SkillGroup } from './types';

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:khalid.usman@gmail.com' },
  { name: 'Resume', icon: <FileText size={20} />, url: '#' },
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C# / C++", level: 75 },
      { name: "JavaScript", level: 90 },
    ]
  },
  {
    category: "Frameworks & UI",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "Node.js / Express", level: 85 },
      { name: "React / Vue / Quasar", level: 90 },
      { name: "Django", level: 80 },
      { name: "Tailwind / Figma", level: 90 },
    ]
  },
  {
    category: "Data & DevOps",
    skills: [
      { name: "PostgreSQL / SQL Server", level: 95 },
      { name: "GeoServer / Web Mapping", level: 85 },
      { name: "Git / CI/CD", level: 85 },
      { name: "Power BI / Tableau", level: 75 },
      { name: "Backup & Recovery", level: 90 },
    ]
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: '1',
    role: "Senior System Development Specialist",
    company: "Kabul Barya",
    period: "2021 - Present",
    achievements: [
      "Leading architecture for enterprise-grade MIS and HRMIS platforms.",
      "Spearheading digital transformation initiatives for high-profile clients.",
      "Mentoring junior developers and defining software development standards."
    ],
    technologies: ["Laravel", "React", "Docker", "AWS", "Microservices"],
    impact: "Established a scalable system architecture reducing deployment time by 50%."
  },
  {
    id: '2',
    role: "IM Officer / System Development",
    company: "WSTA (UN-OCHA / UNHCR)",
    period: "2018 - 2021",
    achievements: [
      "Developed complex humanitarian tracking and information management systems.",
      "Architected real-time data collection tools for field officers.",
      "Ensured GDPR-level data security for sensitive displaced persons records."
    ],
    technologies: ["PHP", "JavaScript", "Leaflet", "PostgreSQL", "ODK"],
    impact: "Streamlined aid distribution tracking for over 100,000 beneficiaries."
  },
  {
    id: '3',
    role: "Software Developer",
    company: "iMMAP / ANDMA",
    period: "2016 - 2018",
    achievements: [
      "Key contributor to the Afghanistan Spatial Data Center (ASDC).",
      "Developed web mapping interfaces for disaster risk assessment.",
      "Automated spatial data processing pipelines using Python."
    ],
    technologies: ["Python", "GeoServer", "OpenLayers", "PostGIS"],
    impact: "Centralized national spatial data, improving disaster response coordination."
  },
  {
    id: '4',
    role: "MIS Officer",
    company: "MRRD",
    period: "2014 - 2016",
    achievements: [
      "Maintained and updated rural development monitoring systems.",
      "Generated analytical reports for government stakeholders and donors.",
      "Integrated provincial data into a central MIS repository."
    ],
    technologies: ["C#", "SQL Server", "ASP.NET", "SSRS"],
    impact: "Enhanced transparency in rural development funding across 34 provinces."
  },
  {
    id: '5',
    role: "Software Developer",
    company: "Quantum Analytics",
    period: "2013 - 2014",
    achievements: [
      "Developed custom business logic for inventory management modules.",
      "Collaborated on ERP system integration for local enterprises.",
      "Optimized front-end performance for data-heavy dashboard interfaces."
    ],
    technologies: ["Java", "Spring", "MySQL", "jQuery"],
    impact: "Reduced inventory discrepancy by 30% through automated auditing modules."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "HRMIS for NGO (UN-Supported)",
    description: "A secure, enterprise-grade HR portal for a major NGO, handling payroll, staff records, and compliance for thousands of employees.",
    techStack: ["Laravel", "React", "PostgreSQL", "Tailwind"],
    organization: "UN Partner Organization",
    category: "HRMIS",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'p2',
    title: "Afghanistan Spatial Data Center",
    description: "The primary national infrastructure for spatial data sharing, visualization, and strategic GIS analysis. Built for disaster risk reduction and environmental monitoring.",
    techStack: ["GeoServer", "GeoNode", "Python", "OpenLayers"],
    organization: "iMMAP / ANDMA",
    category: "GIS",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Layers", value: "233" },
      { label: "Interactive Maps", value: "16" },
      { label: "Static Maps", value: "1362" },
      { label: "Users", value: "3614" }
    ]
  },
  {
    id: 'p3',
    title: "Disaster Management System",
    description: "A real-time MIS for tracking disaster incidents, resource allocation, and recovery progress across Afghanistan.",
    techStack: ["Django", "Vue.js", "PostGIS", "D3.js"],
    organization: "ANDMA",
    category: "MIS",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'p4',
    title: "Certification Management System",
    description: "Automated platform for tracking professional certifications, renewals, and training compliance for technical staff.",
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    organization: "International Training Center",
    category: "MIS",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c1', title: "GIS Training & ASDC Specialist", issuer: "iMMAP / ANDMA", date: "2017", icon: "Map" },
  { id: 'c2', title: "Big Data Analytics", issuer: "UNDP", date: "2020", icon: "BarChart3" },
  { id: 'c3', title: "Android Development Training", issuer: "Ministry Certification", date: "2015", icon: "Cpu" },
  { id: 'c4', title: "Enterprise Database Security", issuer: "Quantum Certification", date: "2014", icon: "Database" },
];
