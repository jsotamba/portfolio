export interface Translation {
  nav: {
    home: string;
    about: string;
    tech: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    cta: string;
    downloadCV: string;
  };
  about: {
    title: string;
    subtitle: string;
    content: string;
    highlights: Array<{ label: string; value: string }>;
  };
  tech: {
    title: string;
    subtitle: string;
    categories: {
      backend: string;
      frontend: string;
      database: string;
      tools: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    social: string;
    cvSection: string;
  };
  footer: {
    rights: string;
    by: string;
  };
}

export interface Translations {
  it: Translation;
  en: Translation;
  es: Translation;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: {
    start: string;
    end: string | null;
  };
  description: {
    it: string;
    en: string;
    es: string;
  };
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: {
    it: string;
    en: string;
    es: string;
  };
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CVLink {
  lang: string;
  label: string;
  url: string;
}