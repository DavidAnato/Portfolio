export const aboutStory = [
  'Je suis développeur Full-Stack, basé à Cotonou, formé en informatique de gestion et intelligence artificielle. Ce qui m’intéresse, c’est de livrer des produits complets : interfaces soignées, APIs solides, données cohérentes, et un déploiement qui tient en conditions réelles.',
  'J’interviens aussi bien sur le web que sur le mobile. Python/Django, React, React Native, Vue.js et Node.js forment le cœur de ma stack. J’ai aussi travaillé sur des modules et intégrations Odoo dans le cadre de missions, sans que ce soit mon positionnement principal.',
  'Côté IA, je m’appuie sur le Machine Learning, le NLP, le RAG et les LLM quand cela accélère vraiment un parcours métier — recherche sémantique, assistants, traitement de données — plutôt que comme une démonstration.',
  'En mission, je prends le sujet de bout en bout : comprendre le besoin, proposer une architecture simple, implémenter, tester les parcours, puis itérer. J’aime les produits où le backend, l’interface et les données se parlent clairement.',
]

export const aboutFocus = [
  {
    title: 'Produit de bout en bout',
    text: 'De la conception à la mise en production : architecture, UI, API, base de données, auth, temps réel et déploiement.',
  },
  {
    title: 'Missions concrètes',
    text: 'Expérience en entreprise et chez des clients : e-commerce, marketplaces, santé, e-learning, finance et applications mobiles.',
  },
  {
    title: 'Qualité & autonomie',
    text: 'Code lisible, parcours utilisateurs clairs, tests et itérations. Je préfère un livrable utile à une démo technique.',
  },
]

export const aboutHowIWork = [
  {
    title: 'Comprendre avant de coder',
    text: 'Je clarifie les rôles, les flux (auth, paiements, contenus) et les contraintes avant de poser l’architecture.',
  },
  {
    title: 'Livrer par incrément',
    text: 'Une première version utilisable, puis des itérations : correctifs, parcours, back-office, mobile si besoin.',
  },
  {
    title: 'Garder le code maintenable',
    text: 'APIs explicites, modèles de données cohérents, interfaces lisibles — pour que le produit puisse évoluer.',
  },
]

export const experienceExtras: Record<
  string,
  { summary: string; contributions: string[] }
> = {
  LaToure: {
    summary:
      'Poste actuel : je construis et maintiens des produits web et mobile pour LaToure, en intervenant sur toute la chaîne — backend, interfaces, APIs et fonctionnalités métier.',
    contributions: [
      'Développement et maintenance d’OmneeFX, plateforme métier trading / finance avec parcours back-office et e-learning.',
      'Travail sur Azɔtɛn : marketplace de jobs, escrow, application mobile, API Django et back-office admin.',
      'Intervention frontend / backend selon les besoins du produit, avec livraison itérative.',
      'Suivi des parcours utilisateurs, correction de bugs et évolution des fonctionnalités existantes.',
    ],
  },
  Zenpilote: {
    summary:
      'Missions d’applications web et mobiles pour des clients : e-commerce, mise en relation, prise de rendez-vous et outils autour de l’écosystème Odoo Apps.',
    contributions: [
      'Prestige Distribution : boutique WooCommerce, personnalisations et liaison avec le métier Odoo.',
      'SwimConnect : plateforme pour maîtres-nageurs et piscines, parcours métiers et interface responsive.',
      'Timvio : app mobile de rendez-vous, API Node/Express, JWT et paiements Stripe.',
      'Odoo Smart Search : moteur de recherche sémantique sur apps.odoo.com (FastAPI + React).',
      'Tests fonctionnels, corrections et amélioration continue des parcours.',
    ],
  },
  'FAMES Bénin': {
    summary:
      'Projet full-stack pour la Fédération des Étudiants Béninois en Chine : un site média / blog avec gestion de contenus et administration.',
    contributions: [
      'Frontend React et interface de lecture des articles.',
      'Backend Django et API REST pour les contenus.',
      'Panel d’administration pour publier et organiser les articles.',
      'Mise en place d’une base de contenu blog / média.',
    ],
  },
  Hélice: {
    summary:
      'Développement d’un outil de scraping d’entreprises et personnalisation d’un flux Odoo Achats (factures).',
    contributions: [
      'Collecte automatisée de données entreprises (Python, Django, Requests, BeautifulSoup, DrissionPage).',
      'Structuration et traitement des données pour exploitation métier.',
      'Personnalisation du module d’achat Odoo pour les factures d’achat.',
    ],
  },
  'Hélice (Stage)': {
    summary:
      'Stage backend : conception d’APIs REST pour alimenter une application mobile.',
    contributions: [
      'Mise en place d’endpoints Django REST Framework.',
      'Modélisation des ressources et authentification de base.',
      'Documentation et tests des routes pour le client mobile.',
    ],
  },
}

export type ProjectExtra = {
  longDescription: string
  details: string[]
  role?: string
  setting?: string
}

export const projectExtras: Record<string, ProjectExtra> = {
  FOTOCE: {
    setting: 'Projet personnel phare, en développement.',
    role: 'Conception et développement full-stack : web, mobile, API, temps réel et studio IA.',
    longDescription:
      'FOTOCE est conçu comme un réseau social visuel complet, pas comme une démo. L’objectif est de couvrir le cycle de vie d’un contenu (publication, découverte, interaction, notification) sur le web et le mobile, avec un backend API, du temps réel et un mode offline-first. Un studio IA vient enrichir la création sans remplacer le produit social.',
    details: [
      'Feed, stories, profils, recherche et interactions sociales.',
      'Application mobile Expo / React Native alignée sur le web Vue.js.',
      'API Django REST, PostgreSQL, WebSockets pour le temps réel.',
      'Cache et parcours offline pour rester utilisable hors connexion.',
      'Authentification, notifications et briques de monétisation.',
      'Studio IA pour assister la création de contenus visuels.',
    ],
  },
  OmneeFX: {
    setting: 'Mission professionnelle — LaToure.',
    role: 'Développement et maintenance de la plateforme Odoo et du site associé.',
    longDescription:
      'OmneeFX est une plateforme métier orientée trading / finance, développée et maintenue dans le cadre de LaToure. Le cœur applicatif s’appuie sur Odoo (modules, back-office, e-learning) avec un site public pour présenter l’offre.',
    details: [
      'Personnalisation de modules métier trading / finance.',
      'Parcours back-office pour les équipes et les utilisateurs.',
      'Module e-learning pour former les utilisateurs de la plateforme.',
      'Maintenance évolutive : correctifs, nouvelles fonctionnalités, cohérence des vues.',
      'Site vitrine associé pour l’acquisition et la présentation de l’offre.',
    ],
  },
  'Odoo Smart Search': {
    setting: 'Mission réalisée dans le cadre de Zenpilote.',
    role: 'Conception du pipeline (scraping, embeddings, API) et de l’interface de recherche.',
    longDescription:
      'Odoo Smart Search (OSS) est un moteur de recherche sémantique sur le catalogue apps.odoo.com. L’idée : trouver un module par intention (« facturation multi-sociétés ») plutôt que par mot-clé exact. Le pipeline combine scraping, embeddings, API FastAPI et un frontend React.',
    details: [
      'Indexation vectorielle des fiches modules Odoo Apps.',
      'Recherche par similarité (sentence-transformers) plutôt que match lexical.',
      'Filtres métier : version, prix, licence, éditeur.',
      'Traduction FR/EN pour élargir les requêtes.',
      'API FastAPI + SQLAlchemy et interface React / Vite / Tailwind.',
    ],
  },
  'Prestige Distribution': {
    setting: 'Mission réalisée dans le cadre de Zenpilote.',
    role: 'Boutique WooCommerce, personnalisations et raccordement au métier Odoo.',
    longDescription:
      'Site de distribution e-commerce pour Prestige Distribution : catalogue, parcours d’achat WooCommerce, et raccordement au métier Odoo pour rester aligné avec la gestion interne.',
    details: [
      'Boutique WordPress / WooCommerce et gestion du catalogue.',
      'Personnalisations via WP Code (parcours, affichages, règles).',
      'Intégration avec Odoo pour le flux métier (produits, commandes).',
      'Interface responsive orientée conversion et lisibilité du catalogue.',
    ],
  },
  'Odoo Module Rhys': {
    setting: 'Add-on Odoo 13 — structure de module installable.',
    role: 'Développement du module (manifest, modèles, vues, ACL, snippet Website).',
    longDescription:
      'Add-on Odoo 13 structuré comme un vrai module installable : manifest, modèles Python, vues XML, droits d’accès. Il sert d’assistant vocal / snippet Website Builder.',
    details: [
      'Manifest Odoo, dépendance `base`, module installable.',
      'Modèles Python et vues XML.',
      'Règles de sécurité / ACL (`ir.model.access`).',
      'Snippet Website Builder pour le site Odoo.',
    ],
  },
  SwimConnect: {
    setting: 'Mission réalisée dans le cadre de Zenpilote.',
    role: 'Développement de la plateforme web et des parcours métiers.',
    longDescription:
      'Plateforme web pour l’écosystème aquatique : mettre en relation maîtres-nageurs et structures (piscines), organiser les activités et clarifier les parcours utilisateurs.',
    details: [
      'Espaces distincts maîtres-nageurs et piscines.',
      'Gestion des activités et des structures.',
      'Parcours d’inscription / mise en relation.',
      'Interface web responsive livrée dans le cadre de Zenpilote.',
    ],
  },
  Timvio: {
    setting: 'Mission réalisée dans le cadre de Zenpilote.',
    role: 'App mobile de rendez-vous et API Node (auth JWT, Stripe).',
    longDescription:
      'Application mobile de prise de rendez-vous pour salons et établissements. Le client gère les créneaux et les profils ; une API Node/Express sécurisée par JWT relie l’app aux données et à Stripe.',
    details: [
      'App React Native pour les clients et les établissements.',
      'API Express.js, MongoDB, authentification JWT.',
      'Gestion des créneaux, des profils et des rendez-vous.',
      'Paiements Stripe pour encaisser les prestations.',
    ],
  },
  'Azɔtɛn': {
    setting: 'Mission professionnelle — LaToure.',
    role: 'Marketplace jobs : app mobile, API Django, escrow et back-office.',
    longDescription:
      'Marketplace de missions avec escrow : publier un job, candidater, échanger, et sécuriser le paiement jusqu’à la livraison. L’écosystème comprend l’app mobile, l’API Django et un back-office admin.',
    details: [
      'Publication d’offres et candidatures.',
      'Escrow et paiements sécurisés entre parties.',
      'Messagerie et notifications.',
      'App React Native / Expo, API Django REST, admin Next.js.',
    ],
  },
  'FAMES Bénin': {
    setting: 'Projet full-stack pour la fédération étudiante.',
    role: 'Site média : frontend React, API Django et administration des contenus.',
    longDescription:
      'Site média de la Fédération des Étudiants Béninois en Chine : articles, catégories, administration des contenus. Stack React + Django REST.',
    details: [
      'Lecture d’articles et navigation éditoriale.',
      'API Django pour les contenus.',
      'Panel admin pour publier et classer.',
      'Frontend React / Tailwind.',
    ],
  },
  'DOTO+': {
    setting: 'Projet de soutenance — écosystème santé numérique.',
    role: 'Produit complet : apps patient / professionnels, API médicale, QR et admin.',
    longDescription:
      'Écosystème santé numérique de soutenance : Doto+ (patient), DotoHub (professionnels), DotoCard (accès QR), admin et API médicale. Le produit gère dossiers, consultations, ordonnances, examens, consentement et un mode urgence hors ligne.',
    details: [
      'App patient Expo (dossiers, RDV, consentement).',
      'Hub web / mobile pour les professionnels de santé.',
      'DotoCard : QR chiffré pour un accès d’urgence.',
      'API Django, PostgreSQL, JWT, RBAC multi-rôles.',
      'Back-office d’administration de la plateforme.',
      'Mode urgence utilisable sans réseau.',
    ],
  },
  WISORIA: {
    setting: 'Projet personnel — e-learning.',
    role: 'Application mobile Expo : cours, quiz, certification et progression.',
    longDescription:
      'Plateforme e-learning : suivre des cours, avancer dans un parcours, passer des quiz et obtenir une certification. L’app mobile Expo est le client principal publié.',
    details: [
      'Cours et parcours pédagogiques.',
      'Quiz de validation.',
      'Certification de fin de parcours.',
      'Application mobile TypeScript / Expo.',
    ],
  },
  'LAHA Academia': {
    setting: 'Projet personnel — plateforme éducative.',
    role: 'Frontend pour catalogue de cours et d’ouvrages.',
    longDescription:
      'Plateforme éducative pour diffuser cours et ouvrages : catalogue pédagogique, lecture et organisation des contenus pour les apprenants.',
    details: [
      'Catalogue de cours et d’ouvrages.',
      'Diffusion de contenus pédagogiques.',
      'Interface frontend dédiée.',
      'Parcours de consultation pour les apprenants.',
    ],
  },
  AgriConnect: {
    setting: 'Projet personnel — marketplace agricole.',
    role: 'Frontend React, API Python, rôles producteur / consommateur / admin.',
    longDescription:
      'Marketplace agricole qui relie producteurs et consommateurs. Catalogue, panier, commandes, et dashboards séparés (producteur, consommateur, admin), avec une API Python.',
    details: [
      'Inscription / auth et rôles (producteur, consommateur, admin).',
      'Catalogue produits, panier, checkout.',
      'Suivi des commandes côté producteur et consommateur.',
      'Back-office admin et API Python / frontend React + Vite.',
    ],
  },
  'Connect Me': {
    setting: 'Mini-app web personnelle.',
    role: 'Page statique pour générer et partager un contact WhatsApp.',
    longDescription:
      'Mini-app web pour obtenir et partager un contact via WhatsApp, sans friction : page statique, lien direct, déploiement GitHub Pages.',
    details: [
      'Formulaire / génération de lien WhatsApp.',
      'Partage rapide d’un contact.',
      'Interface HTML/CSS/JS légère.',
      'Hébergement GitHub Pages.',
    ],
  },
  'Royal Computer': {
    setting: 'Projet personnel — boutique Django.',
    role: 'E-commerce Django : catalogue, panier, comptes et blog.',
    longDescription:
      'Boutique Django d’ordinateurs et d’électronique : catalogue, panier, authentification et blog pour animer le contenu autour des produits.',
    details: [
      'Catalogue et fiches produits.',
      'Panier et commandes.',
      'Comptes utilisateurs.',
      'Espace blog associé à la boutique.',
    ],
  },
  EwaTiwa: {
    setting: 'Site e-commerce public.',
    role: 'Boutique en ligne cosmétique : catalogue et parcours d’achat.',
    longDescription:
      'Boutique en ligne de cosmétiques pour peaux noires et métissées. Le site met en avant le catalogue et un parcours d’achat clair.',
    details: [
      'Mise en avant des gammes produits.',
      'Parcours catalogue → fiche → achat.',
      'Identité visuelle adaptée à la marque.',
      'Site public ewatiwa.com.',
    ],
  },
  'Bethel Sarl': {
    setting: 'Site vitrine — entreprise d’impression.',
    role: 'Pages HTML/CSS responsive pour présenter les services.',
    longDescription:
      'Site vitrine pour une entreprise d’impression : présenter les services, rassurer le visiteur et donner un point de contact, en HTML/CSS responsive.',
    details: [
      'Pages de présentation des services d’impression.',
      'Mise en page responsive.',
      'Identité visuelle simple et lisible.',
      'Déploiement GitHub Pages.',
    ],
  },
  AnimeVerse: {
    setting: 'Projet personnel — catalogue d’animes.',
    role: 'Front Bootstrap / SCSS / jQuery : recherche, filtres, fiches.',
    longDescription:
      'Catalogue d’exploration d’animes : rechercher, filtrer et ouvrir une fiche détaillée. Front Bootstrap / SCSS / jQuery.',
    details: [
      'Recherche textuelle.',
      'Filtres de catalogue.',
      'Fiches titres détaillées.',
      'UI Bootstrap et styles SCSS.',
    ],
  },
  'X SHOP': {
    setting: 'Projet personnel — en cours.',
    role: 'Frontend e-commerce type marketplace (catalogue, panier).',
    longDescription:
      'Frontend e-commerce inspiré des grandes marketplaces (catalogue, panier, parcours d’achat). Projet encore en développement.',
    details: [
      'Structure de catalogue type marketplace.',
      'Parcours d’achat côté client.',
      'Interface e-commerce dédiée.',
      'Statut : en cours.',
    ],
  },
  'Elek-Store': {
    setting: 'Projet personnel — API boutique.',
    role: 'API REST Django : auth, catalogue, panier, commandes, chatbot.',
    longDescription:
      'API REST Django d’une boutique : auth, produits, panier, commandes, plus un chatbot branché sur le métier e-commerce.',
    details: [
      'Authentification des utilisateurs.',
      'Endpoints catalogue / produits.',
      'Panier et commandes.',
      'Module chatbot pour l’assistance.',
    ],
  },
  'Traduction Français → Fong': {
    setting: 'Projet IA / TAL — données et expérimentation.',
    role: 'Préparation de corpus FR/Fon et expérimentation de modèle de traduction.',
    longDescription:
      'Projet de traduction automatique FR → Fon, appuyé sur des données linguistiques spécifiques et des techniques de Machine Learning (jeu de données et expérimentation de modèle).',
    details: [
      'Préparation de paires de phrases FR/Fon.',
      'Entraînement / expérimentation d’un modèle de traduction.',
      'Travail sur les diacritiques et la qualité des données.',
      'Dépôt de données associé sur GitHub.',
    ],
  },
  'Collecte de données linguistiques en Fongbe': {
    setting: 'Projet IA / TAL — constitution de corpus.',
    role: 'Collecte, nettoyage et formatage de données en fongbe.',
    longDescription:
      'Collecte et nettoyage de corpus en fongbe pour alimenter des modèles de TAL : alignement, nettoyage, formatage.',
    details: [
      'Collecte de corpus écrits / oraux selon disponibilité.',
      'Nettoyage et normalisation.',
      'Préparation pour l’entraînement NLP.',
      'Base pour la traduction et d’autres applications linguistiques.',
    ],
  },
  'Système de chatbot': {
    setting: 'Prototype NLP.',
    role: 'Chatbot d’intentions, réutilisable dans un contexte e-commerce.',
    longDescription:
      'Prototype de chatbot NLP : comprendre une intention, répondre, et servir de base à des assistants plus complets (ex. e-commerce).',
    details: [
      'Compréhension d’intentions simples.',
      'Réponses guidées par règles / NLP.',
      'Expérimentation d’un flux conversationnel.',
      'Réutilisable dans un contexte boutique (Elek-Store).',
    ],
  },
  'Assistant vocal': {
    setting: 'Expérimentation voix (STT / TTS).',
    role: 'Reconnaissance de commandes vocales et réponse parlée.',
    longDescription:
      'Assistant capable d’écouter une commande vocale, de l’interpréter et de répondre — reconnaissance et synthèse vocales.',
    details: [
      'Capture audio et reconnaissance vocale.',
      'Interprétation de commandes.',
      'Réponse vocale (TTS).',
      'Expérimentation aussi dans un module Odoo (Rhys).',
    ],
  },
  'Application multifonctionnelle': {
    setting: 'Laboratoire Python (vision, audio, QR).',
    role: 'Boîte à outils : OCR, parole, images, QR.',
    longDescription:
      'Boîte à outils Python : OCR, parole, images, QR. Un laboratoire pratique de vision et de traitement du signal plutôt qu’un produit unique.',
    details: [
      'OCR (extraction de texte depuis une image).',
      'Reconnaissance et synthèse vocales.',
      'Traitement d’images et arrière-plans.',
      'Génération et lecture de QR codes.',
    ],
  },
  'Web Scraping': {
    setting: 'Outils de collecte réutilisés en mission.',
    role: 'Extraction web, parsing HTML et structuration des données.',
    longDescription:
      'Outils de collecte web (entreprises, catalogues, pages) : requêtes HTTP, parsing HTML, structuration des données pour un usage métier.',
    details: [
      'Ciblage de sources web.',
      'Extraction (BeautifulSoup, Requests, parfois navigation automatisée).',
      'Nettoyage et stockage structuré.',
      'Réutilisé notamment sur le scraping d’entreprises (Hélice) et apps.odoo.com (OSS).',
    ],
  },
}

export const skillNotes: Record<string, string> = {
  Langages: 'Bases avec lesquelles je construis le reste de la stack, du script à l’application.',
  Frontend: 'Interfaces web modernes, design systems légers et apps React / Vue / Next.',
  Mobile: 'Applications iOS/Android via React Native, et expérimentations Flutter / Python.',
  Desktop: 'Outils internes et prototypes desktop (Qt, Electron, Tauri, etc.).',
  Backend: 'APIs REST, temps réel, auth et métier — surtout Django et Node.',
  'Data & IA': 'Du classique ML/DL au RAG et aux agents, uniquement quand ça sert le produit.',
  'Base de données': 'Relationnel, document et BaaS selon le projet (Postgres, MySQL, Mongo, Firebase, Supabase).',
  DevOps: 'Git, conteneurs, reverse proxy et déploiements (Vercel, Render, Cloudflare, VPS).',
  Autres: 'ERP Odoo en mission, design, PWA, tests et outillage API.',
  'Compétences passives': 'Ce que j’apporte autour du code : langues, collab, rigueur, autonomie.',
}

export const educationExtras: Record<
  string,
  { description: string; topics: string[] }
> = {
  'Licence en Informatique de Gestion — Intelligence Artificielle': {
    description:
      'Formation orientée systèmes d’information, développement et IA : de la gestion des données aux bases du machine learning, avec des projets appliqués (dont DOTO+ en soutenance).',
    topics: [
      'Algorithmique et programmation',
      'Bases de données et SI',
      'Intelligence artificielle / ML',
      'Développement d’applications web et mobile',
      'Projet de soutenance DOTO+',
    ],
  },
  'Baccalauréat Série D': {
    description:
      'Bac scientifique (série D), socle maths / sciences avant le cursus informatique.',
    topics: ['Mathématiques', 'Sciences de la vie et de la terre', 'Physique-chimie'],
  },
}
