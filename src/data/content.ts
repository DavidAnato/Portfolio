export const profile = {
  name: 'David Anato',
  title: 'Développeur Full-Stack & IA',
  tags: ['Web', 'Mobile', 'Backend', 'APIs', 'Real-Time', 'AI'],
  availability: 'Disponible pour des opportunités remote',
  heroText:
    'Développeur Full-Stack spécialisé dans la conception et le développement d’applications web et mobiles, avec une expérience en frontend, backend, APIs REST et systèmes temps réel. Je travaille principalement avec Python/Django, React, React Native, Vue.js et Node.js, de l’architecture au déploiement. Je m’intéresse également à l’intégration de l’IA, notamment le Machine Learning, les LLM, le RAG et les agents IA.',
  stackLine: ['Python', 'Django', 'React', 'React Native', 'Vue.js', 'Node.js', 'IA'],
  email: 'david1anato@gmail.com',
  phone: '+229 01 56 54 38 80',
  phoneHref: 'tel:+2290156543880',
  whatsapp: 'https://wa.me/22956543880',
  github: 'https://github.com/DavidAnato',
  cv: `${import.meta.env.BASE_URL}DavidAnato_CV.pdf`,
  photo: `${import.meta.env.BASE_URL}image.png`,
  location: 'Cotonou, Bénin',
} as const

export const about = {
  lead:
    'Je conçois et développe des applications de bout en bout — de l’architecture aux interfaces, des APIs au déploiement — avec une attention particulière à la qualité du code et à l’expérience utilisateur.',
  points: [
    {
      title: 'Chaîne complète',
      text: 'Conception, architecture, frontend, backend, APIs, bases de données, temps réel, mobile et déploiement.',
    },
    {
      title: 'Produit & résolution',
      text: 'Autonomie, apprentissage continu et focus sur la création de produits utiles plutôt que sur des démonstrations techniques.',
    },
    {
      title: 'Qualité',
      text: 'Code maintenable, parcours utilisateurs soignés, et intégration progressive de l’IA là où elle apporte une vraie valeur.',
    },
  ],
} as const

export type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
  projects?: string[]
  technologies?: string[]
  kind?: 'job' | 'project'
  current?: boolean
}

export const experiences: ExperienceItem[] = [
  {
    company: 'LaToure',
    role: 'Développeur Full-Stack',
    period: 'Août 2024 — Présent',
    description:
      'Développement et maintenance de solutions web, avec intervention sur le frontend, le backend, les APIs et les fonctionnalités métier.',
    projects: ['OmneeFX', 'Azɔtɛn'],
    current: true,
    kind: 'job',
  },
  {
    company: 'Zenpilote',
    role: 'Développeur d’applications',
    period: 'Mars 2025 — Juin 2026',
    description:
      'Développement d’applications web et mobiles, intégration de fonctionnalités, tests fonctionnels, correction de bugs et amélioration des parcours utilisateurs.',
    projects: ['Prestige Distribution', 'SwimConnect', 'Timvio', 'Odoo Smart Search'],
    kind: 'job',
  },
  {
    company: 'FAMES Bénin',
    role: 'Projet Full-Stack',
    period: 'Août — Octobre 2024',
    description:
      'Conception et développement d’un site web de blog et média pour FAMES Bénin, avec frontend, backend, gestion des contenus et APIs.',
    technologies: ['React', 'Django', 'REST API'],
    kind: 'project',
  },
  {
    company: 'Hélice',
    role: 'Développeur Logiciel Junior',
    period: '2024',
    description:
      'Développement d’une application de scraping de données sur les entreprises (Python, Django, Requests, BeautifulSoup, DrissionPage). Mise à jour du module d’achat Odoo pour personnaliser les factures d’achat.',
    technologies: ['Python', 'Django', 'Requests', 'BeautifulSoup', 'DrissionPage', 'Odoo'],
    kind: 'job',
  },
  {
    company: 'Hélice (Stage)',
    role: 'Développeur Backend Junior',
    period: '2023',
    description:
      'Création d’API REST avec Django REST Framework (DRF) pour la gestion du backend d’une application mobile.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'REST API'],
    kind: 'job',
  },
]

export type ProjectLink = { label: string; href: string }

export type Project = {
  name: string
  description: string
  category: 'featured' | 'professional' | 'personal' | 'ai'
  badge?: string
  highlights?: string[]
  technologies?: string[]
  links?: ProjectLink[]
  context?: string
  status?: string
}

export const projects: Project[] = [
  {
    name: 'FOTOCE',
    category: 'featured',
    badge: 'Projet principal · En développement',
    description:
      'Plateforme sociale de partage de photos et de contenus visuels conçue comme un produit complet web et mobile. FOTOCE intègre un feed, des stories, profils, recherche, interactions sociales, notifications, monétisation, fonctionnalités offline-first et un studio IA.',
    highlights: [
      'Architecture web + mobile',
      'Backend API',
      'Temps réel',
      'Cache / offline',
      'Authentification',
      'Monétisation',
      'Notifications',
      'Studio IA',
    ],
    technologies: [
      'Vue.js',
      'Vite',
      'Tailwind CSS',
      'React Native',
      'Expo',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'WebSockets',
      'TanStack Query',
      'IA',
    ],
    links: [{ label: 'Visiter FOTOCE', href: 'https://fotoce.app' }],
  },
  {
    name: 'Prestige Distribution',
    category: 'professional',
    context: 'Projet réalisé dans le cadre de Zenpilote',
    description:
      'Plateforme web de distribution e-commerce, avec boutique en ligne, gestion des produits et parcours d’achat. Intégration WordPress / WooCommerce, personnalisations via WP Code, et connexion au métier Odoo.',
    highlights: [
      'E-commerce WooCommerce',
      'Intégration Odoo',
      'Personnalisations WP Code',
      'Parcours distribution & catalogue',
    ],
    technologies: ['WordPress', 'WooCommerce', 'WP Code', 'Odoo'],
    links: [{ label: 'Voir le site', href: 'https://www.prestige-distribution.eu/' }],
  },
  {
    name: 'SwimConnect',
    category: 'professional',
    context: 'Projet réalisé dans le cadre de Zenpilote',
    description:
      'Plateforme web pour maîtres-nageurs et piscines : mise en relation, gestion des activités, parcours utilisateurs et fonctionnalités métier liées à l’organisation des cours et des structures aquatiques.',
    highlights: [
      'Espace maîtres-nageurs & piscines',
      'Parcours utilisateurs métier',
      'Gestion des activités / structures',
      'Interface web responsive',
    ],
    links: [{ label: 'Voir le site', href: 'https://swimconnect.zenpilote.fr/' }],
  },
  {
    name: 'Timvio',
    category: 'professional',
    context: 'Projet réalisé dans le cadre de Zenpilote',
    description:
      'Application mobile de prise de rendez-vous pour salons et établissements. Gestion des créneaux, des profils, de l’authentification et des paiements, avec une API backend dédiée.',
    highlights: [
      'Prise de rendez-vous mobile',
      'Gestion des salons / établissements',
      'API REST & authentification JWT',
      'Paiements (Stripe)',
    ],
    technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
    links: [{ label: 'GitHub (API)', href: 'https://github.com/DavidAnato/timvio-backend' }],
  },
  {
    name: 'Odoo Smart Search',
    category: 'professional',
    context: 'Projet réalisé dans le cadre de Zenpilote',
    description:
      'Moteur de recherche sémantique sur le catalogue apps.odoo.com : recherche par intention plutôt que par mot-clé, indexation vectorielle des modules, traduction FR/EN et filtres (version, prix, licence, éditeur).',
    highlights: [
      'Recherche sémantique / vectorielle',
      'Scraping & indexation apps.odoo.com',
      'Traduction multilingue',
      'Filtres métier Odoo',
      'API FastAPI + frontend React',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'sentence-transformers',
      'SQLAlchemy',
    ],
    links: [{ label: 'Visiter OSS', href: 'https://oss.zenpilote.fr/' }],
  },
  {
    name: 'OmneeFX',
    category: 'professional',
    context: 'Projet professionnel — LaToure',
    description:
      'Solution Odoo complète orientée trading / finance, avec modules métier et un module e-learning intégré pour la formation des utilisateurs. Développement et maintenance sur l’ensemble de la plateforme.',
    highlights: [
      'Odoo complet',
      'Module e-learning',
      'Fonctionnalités métier trading / finance',
      'Back-office & parcours utilisateurs',
    ],
    technologies: ['Odoo', 'Python', 'XML', 'JavaScript'],
    links: [
      { label: 'Voir le site', href: 'https://www.omneefx.com/' },
      { label: 'GitHub', href: 'https://github.com/DavidAnato/OMNEEFx' },
    ],
  },
  {
    name: 'Azɔtɛn',
    category: 'professional',
    context: 'Projet professionnel — LaToure',
    description:
      'Marketplace de jobs avec système d’escrow, application mobile, API et back-office admin. Plateforme complète pour publier, candidater et sécuriser les transactions liées aux missions.',
    highlights: [
      'Marketplace jobs',
      'Escrow & paiements sécurisés',
      'App mobile',
      'API Django',
      'Back-office admin',
      'Messagerie & notifications',
    ],
    technologies: ['Django', 'Django REST Framework', 'React Native', 'Expo', 'Next.js'],
    links: [
      { label: 'Visiter Azɔtɛn', href: 'https://azotin.latoure.net' },
      { label: 'GitHub', href: 'https://github.com/DavidAnato/AZOTIN' },
    ],
  },
  {
    name: 'FAMES Bénin',
    category: 'professional',
    context: 'Projet Full-Stack',
    description:
      'Site web de blog et média pour la Fédération des Étudiants Béninois en Chine : frontend React, backend Django, APIs REST, gestion des contenus et panel d’administration complet.',
    highlights: [
      'Frontend React',
      'Backend Django & REST API',
      'Panel admin',
      'Gestion des contenus / blog & média',
    ],
    technologies: ['React', 'Django', 'Django REST Framework', 'REST API', 'Tailwind CSS'],
    links: [
      { label: 'GitHub — Frontend', href: 'https://github.com/DavidAnato/fames-benin-frontend' },
    ],
  },
  {
    name: 'DOTO+',
    category: 'personal',
    badge: 'Projet de soutenance',
    description:
      'Écosystème santé numérique conçu comme produit complet : application patient (Doto+), hub professionnels (DotoHub), carte d’accès QR (DotoCard), back-office admin et API médicale. Gestion des dossiers, consultations, ordonnances, examens, consentement et mode urgence hors ligne.',
    highlights: [
      'App patient Doto+ (Expo)',
      'DotoHub — interface professionnels',
      'DotoCard — QR chiffré',
      'API Django médicale',
      'RBAC multi-rôles',
      'Mode urgence offline',
      'Back-office admin',
    ],
    technologies: [
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
      'React Native',
      'Expo',
      'TypeScript',
    ],
    links: [
      { label: 'GitHub — API', href: 'https://github.com/DavidAnato/doto-backend' },
      { label: 'GitHub — App patient', href: 'https://github.com/DavidAnato/dotoplus' },
      { label: 'GitHub — Hub', href: 'https://github.com/DavidAnato/dotohub' },
    ],
  },
  {
    name: 'WISORIA',
    category: 'personal',
    description:
      'Plateforme e-learning web et mobile : cours, parcours, quiz et certification.',
    links: [
      { label: 'GitHub', href: 'https://github.com/DavidAnato/wisoria-api' },
    ],
  },
  {
    name: 'LAHA Academia',
    category: 'personal',
    description:
      'Plateforme éducative pour la gestion et la diffusion de contenus pédagogiques, cours et ouvrages.',
    links: [
      { label: 'GitHub', href: 'https://github.com/DavidAnato/lahaacademia-frontend' },
    ],
  },
  {
    name: 'Connect Me',
    category: 'personal',
    description:
      'Application web facilitant l’obtention et le partage de contacts via WhatsApp.',
  },
  {
    name: 'Royal Computer',
    category: 'personal',
    description:
      'Plateforme e-commerce spécialisée dans la vente d’ordinateurs et de produits électroniques.',
    links: [
      { label: 'GitHub', href: 'https://github.com/DavidAnato/royal-computer' },
    ],
  },
  {
    name: 'EwaTiwa',
    category: 'personal',
    description:
      'Site e-commerce spécialisé dans les produits cosmétiques pour peaux noires et métissées.',
    links: [{ label: 'Voir le site', href: 'https://ewatiwa.com/' }],
  },
  {
    name: 'Bethel Sarl',
    category: 'personal',
    description: 'Site vitrine développé pour une entreprise d’impression.',
    links: [
      { label: 'Voir le site', href: 'https://davidanato.github.io/Bethele-Sarl/' },
      { label: 'GitHub', href: 'https://github.com/DavidAnato/Bethele-Sarl' },
    ],
  },
  {
    name: 'AnimeVerse',
    category: 'personal',
    description:
      'Plateforme web d’exploration d’animes avec recherche, filtrage et présentation détaillée.',
    links: [
      { label: 'Voir le site', href: 'https://davidanato.github.io/AnimeVerse/' },
      { label: 'GitHub', href: 'https://github.com/DavidAnato/AnimeVerse' },
    ],
  },
  {
    name: 'X SHOP',
    category: 'personal',
    status: 'En développement',
    description: 'Plateforme e-commerce inspirée des grandes marketplaces.',
    links: [
      { label: 'GitHub', href: 'https://github.com/DavidAnato/x-shop-frontend' },
    ],
  },
  {
    name: 'Traduction Français → Fong',
    category: 'ai',
    description:
      'Projet de modèle de traduction automatique utilisant des techniques de Machine Learning et des données linguistiques spécifiques.',
    links: [
      { label: 'GitHub', href: 'https://github.com/DavidAnato/Fon-Translate-Data' },
    ],
  },
  {
    name: 'Collecte de données linguistiques en Fongbe',
    category: 'ai',
    description:
      'Projet de collecte et préparation de données linguistiques destinées à des applications de traitement automatique du langage.',
  },
  {
    name: 'Système de chatbot',
    category: 'ai',
    description: 'Prototype de chatbot utilisant des techniques de NLP.',
  },
  {
    name: 'Assistant vocal',
    category: 'ai',
    description:
      'Assistant capable de comprendre des commandes vocales et d’interagir avec l’utilisateur.',
  },
  {
    name: 'Application multifonctionnelle',
    category: 'ai',
    description:
      'Application Python avec OCR, reconnaissance vocale, synthèse vocale, traitement d’images, manipulation d’arrière-plan, génération et lecture de QR codes.',
  },
  {
    name: 'Web Scraping',
    category: 'ai',
    description:
      'Application de collecte et traitement automatisé de données provenant du web.',
  },
]

export const skills = [
  {
    category: 'Langages',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Flet', 'Kivy'],
  },
  {
    category: 'Desktop',
    items: ['PySide', 'PyQt', 'Kivy', 'Flet', 'Electron', 'Tkinter', 'Tauri', 'NW.js', 'Eel'],
  },
  {
    category: 'Backend',
    items: [
      'Django',
      'Django REST Framework',
      'Node.js',
      'Express.js',
      'AdonisJS',
      'FastAPI',
      'REST APIs',
      'Django Channels',
      'WebSockets',
    ],
  },
  {
    category: 'Data & IA',
    items: [
      'Machine Learning',
      'LLM',
      'APIs IA',
      'RAG',
      'Vector Databases',
      'Agents IA',
      'Prompt Engineering',
      'Web Scraping',
    ],
  },
  {
    category: 'Base de données',
    items: ['PostgreSQL', 'SQL'],
  },
  {
    category: 'DevOps',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'Nginx',
      'CI/CD',
      'Vercel',
      'Render',
      'Cloudflare',
    ],
  },
  {
    category: 'Autres',
    items: ['Odoo', 'Postman', 'Figma', 'Progressive Web Apps', 'UI/UX', 'Tests & débogage'],
  },
] as const

export const education = [
  {
    title: 'Licence en Informatique de Gestion — Intelligence Artificielle',
    school: 'Institut Cerco',
    period: '2022 — 2025',
  },
  {
    title: 'Baccalauréat Série D',
    school: 'CP Sainte Séraphine',
    period: '2022',
  },
] as const

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
] as const
