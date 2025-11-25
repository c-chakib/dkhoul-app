import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, X, Globe, ChevronRight, Star, ChevronDown, ChevronUp,
  MapPin, Calendar, Users, Check, ArrowRight,
  TrendingUp, Shield, Smartphone, Server,
  DollarSign, Briefcase, Layout, Home,
  Activity, Zap, Search, Lock, Database, Cloud,
  UserCheck, Award, Target, Coffee, Info, HelpCircle,
  BarChart3, PieChart, Layers, FileCheck, GraduationCap,
  Calculator, LockKeyhole, Fingerprint, Flag, Globe2,
  ArrowUpRight, Download, Quote, PlayCircle, Wallet, CreditCard
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * ------------------------------------------------------------------
 * SYSTÈME DE DESIGN (TOKENS) - Identité Visuelle "Terracotta Tech"
 * ------------------------------------------------------------------
 */
const TOKENS = {
  colors: {
    primary: '#C2410C',       // Terracotta (Terre cuite)
    primaryLight: '#EA580C',  // Orange Vif
    secondary: '#0F172A',     // Bleu Atlantique Profond
    accent: '#FFF7ED',        // Sable de l'Atlas
    success: '#10B981',       // Vert Menthe
    white: '#FFFFFF',
    gray: '#F8FAFC',
    surface: '#FFFFFF',
    chart: ['#C2410C', '#EA580C', '#F97316', '#FB923C', '#FDBA74']
  },
  shadows: {
    primary: '0 4px 14px 0 rgba(194, 65, 12, 0.39)',
    card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    float: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(194, 65, 12, 0.15)'
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem'
  }
};

/**
 * DONNÉES RICHES & COMPLÈTES
 */
const CONTENT = {
  nav: { home: "Accueil", presentation: "Vision & Porteur", demo: "Plateforme (Démo)", simulator: "Simulateur Hôte", innovation: "Stratégie", technical: "Tech & Infra", financial: "Investissement" },
  
  images: {
    founder: "DSC01825.JPG",
    app_mockup: "resources/platform-mockup.png",
    hero_bg: "resources/hero-bg.jpg",
    tech_stack: "image_d5a9b0.png", // Image de l'architecture technique
    services: {
        luggage: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=800&auto=format&fit=crop",
        coworking: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800&auto=format&fit=crop",
        shower: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", 
        parking: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop",
        event: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
        darija: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        cooking: "https://images.unsplash.com/photo-1590598762265-4b658427445c?q=80&w=800&auto=format&fit=crop",
        pottery: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop",
        photo_tour: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800&auto=format&fit=crop",
        gnaoua: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
        henna: "https://images.unsplash.com/photo-1550620829-256450d47f92?q=80&w=800&auto=format&fit=crop",
        dinner: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
        souk: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop",
        advice: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
        health: "https://images.unsplash.com/photo-1584515933487-779824d29609?q=80&w=800&auto=format&fit=crop",
        babysitting: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=800&auto=format&fit=crop",
        transport: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
        sherpa: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
    }
  },

  hero: { 
    launch: "🚀 MVP Prêt pour T1 2026 • Pilote Rabat",
    title: "Débloquez le Vrai Maroc.", 
    subtitle: "La première marketplace décentralisée connectant les touristes internationaux aux citoyens marocains pour des micro-services authentiques. Pilotée par une expertise locale éprouvée.", 
    search_placeholder: "Que cherchez-vous ? (ex: Bagages, Couscous...)",
    trust_card_1: "Ahmed (Rabat) a gagné 250 DH",
    trust_card_2: "KYC Vérifié & Paiement Sécurisé",
    tabs: { space: "Espace", skills: "Compétences", connect: "Connexion" }
  },

  stats: [
    { val: "80%", label: "Revenus aux Locaux", sub: "vs 20% Moyenne Industrie" },
    { val: "50+", label: "Villes Ciblées", sub: "Décentralisation Totale" },
    { val: "103x", label: "Ratio LTV:CAC", sub: "Rentabilité Exceptionnelle" },
    { val: "1Md", label: "Marché Adressable", sub: "DH (Scénario Optimiste)" }
  ],

  presentation: {
    mission: "Faire du Maroc une destination touristique inclusive, authentique et attractive, où chaque citoyen peut profiter des retombées économiques du tourisme.",
    vision_long: "DKHOUL n'est pas juste une application, c'est une infrastructure économique pour 2030. Nous visons à devenir le standard de confiance pour l'économie collaborative au Maroc et en Afrique du Nord, en formalisant l'informel et en créant de la valeur locale durable.",
    values: [
      { title: "Authenticité", desc: "Expériences réelles, pas de folklore standardisé." },
      { title: "Inclusion", desc: "Tout citoyen avec un talent ou un espace peut participer." },
      { title: "Équité (80/20)", desc: "Nous ne prenons que 20%. Le local garde la majorité." }
    ],
    founder: {
      name: "Chakib Cheikhi",
      role: "Développeur Fullstack & Expert Opérations",
      bio: "Développeur fullstack avec une expérience unique couvrant l'approvisionnement, la gestion IT et la transformation numérique. Fort de 7 ans d'expérience opérationnelle (Achats, Logistique, Tourisme), je pilote des initiatives de digitalisation complexes en alliant savoir-faire métier et expertise technique.",
      experience: [
        { year: "2024-2025", role: "Resp. Entité Référencement & Achats", context: "MADAEF Management", desc: "Pilotage de 15+ appels d'offres multi-sites. Stratégies achats et digitalisation des processus avec la DSI." },
        { year: "2021-2024", role: "Resp. Achats & Logistique", context: "Zephyr Développement", desc: "Supervision de 7 établissements. Mise en place de dashboards KPI et optimisation des flux logistiques (-15% coûts)." },
        { year: "2021", role: "Customer Service Associate", context: "Amazon", desc: "Support client multicanal et respect strict des SLA. Culture de l'excellence opérationnelle." },
        { year: "2019-2020", role: "Commercial Tourisme & Billetterie", context: "Chellah Voyage", desc: "Conception de packages et maîtrise experte d'Amadeus GDS. Négociation hôtels/compagnies aériennes." }
      ],
      education: [
        { year: "2025-2027", role: "Master Génie Informatique & MIAGE", context: "École High Tech / Lyon 1", desc: "Architecture logicielle, Gestion de projet IT." },
        { year: "2025", role: "Fullstack Developer Bootcamp", context: "High Tech / Jobintech", desc: "Formation intensive 960h sur la stack MEAN (Mongo, Express, Angular, Node)." },
        { year: "2016-2018", role: "Master Tourisme & Communication", context: "FLSH Agadir", desc: "Socle académique solide en stratégie touristique et marketing." }
      ]
    }
  },

  services_catalog: {
    space: [
      { id: 1, title: "Stockage Bagages", price: 25, rating: 4.8, image: "luggage", desc: "Ne trainez plus vos valises. Stockage sécurisé chez l'habitant.", icon: "🎒" },
      { id: 2, title: "Coworking Maison", price: 75, rating: 4.9, image: "coworking", desc: "WiFi fibre, calme et thé. Idéal pour digital nomads.", icon: "💻" },
      { id: 3, title: "Douche Express", price: 40, rating: 4.5, image: "shower", desc: "Accès sanitaire propre entre deux transits.", icon: "🚿" },
      { id: 4, title: "Parking Sécurisé", price: 50, rating: 4.7, image: "parking", desc: "Stationnement privé pour votre voiture de location.", icon: "🅿️" },
      { id: 5, title: "Espace Événement", price: 300, rating: 4.8, image: "event", desc: "Toit-terrasse ou salon pour petites réunions.", icon: "🎉" }
    ],
    skills: [
      { id: 6, title: "Cours de Darija", price: 150, rating: 4.9, image: "darija", desc: "Apprenez à négocier et échanger en 2h.", icon: "🗣️" },
      { id: 7, title: "Cuisine Marocaine", price: 250, rating: 5.0, image: "cooking", desc: "Masterclass Tajine : du marché à l'assiette.", icon: "🥘" },
      { id: 8, title: "Atelier Artisanat", price: 200, rating: 4.8, image: "pottery", desc: "Poterie, Zellige ou Tissage avec un artisan.", icon: "🎨" },
      { id: 9, title: "Balade Photo", price: 300, rating: 4.7, image: "photo_tour", desc: "Les spots secrets de la Médina pour Instagram.", icon: "📸" },
      { id: 10, title: "Musique Gnaoua", price: 200, rating: 4.9, image: "gnaoua", desc: "Initiation aux rythmes et instruments locaux.", icon: "🎵" },
      { id: 11, title: "Henné & Beauté", price: 100, rating: 4.8, image: "henna", desc: "Séance de tatouage au henné traditionnel.", icon: "💅" }
    ],
    connect: [
      { id: 12, title: "Dîner Local", price: 200, rating: 5.0, image: "dinner", desc: "La vraie cuisine maison avec une famille.", icon: "🍽️" },
      { id: 13, title: "Guide Souk", price: 100, rating: 4.6, image: "souk", desc: "Shopping authentique au juste prix, sans arnaque.", icon: "🛍️" },
      { id: 14, title: "Conseil Itinéraire", price: 50, rating: 4.8, image: "advice", desc: "30 min autour d'un café pour planifier votre trip.", icon: "💡" },
      { id: 15, title: "Médiation Santé", price: 100, rating: 5.0, image: "health", desc: "Accompagnement pharmacie/médecin pour traduction.", icon: "🏥" },
      { id: 16, title: "Baby-sitting", price: 80, rating: 4.9, image: "babysitting", desc: "Garde d'enfants bilingue pour soirée libre.", icon: "👶" },
      { id: 17, title: "Transport Privé", price: 150, rating: 4.7, image: "transport", desc: "Chauffeur local pour vos déplacements.", icon: "🚗" },
      { id: 18, title: "Travel Sherpa", price: 200, rating: 5.0, image: "sherpa", desc: "Assistance complète pour organiser votre séjour.", icon: "🗺️" }
    ]
  },

  demo: {
    title: "Plateforme (Démo)",
    subtitle: "Découvrez nos services authentiques",
    categories: { space: "Espace", skills: "Compétences", connect: "Connexion" },
    filter_all: "Tous",
    steps: {
        book_now: "Réserver"
    }
  },

  financial: {
    title: "Investissement",
    subtitle: "Opportunité de croissance et rentabilité",
    growth_chart: [
      { year: "A1", rev: 36, label: "36M", height: 10 },
      { year: "A2", rev: 582, label: "582M", height: 25 },
      { year: "A3", rev: 1700, label: "1.7Md", height: 45 },
      { year: "A4", rev: 5900, label: "5.9Md", height: 70 },
      { year: "A5", rev: 16300, label: "16.3Md", height: 100 }
    ],
    seed_allocation: [
      { 
        label: "Technologie & Dév", val: 37, color: "bg-blue-500", 
        desc: "Développement App Mobile (React Native), Backend (Node.js), Sécurité (Audit), Infra Cloud (AWS)." 
      },
      { 
        label: "Équipe & Salaires", val: 24, color: "bg-purple-500", 
        desc: "Recrutements clés : CTO (Technique), COO (Opérations), Responsable Support Client." 
      },
      { 
        label: "Marketing & Acq.", val: 20, color: "bg-green-500", 
        desc: "Campagnes digitales (Ads), Partenariats influenceurs, Lancement terrain (Flyering)." 
      },
      { 
        label: "Ops & Juridique", val: 13, color: "bg-orange-500", 
        desc: "Bureaux, Création société, Frais juridiques, Assurance responsabilité civile." 
      },
      { 
        label: "Réserve", val: 6, color: "bg-slate-500", 
        desc: "Marge de sécurité pour imprévus et opportunités." 
      }
    ],
    phases: [
      { 
        phase: "Phase 1: MVP & Lancement (Mois 1-6)", 
        action: "Fondation Technique & Pilote", 
        cost: "600 000 DH", 
        desc: "Frais principaux: Développement Web/Mobile (300K), Salaires Core Team (180K), Marketing de lancement Rabat (70K), Infra AWS & Admin (50K)."
      },
      { 
        phase: "Phase 2: Croissance & Traction (Mois 6-12)", 
        action: "Acquisition & Optimisation", 
        cost: "500 000 DH", 
        desc: "Frais principaux: Campagnes Marketing Digital & Influence (200K), Recrutement Support & Ops (150K), Itérations Produit v2 (100K), Expansion Marrakech (50K)."
      },
      { 
        phase: "Phase 3: Pré-Scale & Rentabilité (Mois 12-18)", 
        action: "Scale & Préparation Série A", 
        cost: "400 000 DH", 
        desc: "Frais principaux: Renforcement Équipe Tech (150K), Marketing National (100K), Optimisation Infra & Sécurité (50K), Réserve Stratégique (100K)."
      }
    ],
    pnl_table: [
      { item: "Revenus", y1: "36M", y2: "582M", y3: "1.7Md", y4: "5.9Md", y5: "16.3Md" },
      { item: "Coûts Directs", y1: "-9M", y2: "-62M", y3: "-183M", y4: "-840M", y5: "-2.3Md" },
      { item: "Marge Brute", y1: "27M", y2: "520M", y3: "1.5Md", y4: "5.1Md", y5: "14.0Md" },
      { item: "Dépenses Ops", y1: "-1.7M", y2: "-3.3M", y3: "-7.0M", y4: "-9.2M", y5: "-11.7M" },
      { item: "EBITDA", y1: "25.3M", y2: "516M", y3: "1.5Md", y4: "5.1Md", y5: "14.0Md" }
    ],
    invest_title: "Pourquoi Investir Maintenant ?",
    invest_text: "Une opportunité unique de participer à la digitalisation du tourisme marocain avec un modèle éprouvé et une équipe experte.",
    download_btn: "Télécharger le Deck"
  },

  technical: {
    glossary: [
      { term: "MEAN Stack", def: "Notre moteur technologique. MongoDB (Mémoire), Express (Serveur), Angular (Interface), Node.js (Cerveau). C'est le standard moderne pour les applications web rapides et évolutives." },
      { term: "API REST", def: "Le langage universel qui permet à notre application mobile de 'parler' au serveur pour réserver, payer ou chercher un service." },
      { term: "JWT (Sécurité)", def: "Le passeport numérique de l'utilisateur. Une fois connecté, cette clé cryptée prouve son identité à chaque action sans avoir à renvoyer le mot de passe à chaque clic." },
      { term: "CI/CD (Automatisation)", def: "Un robot qui teste et met à jour l'application automatiquement à chaque modification du code par les développeurs. Zéro bug en production." },
      { term: "Docker (Conteneurs)", def: "Une boîte virtuelle qui contient tout ce dont l'application a besoin. Elle garantit que l'app fonctionne exactement pareil sur l'ordi du développeur et sur le serveur cloud." },
      { term: "AWS (Cloud)", def: "L'infrastructure d'Amazon qui héberge nos serveurs. Elle nous permet de grandir (scaler) de 100 à 1 million d'utilisateurs automatiquement." }
    ]
  },

  innovation: {
    strategy_phases: [
      { title: "Phase 1: MVP & Validation (T4 2025 - T2 2026)", icon: Flag, desc: "Lancement Pilote à Rabat. Objectif : 500 hôtes, 12K réservations. Preuve de concept et ajustement du produit." },
      { title: "Phase 2: Expansion Régionale (T3 2026 - T4 2027)", icon: MapPin, desc: "Ouverture 5 villes majeures (Casa, Marrakech, Fès, Agadir, Tanger). Levée Série A. 3,000 hôtes." },
      { title: "Phase 3: Couverture Nationale (2028-2029)", icon: Layers, desc: "Déploiement dans 25 villes secondaires. Rentabilité EBITDA atteinte. Préparation infrastructure massive." },
      { title: "Phase 4: Mondial 2030 & MENA (2030+)", icon: Globe2, desc: "Capacité maximale pour les 5M de visiteurs du Mondial. Expansion internationale (Tunisie, Égypte)." }
    ],
    comparison: [
      { feature: "Focus Micro-Services", dkhoul: true, airbnb: false, gyg: false, booking: false },
      { feature: "Stockage Bagages", dkhoul: true, airbnb: false, gyg: false, booking: false },
      { feature: "Connexion Locale Directe", dkhoul: true, airbnb: true, gyg: false, booking: false },
      { feature: "Commission < 25%", dkhoul: true, airbnb: false, gyg: false, booking: false },
      { feature: "Support Local (Darija)", dkhoul: true, airbnb: false, gyg: false, booking: false }
    ]
  },

  security: {
    features: [
      { title: "Vérification KYC", desc: "Identité vérifiée via API biométrique (CIN/Passeport) pour chaque hôte.", icon: UserCheck },
      { title: "Paiement Séquestre", desc: "L'argent est bloqué sur un compte tiers jusqu'à la fin de la prestation.", icon: LockKeyhole },
      { title: "Protection Données", desc: "Conformité CNDP (Loi 09-08) et GDPR pour les touristes européens.", icon: Fingerprint },
      { title: "Infrastructure AWS", desc: "WAF (Pare-feu), Chiffrement TLS et sauvegardes automatiques.", icon: Shield }
    ]
  },

  footer: {
    desc: "Révolutionner le tourisme marocain par la technologie et l'équité. Une plateforme pensée par des locaux, pour le monde.",
    quick_links: "Liens Rapides",
    about: "À propos",
    tech: "Technique",
    invest: "Investir",
    contact_header: "Contact",
    available: "Disponible pour Investissement",
    rights: "Tous droits réservés."
  }
};

/**
 * COMPOSANTS UI (DESIGN SYSTEM)
 */
const StyleInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800&display=swap');
    :root { --font-header: 'Playfair Display', serif; --font-body: 'Inter', sans-serif; }
    body { font-family: var(--font-body); color: ${TOKENS.colors.secondary}; background-color: ${TOKENS.colors.accent}; }
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-header); }
    .glass-panel { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5); }
    .gradient-text { background: linear-gradient(135deg, #C2410C, #EA580C); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .chart-bar { transition: height 1s ease-out; }
    .founder-img { object-fit: cover; object-position: center; }
    .service-img { transition: transform 0.5s ease; }
    .service-card:hover .service-img { transform: scale(1.05); }
  `}</style>
);

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-[2px] active:translate-y-0 flex items-center justify-center gap-2 shadow-md";
  const customStyles = variant === 'primary' ? { background: `linear-gradient(135deg, ${TOKENS.colors.primary}, ${TOKENS.colors.primaryLight})`, color: 'white' } : 
                       variant === 'secondary' ? { background: 'white', color: TOKENS.colors.primary, border: `2px solid ${TOKENS.colors.primary}` } : {};
  return <button onClick={onClick} className={`${baseStyle} ${className}`} style={customStyles}>{children}</button>;
};

const Section = ({ title, subtitle, bg = "white", children }) => (
  <section className={`py-20 px-4 md:px-8 ${bg === 'sand' ? 'bg-[#FFF7ED]' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">{title}</h2>
        {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">{subtitle}</p>}
        <div className="w-24 h-1 bg-[#C2410C] mx-auto rounded-full"></div>
      </div>
      {children}
    </div>
  </section>
);

const Card = ({ children, className = '', hover = true }) => (
  <div className={`bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 ${hover ? 'hover:border-[#C2410C] hover:shadow-xl' : ''} ${className}`} style={{ boxShadow: TOKENS.shadows.card }}>{children}</div>
);

/**
 * VUES DE L'APPLICATION
 */

// 1. ACCUEIL
const HomeView = ({ setView }) => (
  <>
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-[#0F172A]">
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-24 z-10">
        <div className="inline-block w-fit bg-[#C2410C]/20 text-[#C2410C] px-4 py-1 rounded-full text-sm font-semibold border border-[#C2410C]/30 mb-6 animate-pulse">{CONTENT.hero.launch}</div>
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-serif">{CONTENT.hero.title}</h1>
        <p className="text-xl text-slate-300 font-sans mb-12 max-w-lg leading-relaxed">{CONTENT.hero.subtitle}</p>
        <div className="glass-panel p-3 rounded-2xl shadow-2xl max-w-md">
          <div className="flex gap-2">
            <div className="flex-1 bg-white rounded-xl flex items-center px-4">
              <MapPin size={18} className="text-slate-400 mr-2" />
              <input type="text" placeholder={CONTENT.hero.search_placeholder} className="w-full py-3 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm" />
            </div>
            <Button onClick={() => setView('demo')} className="!rounded-xl !px-6"><Search size={20} /></Button>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
            <Button onClick={() => setView('simulator')}>Simuler mes gains (Hôte)</Button>
            <Button variant="secondary" onClick={() => setView('financial')}>Espace Investisseur</Button>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-auto bg-slate-800 overflow-hidden">
        {/* IMAGE DE FOND HERO (Placeholder - à remplacer) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
        
        {/* MOCKUP */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[280px] h-[580px] bg-black rounded-[40px] border-8 border-slate-900 shadow-2xl transform rotate-[-6deg] overflow-hidden hidden lg:block opacity-90 hover:opacity-100 transition-opacity hover:rotate-0 duration-500">
                <div className="w-full h-full bg-white overflow-y-auto no-scrollbar">
                    <div className="bg-[#C2410C] p-6 text-white pt-12">
                        <div className="text-xl font-bold">DKHOUL</div>
                        <div className="text-sm opacity-80">Bienvenue, Sarah</div>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="bg-slate-100 p-4 rounded-xl">
                            <div className="font-bold text-[#0F172A]">Stockage Bagages</div>
                            <div className="text-xs text-slate-500">Rabat Ville - 20 DH</div>
                        </div>
                        <div className="bg-slate-100 p-4 rounded-xl">
                            <div className="font-bold text-[#0F172A]">Dîner Local</div>
                            <div className="text-xs text-slate-500">Salé - 200 DH</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        {/* Trust Cards */}
        <div className="absolute top-1/3 right-10 glass-panel p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce duration-[3000ms] max-w-xs border-l-4 border-green-500">
          <div className="bg-green-100 p-2 rounded-full text-green-600"><DollarSign size={20}/></div>
          <div>
            <div className="text-sm font-bold text-slate-800">{CONTENT.hero.trust_card_1}</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Revenu Direct</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Statistiques Clés */}
    <div className="bg-white py-16 border-b border-slate-100 relative z-20 -mt-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {CONTENT.stats.map((stat, idx) => (
          <div key={idx} className="text-center space-y-2 group hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-[#0F172A] font-serif group-hover:text-[#C2410C] transition-colors">{stat.val}</div>
            <div className="text-[#C2410C] font-bold text-sm uppercase tracking-wider">{stat.label}</div>
            <div className="text-slate-400 text-xs bg-slate-50 inline-block px-2 py-1 rounded">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </>
);

// 2. SIMULATEUR HÔTE
const HostSimulatorView = () => {
    const [serviceType, setServiceType] = useState('space');
    const [volume, setVolume] = useState(5);
    const [customPrice, setCustomPrice] = useState(50);
    
    const defaults = useMemo(() => ({ space: 50, skills: 200, connect: 100 }), []);

    useEffect(() => {
        setCustomPrice(defaults[serviceType]);
    }, [serviceType, defaults]);
    
    const earnings = Math.round(volume * customPrice * 0.8);

    return (
        <div className="pt-24 bg-[#FFF7ED] min-h-screen">
            <Section title="Simulateur de Revenus Hôte" subtitle="Montrez aux locaux combien ils peuvent gagner en rejoignant l'économie formelle" bg="sand">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-8 space-y-8">
                        <div>
                            <label className="block font-bold text-[#0F172A] mb-2">Quel service proposez-vous ?</label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    {id: 'space', label: 'Espace', icon: '🏠'},
                                    {id: 'skills', label: 'Talent', icon: '🎨'},
                                    {id: 'connect', label: 'Temps', icon: '🤝'}
                                ].map(type => (
                                    <button 
                                        key={type.id}
                                        onClick={() => setServiceType(type.id)}
                                        className={`p-3 rounded-xl border-2 transition-all ${serviceType === type.id ? 'border-[#C2410C] bg-orange-50 text-[#C2410C]' : 'border-slate-100 text-slate-500'}`}
                                    >
                                        <div className="text-2xl mb-1">{type.icon}</div>
                                        <div className="text-xs font-bold">{type.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold text-slate-700">Prix moyen par réservation (DH)</label>
                                <span className="font-bold text-[#0F172A] text-lg">{customPrice} DH</span>
                            </div>
                            <input 
                                type="range" min="20" max="1000" step="10" 
                                value={customPrice} 
                                onChange={(e) => setCustomPrice(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C2410C]"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>20 DH</span>
                                <span>1000 DH</span>
                            </div>
                        </div>

                        <div>
                            <label className="block font-bold text-[#0F172A] mb-2">Volume mensuel estimé</label>
                            <input 
                                type="range" min="1" max="30" value={volume} 
                                onChange={(e) => setVolume(e.target.value)}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#C2410C]"
                            />
                            <div className="text-right text-[#C2410C] font-bold mt-2">{volume} réservations / mois</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#0F172A] text-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <div className="text-slate-400 text-sm uppercase tracking-widest mb-2">Vos Gains Potentiels</div>
                            <div className="text-6xl font-bold text-[#C2410C] font-serif mb-2">{earnings} <span className="text-2xl">DH</span></div>
                            <div className="text-slate-300 text-sm">par mois (après commission 20%)</div>
                            <div className="mt-8 p-4 bg-white/10 rounded-xl text-left text-xs text-slate-300">
                                <div className="flex gap-2 mb-2"><Check size={14} className="text-green-400"/> Paiement garanti (Séquestre)</div>
                                <div className="flex gap-2"><Check size={14} className="text-green-400"/> Assurance incluse</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

// 3. PRÉSENTATION (AVEC CV SÉPARÉ)
const PresentationView = () => (
  <div className="pt-24 bg-[#FFF7ED] min-h-screen">
    <Section title="Vision & Valeurs" bg="sand">
      <p className="text-2xl font-serif text-center max-w-4xl mx-auto text-[#0F172A] leading-relaxed mb-8 italic">
        "{CONTENT.presentation.mission}"
      </p>
      <div className="text-center max-w-3xl mx-auto mb-12 text-slate-600 leading-relaxed border-l-4 border-[#C2410C] pl-6 bg-white p-4 rounded-r-xl">
          {CONTENT.presentation.vision_long}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {CONTENT.presentation.values.map((val, i) => (
          <Card key={i} className="text-center hover:bg-orange-50/50">
            <div className="w-12 h-12 bg-[#C2410C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C2410C]"><Star size={24}/></div>
            <h3 className="font-bold text-lg mb-2 text-[#0F172A]">{val.title}</h3>
            <p className="text-sm text-slate-600">{val.desc}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section title="Le Porteur du Projet" bg="white">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Sidebar Profil */}
        <div className="w-full md:w-1/3 bg-[#0F172A] p-10 text-white flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          {/* PHOTO DU FONDATEUR */}
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-6 border-4 border-[#C2410C] shadow-2xl relative z-10 overflow-hidden">
             <img 
               src={CONTENT.images.founder} 
               alt={CONTENT.presentation.founder.name} 
               className="w-full h-full object-cover founder-img"
               onError={(e) => {e.target.onerror = null; e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
             />
             <div className="w-full h-full bg-[#0F172A] hidden items-center justify-center text-4xl font-serif">CC</div>
          </div>

          <h3 className="text-3xl font-bold font-serif relative z-10">{CONTENT.presentation.founder.name}</h3>
          <div className="text-[#C2410C] font-bold text-sm uppercase mt-2 tracking-widest relative z-10">{CONTENT.presentation.founder.role}</div>
          <p className="text-slate-300 text-sm mt-6 italic relative z-10">"{CONTENT.presentation.founder.bio}"</p>
        </div>
        
        {/* Timeline Expérience & Formation */}
        <div className="w-full md:w-2/3 p-10 bg-white relative">
          <div className="grid md:grid-cols-1 gap-10">
            
            {/* BLOC 1 : PARCOURS PROFESSIONNEL */}
            <div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Briefcase className="text-[#C2410C]" size={24}/> Parcours Professionnel
              </h4>
              <div className="space-y-6 border-l-2 border-slate-100 pl-6 ml-2">
                {CONTENT.presentation.founder.experience.map((rec, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#C2410C] group-hover:bg-[#C2410C] transition-colors"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-[#C2410C] text-sm">{rec.year}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rec.context}</span>
                    </div>
                    <div className="font-bold text-[#0F172A] text-md mb-1">{rec.role}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{rec.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOC 2 : FORMATION ACADÉMIQUE */}
            <div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <GraduationCap className="text-[#C2410C]" size={24}/> Formation Académique
              </h4>
              <div className="space-y-6 border-l-2 border-slate-100 pl-6 ml-2">
                {CONTENT.presentation.founder.education.map((edu, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#0F172A] group-hover:bg-[#0F172A] transition-colors"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-[#0F172A] text-sm">{edu.year}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{edu.context}</span>
                    </div>
                    <div className="font-bold text-[#0F172A] text-md mb-1">{edu.role}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{edu.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  </div>
);

// 4. TECH & SÉCURITÉ (NOUVELLE SECTION TRUST)
const TechnicalView = () => (
  <div className="pt-24 bg-[#FFF7ED] min-h-screen">
    <Section title="Confiance & Technologie" subtitle="Une architecture conçue pour la sécurité et la scalabilité" bg="sand">
        
        {/* ARCHITECTURE DIAGRAM (Visual Placeholder) */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8 font-serif flex items-center justify-center gap-2"><Cloud/> Architecture MEAN Stack</h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                <img 
                    src={CONTENT.images.tech_stack} 
                    alt="Architecture Technique DKHOUL" 
                    className="w-full h-auto max-h-[500px] object-contain mx-auto"
                    onError={(e) => {e.target.style.display='none';}}
                />
                {/* Fallback text if image fails */}
                <div className="grid md:grid-cols-4 gap-4 text-center mt-6">
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div className="font-bold text-[#C2410C] mb-1">Angular</div>
                        <div className="text-xs text-slate-400">Frontend</div>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div className="font-bold text-[#C2410C] mb-1">Node.js</div>
                        <div className="text-xs text-slate-400">Backend API</div>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div className="font-bold text-[#C2410C] mb-1">MongoDB</div>
                        <div className="text-xs text-slate-400">Database</div>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div className="font-bold text-[#C2410C] mb-1">AWS</div>
                        <div className="text-xs text-slate-400">Cloud Infra</div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION TRUST & SAFETY (CRITIQUE POUR INVESTISSEURS) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            {CONTENT.security.features.map((feat, i) => (
                <Card key={i} className="flex items-start gap-4 hover:border-[#C2410C]">
                    <div className="p-3 bg-orange-50 rounded-xl text-[#C2410C]"><feat.icon size={24}/></div>
                    <div>
                        <h4 className="font-bold text-[#0F172A] text-lg mb-1">{feat.title}</h4>
                        <p className="text-slate-600 text-sm">{feat.desc}</p>
                    </div>
                </Card>
            ))}
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid gap-4">
            {CONTENT.technical.glossary.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 font-bold text-[#0F172A] mb-2">
                    <Info size={20} className="text-[#C2410C]"/> {item.term}
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed pl-8">
                    {item.def}
                  </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  </div>
);

// 5. FINANCE & INVESTISSEMENT (DATA-VIZ)
const FinancialView = () => (
  <div className="pt-24 bg-[#FFF7ED] min-h-screen">
    <Section title="Investissement & Rentabilité" subtitle="Un modèle scalable avec une rentabilité rapide (Mois 7)" bg="sand">
      
      {/* GRAPHIQUE DE CROISSANCE (RECHARTS) */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 text-center text-[#0F172A] font-serif">Croissance du Chiffre d'Affaires (5 Ans)</h3>
        <div className="h-80 w-full max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CONTENT.financial.growth_chart.map(d => ({ name: d.year, value: d.rev, label: d.label }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}M`} />
              <Tooltip 
                formatter={(value) => [`${value}M`, 'Chiffre d\'Affaires']}
                labelFormatter={(label) => `Année ${label}`}
              />
              <Bar dataKey="value" fill="#C2410C" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TABLEAU P&L DÉTAILLÉ (RESTAURÉ) */}
      <div className="mb-20 overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-100">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-50">
                    <th className="p-4 text-[#0F172A] font-bold">Poste</th>
                    <th className="p-4 text-[#0F172A] font-bold">Année 1</th>
                    <th className="p-4 text-[#0F172A] font-bold">Année 2</th>
                    <th className="p-4 text-[#0F172A] font-bold">Année 3</th>
                    <th className="p-4 text-[#0F172A] font-bold">Année 4</th>
                    <th className="p-4 text-[#0F172A] font-bold">Année 5</th>
                </tr>
            </thead>
            <tbody>
                {CONTENT.financial.pnl_table.map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-orange-50/30">
                        <td className="p-4 font-medium text-slate-700">{row.item}</td>
                        <td className="p-4 text-slate-600">{row.y1}</td>
                        <td className="p-4 text-slate-600">{row.y2}</td>
                        <td className="p-4 font-bold text-[#C2410C]">{row.y3}</td>
                        <td className="p-4 text-slate-600">{row.y4}</td>
                        <td className="p-4 font-bold text-[#C2410C]">{row.y5}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      
      {/* NEW SECTION: PHASING OF EXPENSES */}
       <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-[#0F172A] font-serif">Détail des Dépenses par Phase (Investissement Seed)</h3>
           <div className="grid gap-6 max-w-4xl mx-auto">
               {CONTENT.financial.phases.map((phase, i) => (
                   <Card key={i} className="relative overflow-hidden border-l-4 border-l-[#C2410C]">
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                           <div>
                               <div className="text-[#C2410C] font-bold text-sm uppercase tracking-widest mb-1">{phase.phase}</div>
                               <h4 className="text-xl font-bold text-[#0F172A]">{phase.action}</h4>
                               <p className="text-slate-600 text-sm mt-2">{phase.desc}</p>
                           </div>
                           <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100 min-w-[120px] text-center">
                               <div className="text-xs text-slate-400 uppercase mb-1">Budget</div>
                               <div className="text-xl font-bold text-[#0F172A]">{phase.cost}</div>
                           </div>
                       </div>
                   </Card>
               ))}
           </div>
       </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* UTILISATION DES FONDS */}
        <Card className="border-t-4 border-t-[#C2410C]">
          <h3 className="text-2xl font-bold mb-6 text-[#0F172A] font-serif flex items-center gap-2"><PieChart className="text-[#C2410C]"/> Allocation Seed (1.5M DH)</h3>
          <div className="space-y-6">
            {CONTENT.financial.seed_allocation.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-1 text-[#0F172A]">
                  <span>{item.label}</span>
                  <span>{item.val}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                </div>
                <div className="text-xs text-slate-500 mt-1 italic">{item.desc}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* KPI */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#0F172A] p-6 rounded-2xl text-white flex flex-col justify-center text-center">
            <div className="text-sm text-slate-400 uppercase tracking-widest mb-2">Rentabilité</div>
            <div className="text-4xl font-bold text-[#C2410C] font-serif">Mois 7</div>
            <div className="text-xs text-slate-400 mt-2">Cash-flow positif</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-center text-center shadow-lg">
            <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">LTV : CAC</div>
            <div className="text-4xl font-bold text-[#0F172A] font-serif">103x</div>
            <div className="text-xs text-green-600 mt-2 font-bold">Exceptionnel</div>
          </div>
          <div className="col-span-2 bg-gradient-to-r from-[#C2410C] to-[#EA580C] p-6 rounded-2xl text-white text-center shadow-lg">
            <div className="text-sm text-white/80 uppercase tracking-widest mb-2">Retour Investisseur (Sortie)</div>
            <div className="text-5xl font-bold font-serif">220x</div>
            <div className="text-sm text-white/90 mt-2">Multiple sur capital investi (MOIC) à 5 ans</div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

// 6. DÉMO (CATALOGUE SERVICES AVEC IMAGES)
const DemoView = () => {
  const [activeTab, setActiveTab] = useState('space');
  const services = CONTENT.services_catalog[activeTab];

  return (
    <div className="pt-24 bg-[#FFF7ED] min-h-screen">
      <Section title="Nos Services" subtitle="3 Univers, 18 Services Exclusifs" bg="sand">
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['space', 'skills', 'connect'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-[#0F172A] text-white shadow-lg scale-105' : 'bg-white text-slate-500 hover:bg-slate-100'}`}
            >
              {CONTENT.demo.categories[tab]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <Card key={s.id} className="group cursor-pointer hover:-translate-y-2 h-full flex flex-col service-card overflow-hidden !p-0 border-0 shadow-md">
              {/* IMAGE DU SERVICE (PLEINE LARGEUR) */}
              <div className="relative h-56 overflow-hidden">
                  <img 
                    src={CONTENT.images.services[s.image]} 
                    alt={s.title} 
                    className="w-full h-full object-cover service-img transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {e.target.src='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop'}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">{CONTENT.hero.tabs[activeTab].split(' ')[1]}</div>
                      <h4 className="font-bold text-xl font-serif leading-tight">{s.title}</h4>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#C2410C] font-bold text-sm shadow-lg">
                    {s.price} DH
                  </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                  <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{s.desc}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                      <Star size={14} className="text-yellow-400 fill-yellow-400"/> {s.rating}
                    </div>
                    <div className="text-xs text-[#0F172A] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:text-[#C2410C] transition-colors">
                        {CONTENT.demo.steps.book_now} <ArrowRight size={14}/>
                    </div>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

// 7. INNOVATION (STRATÉGIE RESTAURÉE)
const InnovationView = () => (
  <div className="pt-24 bg-[#FFF7ED] min-h-screen">
    <Section title="Stratégie & Innovation" subtitle="Comment DKHOUL va transformer le marché en 4 étapes" bg="sand">
      
      <div className="max-w-4xl mx-auto mb-20 border-l-2 border-[#C2410C] pl-8 ml-4 md:ml-auto space-y-12">
        {CONTENT.innovation.strategy_phases.map((phase, i) => (
            <div key={i} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#C2410C] border-4 border-white shadow-sm"></div>
                <div className="flex items-center gap-3 mb-2">
                    <phase.icon size={20} className="text-[#C2410C]" />
                    <h4 className="text-xl font-bold text-[#0F172A]">{phase.title}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
            </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <Card className="border-t-4 border-t-[#C2410C]">
          <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-serif">Premier Entrant</h3>
          <p className="text-slate-600 text-sm">Aucune marketplace dédiée aux micro-services n'existe au Maroc. Fenêtre de 12 mois avant la concurrence.</p>
        </Card>
        <Card className="border-t-4 border-t-[#C2410C]">
          <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-serif">Services Exclusifs</h3>
          <p className="text-slate-600 text-sm">Stockage bagages, Coworking chez l'habitant, Cours de Darija... Ces services n'existent PAS sur Airbnb.</p>
        </Card>
        <Card className="border-t-4 border-t-[#C2410C]">
          <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-serif">Modèle Économique</h3>
          <p className="text-slate-600 text-sm">20% de commission (vs 30-50%). Plus de revenus pour les locaux = Fidélité absolue.</p>
        </Card>
      </div>
    </Section>
  </div>
);

/**
 * COMPOSANT PRINCIPAL (ROUTAGE)
 */
const App = () => {
  const [view, setView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !'); // Placeholder
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }, [view]);

  return (
    <div className="font-sans text-slate-800 antialiased selection:bg-orange-200 selection:text-orange-900 bg-zellige min-h-screen">
      <StyleInjector />
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-[#0F172A] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#C2410C] to-[#EA580C] rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:rotate-3 transition-transform">D</div>
            <span className={`font-serif font-bold text-2xl tracking-tight ${scrolled ? 'text-[#0F172A]' : 'text-white'}`}>DKHOUL</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(CONTENT.nav).map(([key, label]) => (
              <button 
                key={key} 
                onClick={() => setView(key)} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${view === key ? 'bg-[#C2410C] text-white shadow-md' : scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:text-white'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <button className={`lg:hidden ${scrolled ? 'text-[#0F172A]' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X/> : <Menu/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-2 animate-fade-in">
            {Object.entries(CONTENT.nav).map(([key, label]) => (
              <button 
                key={key} 
                onClick={() => setView(key)}
                className={`text-left px-4 py-3 rounded-xl font-medium ${view === key ? 'bg-orange-50 text-[#C2410C]' : 'text-slate-600'}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
      
      <main className="min-h-screen">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'presentation' && <PresentationView />}
        {view === 'demo' && <DemoView />}
        {view === 'simulator' && <HostSimulatorView />}
        {view === 'financial' && <FinancialView />}
        {view === 'technical' && <TechnicalView />}
        {view === 'innovation' && <InnovationView />}
      </main>

      {/* FORMULAIRE DE CONTACT */}
      <section className="py-20 bg-gradient-to-br from-[#FFF7ED] to-[#FDBA74]/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4 font-serif">Contactez-Nous</h2>
            <p className="text-slate-600">Intéressé par DKHOUL ? Envoyez-nous un message pour en savoir plus.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleFormChange} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C2410C] focus:border-transparent transition-all" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleFormChange} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C2410C] focus:border-transparent transition-all" 
                  required 
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleFormChange} 
                rows="5" 
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C2410C] focus:border-transparent transition-all resize-none" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#C2410C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#EA580C] transition-colors shadow-lg hover:shadow-xl"
            >
              Envoyer le Message
            </button>
          </form>
        </div>
      </section>

      {/* ÉLÉMENTS MAROCAINS DÉCORATIFS */}
      <div className="fixed top-20 right-10 opacity-10 pointer-events-none">
        <div className="text-6xl text-[#C2410C] animate-spin" style={{ animationDuration: '20s' }}>
          ❋
        </div>
      </div>
      <div className="fixed bottom-20 left-10 opacity-10 pointer-events-none">
        <div className="text-4xl text-[#EA580C] animate-pulse">
          🕌
        </div>
      </div>

      <footer className="bg-[#0F172A] text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C2410C] rounded flex items-center justify-center font-serif font-bold">D</div>
              <h3 className="text-2xl font-serif font-bold">DKHOUL</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Révolutionner le tourisme marocain par la technologie et l'équité. Une plateforme pensée par des locaux, pour le monde.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C2410C] uppercase text-xs tracking-widest">Liens</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => setView('presentation')} className="hover:text-white transition-colors">Vision</button></li>
              <li><button onClick={() => setView('financial')} className="hover:text-white transition-colors">Investir</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C2410C] uppercase text-xs tracking-widest">Contact</h4>
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
              <div className="bg-white/10 p-2 rounded"><Users size={16}/></div> 
              <span>Cheikhi Chakib</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className="bg-white/10 p-2 rounded"><Target size={16}/></div> 
              <span>ccheikhi@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-600 text-xs">
          © 2025 Projet DKHOUL. Tous droits réservés. Fait avec passion à Salé, Maroc.
        </div>
      </footer>
    </div>
  );
};

export default App;