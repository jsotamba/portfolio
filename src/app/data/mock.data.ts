import { Translations, TechCategory, Experience, Project, SocialLink, CVLink } from '../models/portfolio.model';

export const translations: Translations = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Sono',
      tech: 'Tecnologie',
      experience: 'Esperienza',
      projects: 'Progetti',
      contact: 'Contatti'
    },
    hero: {
      greeting: 'Ciao, sono',
      name: 'Jean Pierre',
      role: 'Fullstack Developer',
      description: 'Trasformo idee in esperienze digitali straordinarie. Specializzato in Java, Python, Angular e tecnologie moderne per creare soluzioni scalabili e innovative.',
      cta: 'Scopri di più',
      downloadCV: 'Scarica CV'
    },
    about: {
      title: 'Chi Sono',
      subtitle: 'La mia storia',
      content: 'Sono un fullstack developer appassionato con una solida esperienza nella costruzione di applicazioni web moderne e scalabili. Il mio approccio combina creatività tecnica con best practices per creare soluzioni che fanno la differenza.',
      highlights: [
        { label: 'Anni Esperienza', value: '5+' },
        { label: 'Progetti Completati', value: '50+' },
        { label: 'Tecnologie', value: '15+' },
        { label: 'Clienti Soddisfatti', value: '30+' }
      ]
    },
    tech: {
      title: 'Stack Tecnologico',
      subtitle: 'Strumenti e tecnologie che utilizzo',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        database: 'Database',
        tools: 'Tools & DevOps'
      }
    },
    experience: {
      title: 'Esperienza Lavorativa',
      subtitle: 'Il mio percorso professionale',
      present: 'Presente'
    },
    projects: {
      title: 'Progetti in Evidenza',
      subtitle: 'Alcuni dei miei lavori più recenti',
      viewProject: 'Vedi Progetto',
      viewCode: 'Codice'
    },
    contact: {
      title: 'Mettiamoci in Contatto',
      subtitle: 'Hai un progetto in mente? Parliamone!',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        send: 'Invia Messaggio'
      },
      social: 'Seguimi su',
      cvSection: 'Scarica il mio CV'
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      by: 'da'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      tech: 'Technologies',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Jean Pierre',
      role: 'Fullstack Developer',
      description: 'I transform ideas into extraordinary digital experiences. Specialized in Java, Python, Angular and modern technologies to build scalable and innovative solutions.',
      cta: 'Learn More',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About Me',
      subtitle: 'My story',
      content: 'I\'m a passionate fullstack developer with solid experience in building modern and scalable web applications. My approach combines technical creativity with best practices to create solutions that make a difference.',
      highlights: [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Technologies', value: '15+' },
        { label: 'Happy Clients', value: '30+' }
      ]
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Tools and technologies I use',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        database: 'Database',
        tools: 'Tools & DevOps'
      }
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional journey',
      present: 'Present'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of my recent work',
      viewProject: 'View Project',
      viewCode: 'Code'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind? Let\'s talk!',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      social: 'Follow me on',
      cvSection: 'Download my CV'
    },
    footer: {
      rights: 'All rights reserved',
      by: 'by'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      tech: 'Tecnologías',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Jean Pierre',
      role: 'Desarrollador Fullstack',
      description: 'Transformo ideas en experiencias digitales extraordinarias. Especializado en Java, Python, Angular y tecnologías modernas para crear soluciones escalables e innovadoras.',
      cta: 'Saber Más',
      downloadCV: 'Descargar CV'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Mi historia',
      content: 'Soy un desarrollador fullstack apasionado con experiencia sólida en la construcción de aplicaciones web modernas y escalables. Mi enfoque combina creatividad técnica con mejores prácticas para crear soluciones que marcan la diferencia.',
      highlights: [
        { label: 'Años Experiencia', value: '5+' },
        { label: 'Proyectos Completados', value: '50+' },
        { label: 'Tecnologías', value: '15+' },
        { label: 'Clientes Satisfechos', value: '30+' }
      ]
    },
    tech: {
      title: 'Stack Tecnológico',
      subtitle: 'Herramientas y tecnologías que uso',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        database: 'Base de Datos',
        tools: 'Herramientas y DevOps'
      }
    },
    experience: {
      title: 'Experiencia Laboral',
      subtitle: 'Mi trayectoria profesional',
      present: 'Presente'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Algunos de mis trabajos recientes',
      viewProject: 'Ver Proyecto',
      viewCode: 'Código'
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      },
      social: 'Sígueme en',
      cvSection: 'Descargar mi CV'
    },
    footer: {
      rights: 'Todos los derechos reservados',
      by: 'por'
    }
  }
};

export const techStack: TechCategory[] = [
  {
    category: 'backend',
    items: [
      { name: 'Java', icon: 'Coffee', color: '#f89820' },
      { name: 'Spring', icon: 'Leaf', color: '#6db33f' },
      { name: 'Python', icon: 'Code2', color: '#3776ab' },
      { name: 'Flask', icon: 'Flask', color: '#000000' },
      { name: 'Django', icon: 'Server', color: '#092e20' }
    ]
  },
  {
    category: 'frontend',
    items: [
      { name: 'Angular', icon: 'Triangle', color: '#dd0031' },
      { name: 'TypeScript', icon: 'FileCode', color: '#3178c6' },
      { name: 'HTML5', icon: 'Code', color: '#e34f26' },
      { name: 'CSS3', icon: 'Palette', color: '#1572b6' },
      { name: 'React', icon: 'Atom', color: '#61dafb' }
    ]
  },
  {
    category: 'database',
    items: [
      { name: 'MongoDB', icon: 'Database', color: '#47a248' },
      { name: 'PostgreSQL', icon: 'Database', color: '#336791' },
      { name: 'MySQL', icon: 'Database', color: '#4479a1' },
      { name: 'Redis', icon: 'Zap', color: '#dc382d' }
    ]
  },
  {
    category: 'tools',
    items: [
      { name: 'Git', icon: 'GitBranch', color: '#f05032' },
      { name: 'Docker', icon: 'Package', color: '#2496ed' },
      { name: 'AWS', icon: 'Cloud', color: '#ff9900' },
      { name: 'Jenkins', icon: 'Workflow', color: '#d24939' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Fullstack Developer',
    company: 'TechCorp Solutions',
    location: 'Milano, Italia',
    period: { start: '2022-01', end: null },
    description: {
      it: 'Sviluppo e manutenzione di applicazioni enterprise con Java Spring Boot e Angular. Guida tecnica del team e implementazione di best practices.',
      en: 'Development and maintenance of enterprise applications with Java Spring Boot and Angular. Technical team leadership and implementation of best practices.',
      es: 'Desarrollo y mantenimiento de aplicaciones empresariales con Java Spring Boot y Angular. Liderazgo técnico del equipo e implementación de mejores prácticas.'
    },
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker']
  },
  {
    id: 2,
    title: 'Fullstack Developer',
    company: 'Digital Innovation Hub',
    location: 'Roma, Italia',
    period: { start: '2020-03', end: '2021-12' },
    description: {
      it: 'Creazione di microservizi REST con Python Flask e Django. Sviluppo di interfacce utente responsive con Angular e TypeScript.',
      en: 'Creation of REST microservices with Python Flask and Django. Development of responsive user interfaces with Angular and TypeScript.',
      es: 'Creación de microservicios REST con Python Flask y Django. Desarrollo de interfaces de usuario responsivas con Angular y TypeScript.'
    },
    technologies: ['Python', 'Flask', 'Django', 'Angular', 'MongoDB']
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartUp Tech',
    location: 'Torino, Italia',
    period: { start: '2019-01', end: '2020-02' },
    description: {
      it: 'Sviluppo di applicazioni web full-stack. Collaborazione con team agile per la creazione di soluzioni innovative.',
      en: 'Full-stack web application development. Collaboration with agile teams to create innovative solutions.',
      es: 'Desarrollo de aplicaciones web full-stack. Colaboración con equipos ágiles para crear soluciones innovadoras.'
    },
    technologies: ['Java', 'Spring', 'HTML', 'CSS', 'JavaScript']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: {
      it: 'Piattaforma e-commerce completa con gestione prodotti, carrello e pagamenti integrati. Architettura microservizi con Java Spring.',
      en: 'Complete e-commerce platform with product management, cart and integrated payments. Microservices architecture with Java Spring.',
      es: 'Plataforma de comercio electrónico completa con gestión de productos, carrito y pagos integrados. Arquitectura de microservicios con Java Spring.'
    },
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: {
      it: 'Sistema di gestione task e progetti con dashboard real-time. Backend Python Flask con WebSocket per aggiornamenti live.',
      en: 'Task and project management system with real-time dashboard. Python Flask backend with WebSocket for live updates.',
      es: 'Sistema de gestión de tareas y proyectos con panel en tiempo real. Backend Python Flask con WebSocket para actualizaciones en vivo.'
    },
    technologies: ['Python', 'Flask', 'Angular', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Social Network Dashboard',
    description: {
      it: 'Dashboard analitica per social media con grafici interattivi e reportistica avanzata. Django REST Framework con frontend Angular.',
      en: 'Analytics dashboard for social media with interactive charts and advanced reporting. Django REST Framework with Angular frontend.',
      es: 'Panel analítico para redes sociales con gráficos interactivos e informes avanzados. Django REST Framework con frontend Angular.'
    },
    technologies: ['Django', 'Python', 'TypeScript', 'Angular', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'API Gateway Service',
    description: {
      it: 'Gateway API RESTful con autenticazione JWT e rate limiting. Architettura scalabile con Spring Cloud.',
      en: 'RESTful API Gateway with JWT authentication and rate limiting. Scalable architecture with Spring Cloud.',
      es: 'Gateway API RESTful con autenticación JWT y limitación de velocidad. Arquitectura escalable con Spring Cloud.'
    },
    technologies: ['Java', 'Spring Cloud', 'Redis', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    github: '#',
    demo: '#'
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jean-pierre-sotamba-34b58120a', icon: 'Linkedin' },
];

export const cvLinks: CVLink[] = [
  { lang: 'it', label: 'Italiano', url: '/assets/cv/cv-italiano.pdf' },
  { lang: 'en', label: 'English', url: '/assets/cv/cv-english.pdf' },
  { lang: 'es', label: 'Español', url: '/assets/cv/cv-espanol.pdf' }
];