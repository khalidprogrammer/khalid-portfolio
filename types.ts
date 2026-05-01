
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  organization: string;
  category: 'HRMIS' | 'MIS' | 'GIS' | 'ERP' | 'Web' | 'Portal';
  imageUrl: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
  impact: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}
