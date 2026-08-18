export const affinityLabels: Record<string, string> = {
  odoo: 'Odoo',
  mobile: 'Mobile',
  marketplace: 'Marketplace',
  ecommerce: 'E-commerce',
  social: 'Réseau social',
  realtime: 'Temps réel',
  health: 'Santé',
  education: 'E-learning',
  media: 'Média / contenus',
  nlp: 'NLP / TAL',
  scraping: 'Scraping',
  search: 'Recherche',
  booking: 'Rendez-vous',
  matching: 'Mise en relation',
  django: 'Django / API',
  voice: 'Voix',
  static: 'Site léger',
  catalogue: 'Catalogue',
}

/** Tags trop larges : insuffisants à eux seuls pour déclarer deux projets compatibles. */
export const broadTags = new Set(['mobile', 'django'])

export type ProjectAffinity = {
  tags: string[]
  /** Liens curatés : priorité sur le score automatique. */
  relatedTo: string[]
}

export const projectAffinity: Record<string, ProjectAffinity> = {
  FOTOCE: {
    tags: ['social', 'mobile', 'realtime', 'django'],
    relatedTo: ['Azɔtɛn', 'DOTO+', 'Timvio'],
  },
  OmneeFX: {
    tags: ['odoo'],
    relatedTo: ['Odoo Smart Search', 'Prestige Distribution', 'Odoo Module Rhys'],
  },
  'Odoo Smart Search': {
    tags: ['odoo', 'search', 'scraping'],
    relatedTo: ['OmneeFX', 'Odoo Module Rhys', 'Web Scraping'],
  },
  'Prestige Distribution': {
    tags: ['odoo', 'ecommerce'],
    relatedTo: ['OmneeFX', 'AgriConnect', 'EwaTiwa'],
  },
  'Odoo Module Rhys': {
    tags: ['odoo', 'voice'],
    relatedTo: ['OmneeFX', 'Assistant vocal', 'Odoo Smart Search'],
  },
  SwimConnect: {
    tags: ['matching', 'booking'],
    relatedTo: ['Timvio', 'Azɔtɛn'],
  },
  Timvio: {
    tags: ['mobile', 'booking'],
    relatedTo: ['SwimConnect', 'Azɔtɛn', 'DOTO+'],
  },
  'Azɔtɛn': {
    tags: ['marketplace', 'mobile', 'django', 'matching'],
    relatedTo: ['AgriConnect', 'Timvio', 'FOTOCE'],
  },
  'FAMES Bénin': {
    tags: ['media', 'django'],
    relatedTo: ['LAHA Academia', 'WISORIA'],
  },
  'DOTO+': {
    tags: ['health', 'mobile', 'django'],
    relatedTo: ['FOTOCE', 'Timvio'],
  },
  WISORIA: {
    tags: ['education', 'mobile'],
    relatedTo: ['LAHA Academia', 'FAMES Bénin'],
  },
  'LAHA Academia': {
    tags: ['education', 'media'],
    relatedTo: ['WISORIA', 'FAMES Bénin'],
  },
  AgriConnect: {
    tags: ['marketplace', 'ecommerce', 'matching'],
    relatedTo: ['Azɔtɛn', 'Prestige Distribution', 'Royal Computer'],
  },
  'Connect Me': {
    tags: ['static'],
    relatedTo: ['Bethel Sarl'],
  },
  'Royal Computer': {
    tags: ['ecommerce', 'django'],
    relatedTo: ['Elek-Store', 'X SHOP', 'AgriConnect'],
  },
  EwaTiwa: {
    tags: ['ecommerce'],
    relatedTo: ['Prestige Distribution', 'X SHOP', 'Royal Computer'],
  },
  'Bethel Sarl': {
    tags: ['static'],
    relatedTo: ['Connect Me'],
  },
  AnimeVerse: {
    tags: ['catalogue'],
    relatedTo: [],
  },
  'X SHOP': {
    tags: ['ecommerce', 'catalogue'],
    relatedTo: ['Elek-Store', 'Royal Computer', 'EwaTiwa'],
  },
  'Elek-Store': {
    tags: ['ecommerce', 'django', 'nlp'],
    relatedTo: ['Royal Computer', 'X SHOP', 'Système de chatbot'],
  },
  'Traduction Français → Fong': {
    tags: ['nlp'],
    relatedTo: ['Collecte de données linguistiques en Fongbe', 'Système de chatbot'],
  },
  'Collecte de données linguistiques en Fongbe': {
    tags: ['nlp'],
    relatedTo: ['Traduction Français → Fong'],
  },
  'Système de chatbot': {
    tags: ['nlp'],
    relatedTo: ['Elek-Store', 'Assistant vocal', 'Traduction Français → Fong'],
  },
  'Assistant vocal': {
    tags: ['voice', 'nlp'],
    relatedTo: ['Système de chatbot', 'Odoo Module Rhys', 'Application multifonctionnelle'],
  },
  'Application multifonctionnelle': {
    tags: ['voice'],
    relatedTo: ['Assistant vocal'],
  },
  'Web Scraping': {
    tags: ['scraping'],
    relatedTo: ['Odoo Smart Search'],
  },
}

export const projectDeepDive: Record<string, { need: string; build: string }> = {
  FOTOCE: {
    need: 'Couvrir un vrai cycle social visuel (publier, découvrir, interagir, notifier) sur web et mobile, pas seulement un feed de démonstration.',
    build: 'Front web Vue.js, app Expo / React Native, API Django REST, PostgreSQL, WebSockets, cache offline et un studio IA branché sur la création.',
  },
  OmneeFX: {
    need: 'Une plateforme métier trading / finance avec back-office, parcours utilisateurs et formation intégrée.',
    build: 'Cœur Odoo (modules Python / XML / JS), e-learning, maintenance évolutive, plus un site public pour présenter l’offre.',
  },
  'Odoo Smart Search': {
    need: 'Trouver un module Odoo Apps par intention (« facturation multi-sociétés ») plutôt que par mot-clé exact.',
    build: 'Scraping du catalogue, embeddings (sentence-transformers), API FastAPI / SQLAlchemy, UI React, filtres métier et traduction FR/EN.',
  },
  'Prestige Distribution': {
    need: 'Vendre en ligne tout en restant aligné avec la gestion interne Odoo (catalogue, commandes).',
    build: 'WooCommerce / WordPress, personnalisations WP Code, liaison métier Odoo, parcours catalogue responsive.',
  },
  'Odoo Module Rhys': {
    need: 'Un add-on installable, pas un patch isolé : assistant vocal et snippet Website Builder.',
    build: 'Module Odoo 13 (manifest, modèles Python, vues XML, ACL) branché sur le Website Builder.',
  },
  SwimConnect: {
    need: 'Mettre en relation maîtres-nageurs et piscines, avec des espaces et des activités distincts.',
    build: 'Plateforme web responsive, parcours d’inscription / matching, gestion des structures et des activités.',
  },
  Timvio: {
    need: 'Prendre rendez-vous depuis le mobile, pour des salons / établissements, avec paiement.',
    build: 'App React Native, API Express / MongoDB, JWT, créneaux / profils, encaissement Stripe.',
  },
  'Azɔtɛn': {
    need: 'Publier une mission, candidater, échanger, et sécuriser le paiement jusqu’à la livraison.',
    build: 'App Expo / React Native, API Django REST, escrow, messagerie, back-office Next.js.',
  },
  'FAMES Bénin': {
    need: 'Un site média pour publier et lire des articles, administrable sans toucher au code.',
    build: 'Frontend React / Tailwind, API Django REST, panel d’administration des contenus.',
  },
  'DOTO+': {
    need: 'Un écosystème santé : patient, professionnels, accès d’urgence, dossiers et consentement.',
    build: 'Apps Expo (patient + hub mobile), DotoHub, DotoCard QR, API Django / PostgreSQL / JWT / RBAC, admin, mode urgence offline.',
  },
  WISORIA: {
    need: 'Suivre des cours, valider par quiz et obtenir une certification depuis le mobile.',
    build: 'Application Expo / TypeScript : parcours, quiz, certification et suivi de progression.',
  },
  'LAHA Academia': {
    need: 'Diffuser cours et ouvrages auprès des apprenants, dans un catalogue lisible.',
    build: 'Frontend dédié pour le catalogue pédagogique et la consultation des contenus.',
  },
  AgriConnect: {
    need: 'Relier producteurs et consommateurs : catalogue, commande, et un suivi par rôle.',
    build: 'React / Vite / Tailwind, API Python, espaces producteur / consommateur / admin, panier et commandes.',
  },
  'Connect Me': {
    need: 'Partager un contact WhatsApp sans application ni friction.',
    build: 'Page HTML/CSS/JS, génération de lien, hébergement GitHub Pages.',
  },
  'Royal Computer': {
    need: 'Vendre du matériel informatique en ligne, avec comptes et un peu de contenu autour des produits.',
    build: 'Boutique Django : catalogue, panier, authentification, blog.',
  },
  EwaTiwa: {
    need: 'Mettre en avant une gamme cosmétique et un parcours d’achat clair.',
    build: 'Site e-commerce public, catalogue et fiche produit, identité de marque.',
  },
  'Bethel Sarl': {
    need: 'Présenter une entreprise d’impression et donner un point de contact.',
    build: 'Site vitrine HTML/CSS responsive, déployé sur GitHub Pages.',
  },
  AnimeVerse: {
    need: 'Explorer un catalogue d’animes : recherche, filtres, fiche titre.',
    build: 'Front Bootstrap / SCSS / jQuery, pages de liste et de détail.',
  },
  'X SHOP': {
    need: 'Un frontend marketplace (catalogue, panier, achat) encore en construction.',
    build: 'Interface e-commerce dédiée, parcours client côté front.',
  },
  'Elek-Store': {
    need: 'Une API boutique complète, y compris un assistant conversationnel.',
    build: 'Django REST : auth, produits, panier, commandes, module chatbot.',
  },
  'Traduction Français → Fong': {
    need: 'Explorer la traduction automatique vers le fon à partir de données linguistiques réelles.',
    build: 'Préparation de paires FR/Fon, expérimentation de modèle, attention aux diacritiques.',
  },
  'Collecte de données linguistiques en Fongbe': {
    need: 'Constituer un corpus propre pour alimenter des modèles de TAL en fongbe.',
    build: 'Collecte, nettoyage, normalisation et formatage pour l’entraînement.',
  },
  'Système de chatbot': {
    need: 'Comprendre une intention et répondre, comme base d’assistant métier (ex. boutique).',
    build: 'Prototype NLP / règles, flux conversationnel, réutilisé dans Elek-Store.',
  },
  'Assistant vocal': {
    need: 'Commander à la voix et obtenir une réponse parlée.',
    build: 'Reconnaissance (STT), interprétation, synthèse (TTS) — aussi expérimenté dans le module Rhys.',
  },
  'Application multifonctionnelle': {
    need: 'Un laboratoire pratique (OCR, voix, image, QR) plutôt qu’un produit unique.',
    build: 'Outils Python : extraction de texte, STT/TTS, traitement d’images, QR.',
  },
  'Web Scraping': {
    need: 'Collecter et structurer des données web pour un usage métier.',
    build: 'Requests, BeautifulSoup, parfois navigation automatisée ; réutilisé (Hélice, OSS).',
  },
}
