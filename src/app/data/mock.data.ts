import {
  Translations,
  TechCategory,
  Experience,
  Project,
  SocialLink,
  CVLink,
} from '../models/portfolio.model';
// ─── Full profile data for Jean Pierre Sotamba Acosta ───────────────────────

export const translations: Translations = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Sono',
      tech: 'Tecnologie',
      experience: 'Esperienza',
      projects: 'Progetti',
      contact: 'Contatti',
    },
    hero: {
      greeting: 'Ciao, sono',
      name: 'Jean Pierre',
      role: 'Fullstack Developer',
      description:
        'Fullstack Developer con esperienza enterprise in ambito bancario, telecomunicazioni e pubblica amministrazione. Specializzato in Java, Spring, Angular, architetture a microservizi e cloud computing su Azure e AWS.',
      cta: 'Scopri il Profilo',
      downloadCV: 'Scarica CV',
    },
    about: {
      title: 'Chi Sono',
      subtitle: 'Enterprise Software Engineer',
      content:
        'Fullstack Developer con oltre 5 anni di esperienza professionale maturata in contesti enterprise ad alta complessità, con focus su settore bancario, telecomunicazioni e pubblica amministrazione. Specializzato nello sviluppo backend con Java e Spring, frontend Angular, migrazione di sistemi legacy, progettazione di architetture a microservizi e integrazione di servizi REST. Ho collaborato con grandi aziende come Sopra Steria, Capgemini e GFT Italia, partecipando a progetti mission-critical orientati a scalabilità, performance e mantenibilità del software.',
      highlights: [
        { label: 'Anni di Esperienza', value: '6', suffix: '+' },
        { label: 'Aziende Enterprise', value: '6', suffix: '' },
        { label: 'Tecnologie', value: '20', suffix: '+' },
        { label: 'Progetti Completati', value: '50', suffix: '+' },
      ],
    },
    tech: {
      title: 'Stack Tecnologico',
      subtitle: 'Strumenti e tecnologie che utilizzo quotidianamente',
      categories: {
        backend: 'Backend & Framework',
        frontend: 'Frontend',
        database: 'Database',
        tools: 'Tools & DevOps',
        cloud: 'Cloud & Infrastructure',
      },
    },
    experience: {
      title: 'Esperienza Lavorativa',
      subtitle: 'Il mio percorso professionale enterprise',
      present: 'Presente',
      keyActivities: 'Attività Principali',
    },
    projects: {
      title: 'Progetti in Evidenza',
      subtitle:
        'Soluzioni enterprise sviluppate nel mio percorso professionale',
      viewProject: 'Vedi Progetto',
      viewCode: 'Codice',
    },
    contact: {
      title: 'Mettiamoci in Contatto',
      subtitle:
        'Disponibile per opportunità enterprise, consulenze e collaborazioni tecniche.',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        send: 'Invia Messaggio',
      },
      social: 'Seguimi su',
      cvSection: 'Scarica il mio CV',
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      by: 'da',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      tech: 'Technologies',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Jean Pierre',
      role: 'Fullstack Developer',
      description:
        'Fullstack Developer with enterprise experience in banking, telecommunications and public administration. Specialized in Java, Spring, Angular, microservices architectures and cloud computing on Azure and AWS.',
      cta: 'Explore Profile',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      subtitle: 'Enterprise Software Engineer',
      content:
        'Fullstack Developer with over 5 years of professional experience in high-complexity enterprise environments, with a focus on banking, telecommunications and public administration sectors. Specialized in backend development with Java and Spring, Angular frontend, legacy system migration, microservices architecture design and REST service integration. I have collaborated with major companies such as Sopra Steria, Capgemini and GFT Italia, participating in mission-critical projects focused on scalability, performance and software maintainability.',
      highlights: [
        { label: 'Years of Experience', value: '6', suffix: '+' },
        { label: 'Enterprise Companies', value: '6', suffix: '' },
        { label: 'Technologies', value: '20', suffix: '+' },
        { label: 'Projects Completed', value: '50', suffix: '+' },
      ],
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Tools and technologies I use daily',
      categories: {
        backend: 'Backend & Frameworks',
        frontend: 'Frontend',
        database: 'Database',
        tools: 'Tools & DevOps',
        cloud: 'Cloud & Infrastructure',
      },
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional enterprise journey',
      present: 'Present',
      keyActivities: 'Key Activities',
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'Enterprise solutions developed throughout my professional journey',
      viewProject: 'View Project',
      viewCode: 'Code',
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        'Available for enterprise opportunities, consultancy and technical collaborations.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
      social: 'Follow me on',
      cvSection: 'Download my CV',
    },
    footer: {
      rights: 'All rights reserved',
      by: 'by',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      tech: 'Tecnologías',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Jean Pierre',
      role: 'Desarrollador Fullstack',
      description:
        'Desarrollador Fullstack con experiencia enterprise en banca, telecomunicaciones y administración pública. Especializado en Java, Spring, Angular, arquitecturas de microservicios y cloud computing en Azure y AWS.',
      cta: 'Explorar Perfil',
      downloadCV: 'Descargar CV',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Ingeniero de Software Enterprise',
      content:
        'Desarrollador Fullstack con más de 5 años de experiencia profesional en entornos enterprise de alta complejidad, con enfoque en los sectores bancario, telecomunicaciones y administración pública. Especializado en el desarrollo backend con Java y Spring, frontend Angular, migración de sistemas legacy, diseño de arquitecturas de microservicios e integración de servicios REST. He colaborado con grandes empresas como Sopra Steria, Capgemini y GFT Italia, participando en proyectos mission-critical orientados a escalabilidad, rendimiento y mantenibilidad del software.',
      highlights: [
        { label: 'Años de Experiencia', value: '6', suffix: '+' },
        { label: 'Empresas Enterprise', value: '6', suffix: '' },
        { label: 'Tecnologías', value: '20', suffix: '+' },
        { label: 'Proyectos Completados', value: '50', suffix: '+' },
      ],
    },
    tech: {
      title: 'Stack Tecnológico',
      subtitle: 'Herramientas y tecnologías que uso a diario',
      categories: {
        backend: 'Backend y Frameworks',
        frontend: 'Frontend',
        database: 'Base de Datos',
        tools: 'Herramientas y DevOps',
        cloud: 'Cloud e Infraestructura',
      },
    },
    experience: {
      title: 'Experiencia Laboral',
      subtitle: 'Mi trayectoria profesional enterprise',
      present: 'Presente',
      keyActivities: 'Actividades Principales',
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle:
        'Soluciones enterprise desarrolladas en mi trayectoria profesional',
      viewProject: 'Ver Proyecto',
      viewCode: 'Código',
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle:
        'Disponible para oportunidades enterprise, consultoría y colaboraciones técnicas.',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
      },
      social: 'Sígueme en',
      cvSection: 'Descargar mi CV',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      by: 'por',
    },
  },
};

export const techStack: TechCategory[] = [
  {
    category: 'backend',
    items: [
      { name: 'Java 21', icon: 'Coffee', color: '#f89820', level: 95 },
      { name: 'Spring Framework', icon: 'Leaf', color: '#6db33f', level: 90 },
      { name: 'Spring Security', icon: 'Shield', color: '#6db33f', level: 85 },
      {
        name: 'Hibernate / JPA',
        icon: 'Database',
        color: '#59666c',
        level: 80,
      },
      { name: 'Python', icon: 'Code', color: '#3776ab', level: 82 },
      { name: 'Flask', icon: 'Zap', color: '#e8e8e8', level: 75 },
      { name: 'Django REST', icon: 'Server', color: '#44b78b', level: 72 },
      { name: 'Struts 2', icon: 'Layers', color: '#007396', level: 80 },
    ],
  },
  {
    category: 'frontend',
    items: [
      { name: 'Angular', icon: 'Triangle', color: '#dd0031', level: 88 },
      { name: 'TypeScript', icon: 'FileCode', color: '#3178c6', level: 85 },
      { name: 'HTML5', icon: 'Code', color: '#e34f26', level: 90 },
      { name: 'CSS3 / SCSS', icon: 'Palette', color: '#1572b6', level: 88 },
    ],
  },
  {
    category: 'database',
    items: [
      { name: 'Oracle', icon: 'Database', color: '#f80000', level: 82 },
      { name: 'MySQL', icon: 'Database', color: '#4479a1', level: 85 },
      { name: 'PostgreSQL', icon: 'Database', color: '#336791', level: 80 },
    ],
  },
  {
    category: 'tools',
    items: [
      { name: 'Maven', icon: 'Package', color: '#c71a36', level: 88 },
      { name: 'Git', icon: 'GitBranch', color: '#f05032', level: 90 },
      { name: 'Apache Kafka', icon: 'Workflow', color: '#231f20', level: 78 },
      {
        name: 'Quartz Scheduler',
        icon: 'AlarmClock',
        color: '#3a75bd',
        level: 75,
      },
      { name: 'Pentaho', icon: 'ChartBar', color: '#cf5e21', level: 70 },
    ],
  },
  {
    category: 'cloud',
    items: [
      { name: 'Microsoft Azure', icon: 'Cloud', color: '#0078d4', level: 80 },
      { name: 'AWS Lambda', icon: 'Zap', color: '#ff9900', level: 78 },
      { name: 'AWS S3', icon: 'Archive', color: '#ff9900', level: 80 },
      { name: 'API Gateway', icon: 'Globe', color: '#ff9900', level: 75 },
      { name: 'CloudFormation', icon: 'Layers', color: '#ff9900', level: 72 },
      { name: 'ElasticSearch', icon: 'Search', color: '#005571', level: 70 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Fullstack Developer',
    company: 'Sopra Steria S.p.A.',
    location: 'Milano, Italia',
    sector: 'Banking / Pubblica Amministrazione',
    period: { start: '2024-02', end: null },
    accentColor: '#06b6d4',
    description: {
      it: 'Referente tecnico per la piattaforma proprietaria "Inventory Chain Platform", sistema per la gestione digitale del pegno non possessorio. Sviluppo e manutenzione di architetture a microservizi, monitoraggio infrastrutturale su Azure e attività di migrazione e modernizzazione applicativa.',
      en: 'Technical lead for the proprietary "Inventory Chain Platform", a system for digital non-possessory pledge management. Development and maintenance of microservices architectures, infrastructure monitoring on Azure and application migration and modernization activities.',
      es: 'Referente técnico para la plataforma propietaria "Inventory Chain Platform", sistema para la gestión digital del pignoramento no posesorio. Desarrollo y mantenimiento de arquitecturas de microservicios, monitorización de infraestructuras en Azure y actividades de migración y modernización de aplicaciones.',
    },
    technologies: [
      'Java 21',
      'Spring',
      'Maven',
      'Apache Kafka',
      'Azure',
      'Struts 2',
      'Microservices',
      'REST APIs',
    ],
    keyActivities: [
      'Technical lead – Inventory Chain Platform (digital pawn management)',
      'Microservices architecture development & maintenance',
      'Legacy migration: Struts 1 → Struts 2, Java 6 → Java 21 (Crédit Agricole)',
      'Build migration: Apache Ant → Maven multi-module',
      'Refactoring SIUL (Sistema Informativo Unitario Lavoro)',
      'Apache Kafka integration for async event-driven architecture',
      'Azure cloud infrastructure monitoring',
    ],
  },
  {
    id: 2,
    title: 'Fullstack Developer',
    company: 'Capgemini',
    location: 'Milano, Italia',
    sector: 'Telecomunicazioni',
    period: { start: '2023-02', end: '2024-02' },
    accentColor: '#3b82f6',
    description: {
      it: 'Sviluppo Change Request e Bug Fixing su progetti telecomunicazioni. Backend Java con Spring, frontend Angular e TypeScript. Implementazione servizi REST, schedulazione batch con Quartz e Pentaho, procedure database Oracle/MySQL.',
      en: 'Change Request development and Bug Fixing on telecommunications projects. Java backend with Spring, Angular and TypeScript frontend. REST services implementation, batch scheduling with Quartz and Pentaho, Oracle/MySQL database procedures.',
      es: 'Desarrollo de Change Requests y Bug Fixing en proyectos de telecomunicaciones. Backend Java con Spring, frontend Angular y TypeScript. Implementación de servicios REST, programación de lotes con Quartz y Pentaho, procedimientos de base de datos Oracle/MySQL.',
    },
    technologies: [
      'Java',
      'Spring',
      'Angular',
      'TypeScript',
      'Oracle',
      'MySQL',
      'Quartz',
      'Pentaho',
      'REST APIs',
    ],
    keyActivities: [
      'Change Request development and Bug Fixing – Telecom domain',
      'Java/Spring backend development',
      'Angular components with TypeScript',
      'REST service implementation',
      'Batch scheduling with Quartz and Pentaho',
      'Oracle and MySQL stored procedures / jobs',
      'Frontend-backend integration',
    ],
  },
  {
    id: 3,
    title: 'Fullstack Developer',
    company: 'GFT Italia',
    location: 'Milano, Italia',
    sector: 'Banking',
    period: { start: '2022-03', end: '2023-02' },
    accentColor: '#6366f1',
    description: {
      it: 'Migrazione software legacy verso stack tecnologici moderni in ambito bancario. Sviluppo componenti frontend e backend, realizzazione API REST e implementazione test unitari.',
      en: 'Legacy software migration to modern technology stacks in the banking sector. Frontend and backend component development, REST API implementation and unit test development.',
      es: 'Migración de software legacy hacia stacks tecnológicos modernos en el sector bancario. Desarrollo de componentes frontend y backend, implementación de APIs REST y desarrollo de pruebas unitarias.',
    },
    technologies: ['Java', 'Spring', 'Angular', 'REST APIs', 'Unit Testing'],
    keyActivities: [
      'Legacy software migration to modern tech stacks',
      'Frontend and backend component development',
      'REST API design and implementation',
      'Unit testing implementation',
    ],
  },
  {
    id: 4,
    title: 'Software Developer',
    company: 'F1 Consulting Services',
    location: 'Milano, Italia',
    sector: 'Consulting',
    period: { start: '2021-11', end: '2022-03' },
    accentColor: '#8b5cf6',
    description: {
      it: 'Sviluppo applicazioni Android native in Java con integrazione servizi HTTP. Sviluppo di progetti Python basati sulla piattaforma Odoo per la gestione aziendale.',
      en: 'Native Android application development in Java with HTTP service integration. Python project development based on the Odoo platform for business management.',
      es: 'Desarrollo de aplicaciones Android nativas en Java con integración de servicios HTTP. Desarrollo de proyectos Python basados en la plataforma Odoo para la gestión empresarial.',
    },
    technologies: ['Android Java', 'Python', 'Odoo', 'HTTP APIs'],
    keyActivities: [
      'Native Android app development (Java)',
      'HTTP service integration',
      'Python / Odoo business management projects',
    ],
  },
  {
    id: 5,
    title: 'Software Developer',
    company: 'Storm Reply (Consulenza)',
    location: 'Milano, Italia',
    sector: 'Cloud / AWS',
    period: { start: '2021-08', end: '2021-11' },
    accentColor: '#f59e0b',
    description: {
      it: 'Sviluppo e manutenzione di servizi Python in ambiente AWS serverless. Implementazione infrastrutture cloud con Lambda, API Gateway, S3, CloudFront, ElasticSearch e CloudFormation.',
      en: 'Development and maintenance of Python services in a serverless AWS environment. Cloud infrastructure implementation with Lambda, API Gateway, S3, CloudFront, ElasticSearch and CloudFormation.',
      es: 'Desarrollo y mantenimiento de servicios Python en entorno AWS serverless. Implementación de infraestructuras cloud con Lambda, API Gateway, S3, CloudFront, ElasticSearch y CloudFormation.',
    },
    technologies: [
      'Python',
      'AWS Lambda',
      'API Gateway',
      'S3',
      'CloudFront',
      'ElasticSearch',
      'CloudFormation',
      'YAML',
    ],
    keyActivities: [
      'Python service development in serverless AWS environment',
      'AWS Lambda function implementation',
      'API Gateway, S3, CloudFront, ElasticSearch configuration',
      'CloudFormation infrastructure as code',
      'Test and validation script development',
    ],
  },
  {
    id: 6,
    title: 'Junior Software Developer',
    company: 'Advanced Global Solutions S.p.A.',
    location: 'Milano, Italia',
    sector: 'Software Development',
    period: { start: '2021-01', end: '2021-08' },
    accentColor: '#10b981',
    description: {
      it: 'Sviluppo API backend con Flask e Django REST Framework. Gestione autenticazione, funzionalità documentali e ambienti virtuali Python.',
      en: 'Backend API development with Flask and Django REST Framework. Authentication management, document functionality and Python virtual environments.',
      es: 'Desarrollo de APIs backend con Flask y Django REST Framework. Gestión de autenticación, funcionalidades documentales y entornos virtuales Python.',
    },
    technologies: ['Python', 'Flask', 'Django REST Framework', 'REST APIs'],
    keyActivities: [
      'Backend API development with Flask and Django REST Framework',
      'Authentication management',
      'Document management features',
      'Python virtual environment management',
    ],
  },
  {
    id: 7,
    title: 'Automation Tester',
    company: 'Advanced Global Solutions S.p.A.',
    location: 'Milano, Italia',
    sector: 'QA / Testing',
    period: { start: '2020-01', end: '2020-12' },
    accentColor: '#64748b',
    description: {
      it: 'Sviluppo test automatici per web e mobile. Test API, automazione test funzionali e scrittura scenari Cucumber/Gherkin.',
      en: 'Automated test development for web and mobile. API testing, functional test automation and Cucumber/Gherkin scenario writing.',
      es: 'Desarrollo de pruebas automáticas para web y móvil. Pruebas de API, automatización de pruebas funcionales y escritura de escenarios Cucumber/Gherkin.',
    },
    technologies: ['Katalon Studio', 'Cucumber', 'Gherkin', 'API Testing'],
    keyActivities: [
      'Automated test development (web and mobile)',
      'API testing',
      'Functional test automation',
      'Cucumber / Gherkin scenario writing',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Inventory Chain Platform',
    sector: 'Banking / FinTech',
    description: {
      it: 'Piattaforma enterprise per la gestione digitale del pegno non possessorio sviluppata per Sopra Steria. Architettura a microservizi con Spring, integrazione Apache Kafka per gestione eventi asincroni e monitoraggio infrastrutturale su Azure.',
      en: 'Enterprise platform for the digital management of non-possessory pledges developed at Sopra Steria. Microservices architecture with Spring, Apache Kafka integration for asynchronous event management and infrastructure monitoring on Azure.',
      es: 'Plataforma enterprise para la gestión digital del pignoramento no posesorio desarrollada en Sopra Steria. Arquitectura de microservicios con Spring, integración de Apache Kafka para la gestión de eventos asíncronos y monitorización de infraestructuras en Azure.',
    },
    technologies: [
      'Java 21',
      'Spring',
      'Microservices',
      'Apache Kafka',
      'Azure',
      'Maven',
      'REST APIs',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Legacy Banking Modernization',
    sector: 'Banking',
    description: {
      it: 'Progetto di modernizzazione per Crédit Agricole: migrazione da Struts 1 a Struts 2, upgrade Java da versione 6 a 21 e conversione del build system da Apache Ant a Maven multi-modulo. Miglioramento sostanziale della maintainability del codice.',
      en: 'Modernization project for Crédit Agricole: migration from Struts 1 to Struts 2, Java upgrade from version 6 to 21 and build system migration from Apache Ant to multi-module Maven. Substantial improvement in code maintainability.',
      es: 'Proyecto de modernización para Crédit Agricole: migración de Struts 1 a Struts 2, actualización de Java de la versión 6 a la 21 y conversión del sistema de compilación de Apache Ant a Maven multi-módulo. Mejora sustancial de la mantenibilidad del código.',
    },
    technologies: [
      'Java 21',
      'Struts 2',
      'Maven',
      'Spring',
      'Legacy Migration',
    ],
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Serverless Cloud Pipeline',
    sector: 'Cloud / AWS',
    description: {
      it: 'Infrastruttura serverless AWS sviluppata per Storm Reply: pipeline di elaborazione dati con Lambda, API Gateway, S3 e ElasticSearch. Architettura event-driven definita tramite CloudFormation con deploy automatizzato.',
      en: 'AWS serverless infrastructure developed at Storm Reply: data processing pipeline with Lambda, API Gateway, S3 and ElasticSearch. Event-driven architecture defined via CloudFormation with automated deployment.',
      es: 'Infraestructura serverless AWS desarrollada en Storm Reply: pipeline de procesamiento de datos con Lambda, API Gateway, S3 y ElasticSearch. Arquitectura event-driven definida mediante CloudFormation con despliegue automatizado.',
    },
    technologies: [
      'Python',
      'AWS Lambda',
      'API Gateway',
      'S3',
      'ElasticSearch',
      'CloudFormation',
      'YAML',
    ],
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Telecom Systems Platform',
    sector: 'Telecomunicazioni',
    description: {
      it: 'Sviluppo e manutenzione di una piattaforma telecomunicazioni per Capgemini: Change Request, Bug Fixing, schedulazione batch con Quartz/Pentaho, procedure Oracle/MySQL e integrazione frontend Angular con backend Java Spring.',
      en: 'Development and maintenance of a telecommunications platform at Capgemini: Change Requests, Bug Fixing, batch scheduling with Quartz/Pentaho, Oracle/MySQL procedures and Angular frontend integration with Java Spring backend.',
      es: 'Desarrollo y mantenimiento de una plataforma de telecomunicaciones en Capgemini: Change Requests, Bug Fixing, programación de lotes con Quartz/Pentaho, procedimientos Oracle/MySQL e integración del frontend Angular con el backend Java Spring.',
    },
    technologies: [
      'Java',
      'Spring',
      'Angular',
      'TypeScript',
      'Oracle',
      'MySQL',
      'Quartz',
      'Pentaho',
    ],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/jpsotamba', icon: 'Github' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jean-pierre-sotamba-34b58120a',
    icon: 'Linkedin',
  },
];

export const cvLinks: CVLink[] = [
  { lang: 'it', label: 'Italiano', url: '/assets/cv/cv-italiano.pdf' },
  { lang: 'en', label: 'English', url: '/assets/cv/cv-english.pdf' },
  { lang: 'es', label: 'Español', url: '/assets/cv/cv-espanol.pdf' },
];
