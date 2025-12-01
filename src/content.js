import { Flag, MapPin, Layers, Globe2, UserCheck, LockKeyhole, Fingerprint, Shield } from 'lucide-react';

export const CONTENT = {
    nav: { 
        home: "Accueil", 
        presentation: "Vision & Porteur", 
        demo: "Plateforme (Démo)", 
        simulator: "Simulateur Hôte", 
        innovation: "Stratégie", 
        technical: "Tech & Infra", 
        financial: "Investissement" 
    },
    // ... (Le reste de l'objet CONTENT est inchangé, y compris images, hero, stats, presentation, services_catalog, demo, financial, technical, innovation, security, footer)
    images: {
        founder: "DSC01825.JPG",
        app_mockup: "resources/platform-mockup.png",
        hero_bg: "resources/hero-bg.jpg",
        tech_stack: "image_d5a9b0.png",
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
            health: "https://images.unsplash.com/photo-1584515933487-779824d29609?q=80&w=900&auto=format&fit=crop",
            babysitting: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=900&auto=format&fit=crop",
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
        title: "Plateforme DKHOUL (Démo Interactive)",
        subtitle: "Découvrez l'expérience complète de notre marketplace touristique marocaine",
        categories: { space: "Espace", skills: "Compétences", connect: "Connexion" },
        filter_all: "Tous",
        search_placeholder: "Rechercher un service (ex: Riad, Cuisine, Guide)...",
        filters: {
            price_min: "Prix min",
            price_max: "Prix max", 
            rating: "Note minimum",
            location: "Ville",
            category: "Catégorie"
        },
        cities: ["Marrakech", "Rabat", "Casablanca", "Fès", "Agadir", "Tanger", "Chefchaouen", "Ouarzazate", "Ourika"],
        sort_options: ["Pertinence", "Prix croissant", "Prix décroissant", "Note décroissante"],
        view_modes: ["grid", "list"],
        steps: {
            book_now: "Réserver maintenant",
            view_details: "Voir détails",
            contact_host: "Contacter l'hôte",
            instant_book: "Réservation instantanée"
        },
        stats: {
            hosts: "500+",
            travelers: "10k+",
            services: "5k+"
        },
        main_categories: [
            {
                name: "Espace",
                tagline: "Monétise ton espace",
                description: "Louez votre espace inutilisé pour des besoins touristiques quotidiens. De l'espace de coworking au stockage de bagages.",
                icon: "meeting_room",
                priceRange: "25-300 DH",
                examples: ["Stockage bagages", "Coworking maison", "Parking sécurisé", "Espace événement"]
            },
            {
                name: "Compétences", 
                tagline: "Vends ton savoir-faire",
                description: "Partagez vos compétences locales et culturelles. De la cuisine traditionnelle aux artisanats ancestraux.",
                icon: "school",
                priceRange: "100-500 DH",
                examples: ["Cours de Darija", "Cuisine marocaine", "Atelier poterie", "Balade photo"]
            },
            {
                name: "Connexion",
                tagline: "Louez votre temps",
                description: "Connectez les touristes avec la vie locale authentique. Du dîner familial aux conseils personnalisés.",
                icon: "people",
                priceRange: "50-400 DH", 
                examples: ["Dîner authentique", "Guide local", "Conseils voyage", "Baby-sitting"]
            }
        ],
        mock_users: [
            { id: 1, name: "Fatima Alaoui", avatar: "👩‍🍳", rating: 4.9, reviews: 45, location: "Marrakech", verified: true },
            { id: 2, name: "Ahmed Bennani", avatar: "👨‍💼", rating: 4.8, reviews: 32, location: "Rabat", verified: true },
            { id: 3, name: "Sara Tazi", avatar: "👩‍🎨", rating: 5.0, reviews: 28, location: "Casablanca", verified: true },
            { id: 4, name: "Youssef Idrissi", avatar: "👨‍🍳", rating: 4.7, reviews: 67, location: "Fès", verified: true }
        ],
        mock_services: [
            {
                id: 1,
                hostId: "host_001",
                category: "Space",
                title: "Stockage Bagages Sécurisé - Gueliz",
                description: "Stockage sécurisé pour vos bagages pendant votre visite de la médina. Mon appartement est à 5 minutes à pied de la place Jemaa el-Fnaa. Caméra de surveillance et cadenas électroniques.",
                images: ["luggage"],
                location: {
                    address: "Rue de la Kasbah, Gueliz",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6295, lng: -7.9811 }
                },
                pricing: {
                    basePrice: 25,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 24
                },
                amenities: ["Sécurisé 24/7", "Caméra surveillance", "À 5 min de la médina", "Maximum 2 valises"],
                capacity: 2,
                duration: 24,
                rating: { average: 4.8, count: 156 },
                status: "active",
                providerName: "Fatima Alaoui",
                providerAvatar: "👩‍🍳"
            },
            {
                id: 2,
                hostId: "host_002", 
                category: "Skills",
                title: "Masterclass Tajine Marocain Authentique",
                description: "Apprenez à cuisiner un véritable tajine marocain dans ma cuisine familiale. Du marché aux épices à la dégustation finale. Cours en français, anglais ou arabe.",
                images: ["cooking"],
                location: {
                    address: "Quartier résidentiel, Medina",
                    city: "Marrakech", 
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6300, lng: -7.9810 }
                },
                pricing: {
                    basePrice: 250,
                    currency: "MAD", 
                    unit: "session"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 3,
                    maxBookingTime: 3
                },
                amenities: ["Cours 3h complet", "Ingrédients inclus", "Repas à emporter", "Traduction disponible"],
                capacity: 4,
                duration: 180,
                rating: { average: 5.0, count: 89 },
                status: "active",
                providerName: "Ahmed Bennani",
                providerAvatar: "👨‍🍳"
            },
            {
                id: 3,
                hostId: "host_003",
                category: "Connect", 
                title: "Dîner Authentique Chez l'Habitant",
                description: "Dînez avec ma famille dans notre maison traditionnelle. Découvrez la vraie cuisine marocaine faite maison, partagez des histoires et vivez une expérience authentique.",
                images: ["dinner"],
                location: {
                    address: "Riad traditionnel, Medina",
                    city: "Marrakech",
                    region: "Marrakech-Safi", 
                    country: "Maroc",
                    coordinates: { lat: 31.6310, lng: -7.9820 }
                },
                pricing: {
                    basePrice: 200,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 2,
                    maxBookingTime: 2
                },
                amenities: ["Repas complet 4 plats", "Ambiance familiale", "Histoire et culture", "Photos souvenirs"],
                capacity: 6,
                duration: 120,
                rating: { average: 5.0, count: 124 },
                status: "active",
                providerName: "Sara Tazi",
                providerAvatar: "👩‍🎨"
            },
            {
                id: 4,
                hostId: "host_004",
                category: "Skills",
                title: "Cours de Darija - Conversation Quotidienne",
                description: "Apprenez à négocier et échanger en darija marocain. Parfait pour votre séjour touristique. Cours adaptés à votre niveau.",
                images: ["darija"],
                location: {
                    address: "Café traditionnel, Ville Nouvelle",
                    city: "Rabat",
                    region: "Rabat-Salé-Kénitra",
                    country: "Maroc", 
                    coordinates: { lat: 34.0209, lng: -6.8416 }
                },
                pricing: {
                    basePrice: 150,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 2
                },
                amenities: ["Cours conversationnel", "Vocabulaire touristique", "Prononciation", "Support écrit"],
                capacity: 1,
                duration: 60,
                rating: { average: 4.9, count: 67 },
                status: "active",
                providerName: "Youssef Idrissi",
                providerAvatar: "👨‍🏫"
            },
            {
                id: 5,
                hostId: "host_005",
                category: "Space",
                title: "Coworking Maison - WiFi Fibre Optique",
                description: "Espace de travail calme et inspirant dans une maison marocaine traditionnelle. WiFi fibre, thé/café offert, terrasse avec vue.",
                images: ["coworking"],
                location: {
                    address: "Maison d'hôte, Palmeraie",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6320, lng: -7.9830 }
                },
                pricing: {
                    basePrice: 75,
                    currency: "MAD",
                    unit: "day"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 8
                },
                amenities: ["WiFi fibre", "Climatisation", "Thé/café offert", "Terrasse vue"],
                capacity: 3,
                duration: 480,
                rating: { average: 4.9, count: 43 },
                status: "active",
                providerName: "Karim Tazi",
                providerAvatar: "👨‍💼"
            },
            {
                id: 6,
                hostId: "host_006",
                category: "Connect",
                title: "Guide Local - Secrets de la Medina",
                description: "Découvrez les véritables secrets de la médina avec un local. Évitez les pièges touristiques et vivez comme un marocain.",
                images: ["souk"],
                location: {
                    address: "Point de rencontre flexible",
                    city: "Fès",
                    region: "Fès-Meknès",
                    country: "Maroc",
                    coordinates: { lat: 34.0333, lng: -5.0000 }
                },
                pricing: {
                    basePrice: 100,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 2,
                    maxBookingTime: 4
                },
                amenities: ["Guide local expérimenté", "Éviter arnaques", "Endroits secrets", "Histoire culturelle"],
                capacity: 4,
                duration: 120,
                rating: { average: 4.6, count: 98 },
                status: "active",
                providerName: "Omar Alaoui",
                providerAvatar: "👨‍🗺️"
            },
            // Additional Space Services
            {
                id: 7,
                hostId: "host_007",
                category: "Space",
                title: "Douche Express - Gare Casa-Voyageurs",
                description: "Station de douche rapide et propre à proximité de la gare Casa-Voyageurs. Eau chaude, serviettes propres, et produits d'hygiène inclus.",
                images: ["shower"],
                location: {
                    address: "Près Gare Casa-Voyageurs",
                    city: "Casablanca",
                    region: "Casablanca-Settat",
                    country: "Maroc",
                    coordinates: { lat: 33.5928, lng: -7.6192 }
                },
                pricing: {
                    basePrice: 35,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 1
                },
                amenities: ["Eau chaude illimitée", "Serviettes propres", "Produits d'hygiène", "Vestiaire sécurisé"],
                capacity: 1,
                duration: 30,
                rating: { average: 4.7, count: 203 },
                status: "active",
                providerName: "Nadia Bennani",
                providerAvatar: "👩‍💼"
            },
            {
                id: 8,
                hostId: "host_008",
                category: "Space",
                title: "Parking Sécurisé - Quartier Gueliz",
                description: "Place de parking privée dans un garage sécurisé au cœur de Gueliz. Caméra surveillance 24/7 et accès contrôlé.",
                images: ["parking"],
                location: {
                    address: "Rue de la Liberté, Gueliz",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6285, lng: -8.0088 }
                },
                pricing: {
                    basePrice: 45,
                    currency: "MAD",
                    unit: "day"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 30
                },
                amenities: ["Surveillance 24/7", "Accès contrôlé", "Éclairage LED", "Proximité centre-ville"],
                capacity: 1,
                duration: 1440,
                rating: { average: 4.8, count: 145 },
                status: "active",
                providerName: "Mohammed Alaoui",
                providerAvatar: "👨‍🔧"
            },
            {
                id: 9,
                hostId: "host_009",
                category: "Space",
                title: "Espace Événement - Jardin Traditionnel",
                description: "Magnifique jardin traditionnel pour vos événements privés. Capacité jusqu'à 20 personnes. Idéal pour anniversaires ou réunions familiales.",
                images: ["event"],
                location: {
                    address: "Jardin privé, Medina",
                    city: "Fès",
                    region: "Fès-Meknès",
                    country: "Maroc",
                    coordinates: { lat: 34.0625, lng: -4.9744 }
                },
                pricing: {
                    basePrice: 400,
                    currency: "MAD",
                    unit: "day"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 8,
                    maxBookingTime: 12
                },
                amenities: ["Jardin traditionnel", "Décoration incluse", "Service traiteur possible", "Musique autorisée"],
                capacity: 20,
                duration: 480,
                rating: { average: 4.9, count: 67 },
                status: "active",
                providerName: "Leila Tazi",
                providerAvatar: "👩‍🎨"
            },
            {
                id: 10,
                hostId: "host_010",
                category: "Space",
                title: "Coworking Riad - Vue sur Medina",
                description: "Espace de coworking dans un riad traditionnel avec vue imprenable sur la médina. WiFi haut débit, climatisation, et thé à volonté.",
                images: ["coworking"],
                location: {
                    address: "Riad historique, Medina",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6298, lng: -7.9818 }
                },
                pricing: {
                    basePrice: 120,
                    currency: "MAD",
                    unit: "day"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 5
                },
                amenities: ["Vue médina", "WiFi fibre", "Climatisation", "Thé/café offert", "Imprimante"],
                capacity: 6,
                duration: 480,
                rating: { average: 4.9, count: 89 },
                status: "active",
                providerName: "Yassine Bennani",
                providerAvatar: "👨‍💻"
            },
            // Additional Skills Services
            {
                id: 11,
                hostId: "host_011",
                category: "Skills",
                title: "Atelier Poterie Traditionnelle",
                description: "Apprenez l'art ancestral de la poterie marocaine. De la terre à l'émail, créez votre propre pièce sous la guidance d'un maître artisan.",
                images: ["pottery"],
                location: {
                    address: "Atelier familial, Medina",
                    city: "Fès",
                    region: "Fès-Meknès",
                    country: "Maroc",
                    coordinates: { lat: 34.0612, lng: -4.9756 }
                },
                pricing: {
                    basePrice: 180,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 2,
                    maxBookingTime: 4
                },
                amenities: ["Matériel complet", "Pièce à emporter", "Tradition ancestrale", "Photo atelier"],
                capacity: 3,
                duration: 180,
                rating: { average: 4.8, count: 134 },
                status: "active",
                providerName: "Hassan Alaoui",
                providerAvatar: "👨‍🎨"
            },
            {
                id: 12,
                hostId: "host_012",
                category: "Skills",
                title: "Balade Photo - Spots Instagram Marrakech",
                description: "Découvrez les meilleurs spots photo de Marrakech avec un photographe professionnel. Apprenez les techniques de composition et de lumière.",
                images: ["photo_tour"],
                location: {
                    address: "Point de départ flexible",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6295, lng: -7.9811 }
                },
                pricing: {
                    basePrice: 350,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 4,
                    maxBookingTime: 6
                },
                amenities: ["Photographe pro", "Édition photos", "Spots secrets", "Conseils composition"],
                capacity: 2,
                duration: 240,
                rating: { average: 4.9, count: 78 },
                status: "active",
                providerName: "Karim Tazi",
                providerAvatar: "📸"
            },
            {
                id: 13,
                hostId: "host_013",
                category: "Skills",
                title: "Initiation Musique Gnaoua - Percussions",
                description: "Découvrez les rythmes ancestraux du Maroc avec des percussions traditionnelles. Initiation aux techniques de base et improvisation.",
                images: ["gnaoua"],
                location: {
                    address: "Studio musical, Ville Nouvelle",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6302, lng: -7.9825 }
                },
                pricing: {
                    basePrice: 220,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 2,
                    maxBookingTime: 3
                },
                amenities: ["Percussions incluses", "Notation musicale", "Thé traditionnel", "Enregistrement audio"],
                capacity: 4,
                duration: 120,
                rating: { average: 4.9, count: 156 },
                status: "active",
                providerName: "Ahmed Gnaoui",
                providerAvatar: "🥁"
            },
            {
                id: 14,
                hostId: "host_014",
                category: "Skills",
                title: "Cours Darija - Affaires et Négociation",
                description: "Maîtrisez l'art de la négociation en darija marocain. Parfait pour les professionnels et entrepreneurs en voyage d'affaires.",
                images: ["darija"],
                location: {
                    address: "Bureau moderne, Centre-ville",
                    city: "Casablanca",
                    region: "Casablanca-Settat",
                    country: "Maroc",
                    coordinates: { lat: 33.5731, lng: -7.5898 }
                },
                pricing: {
                    basePrice: 200,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 3
                },
                amenities: ["Vocabulaire business", "Rôles pratiques", "Support professionnel", "Matériel pédagogique"],
                capacity: 2,
                duration: 90,
                rating: { average: 4.8, count: 92 },
                status: "active",
                providerName: "Fatima Zahra",
                providerAvatar: "👩‍🏫"
            },
            {
                id: 15,
                hostId: "host_015",
                category: "Skills",
                title: "Atelier Cuisine - Pastilla aux Amandes",
                description: "Maîtrisez l'art de la pastilla, joyau de la cuisine marocaine. Préparation complète d'un plat traditionnel avec des ingrédients frais.",
                images: ["cooking"],
                location: {
                    address: "Cuisine familiale, Medina",
                    city: "Rabat",
                    region: "Rabat-Salé-Kénitra",
                    country: "Maroc",
                    coordinates: { lat: 34.0209, lng: -6.8416 }
                },
                pricing: {
                    basePrice: 280,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 3,
                    maxBookingTime: 3
                },
                amenities: ["Ingrédients premium", "Recette détaillée", "Dégustation", "À emporter"],
                capacity: 3,
                duration: 180,
                rating: { average: 5.0, count: 67 },
                status: "active",
                providerName: "Amina Bennani",
                providerAvatar: "👩‍🍳"
            },
            // Additional Connect Services
            {
                id: 16,
                hostId: "host_016",
                category: "Connect",
                title: "Dîner Familial - Cuisine Berbère",
                description: "Partagez un dîner authentique avec une famille berbère. Découvrez les saveurs des montagnes et les traditions ancestrales.",
                images: ["dinner"],
                location: {
                    address: "Maison berbère, Atlas",
                    city: "Ourika",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.2833, lng: -7.7167 }
                },
                pricing: {
                    basePrice: 250,
                    currency: "MAD",
                    unit: "session"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 3,
                    maxBookingTime: 3
                },
                amenities: ["Cuisine berbère", "Histoire locale", "Musique traditionnelle", "Transport inclus"],
                capacity: 8,
                duration: 180,
                rating: { average: 4.9, count: 145 },
                status: "active",
                providerName: "Fatima Berbère",
                providerAvatar: "👵"
            },
            {
                id: 17,
                hostId: "host_017",
                category: "Connect",
                title: "Guide Souk - Shopping Authentique Fès",
                description: "Évitez les arnaques et faites de vraies affaires dans le souk de Fès. Votre guide local vous mènera aux meilleurs artisans.",
                images: ["souk"],
                location: {
                    address: "Entrée Souk, Medina",
                    city: "Fès",
                    region: "Fès-Meknès",
                    country: "Maroc",
                    coordinates: { lat: 34.0625, lng: -4.9744 }
                },
                pricing: {
                    basePrice: 120,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 2,
                    maxBookingTime: 6
                },
                amenities: ["Guide expérimenté", "Négociation prix", "Artisans locaux", "Histoire souk"],
                capacity: 3,
                duration: 180,
                rating: { average: 4.7, count: 203 },
                status: "active",
                providerName: "Omar Souk",
                providerAvatar: "🛍️"
            },
            {
                id: 18,
                hostId: "host_018",
                category: "Connect",
                title: "Transport Privé - Aéroport Marrakech",
                description: "Transfert privé et confortable depuis/vers l'aéroport Marrakech. Véhicule climatisé avec chauffeur professionnel.",
                images: ["transport"],
                location: {
                    address: "Aéroport Marrakech",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6069, lng: -8.0363 }
                },
                pricing: {
                    basePrice: 180,
                    currency: "MAD",
                    unit: "trip"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 1
                },
                amenities: ["Véhicule climatisé", "Chauffeur professionnel", "Suivi GPS", "Assurance incluse"],
                capacity: 4,
                duration: 45,
                rating: { average: 4.8, count: 289 },
                status: "active",
                providerName: "Hassan Transport",
                providerAvatar: "🚗"
            },
            {
                id: 19,
                hostId: "host_019",
                category: "Connect",
                title: "Conseils Voyage - Itinéraire Personnalisé",
                description: "Planifiez votre séjour marocain avec un local expérimenté. Itinéraire sur mesure selon vos intérêts et budget.",
                images: ["advice"],
                location: {
                    address: "Café moderne, Centre-ville",
                    city: "Casablanca",
                    region: "Casablanca-Settat",
                    country: "Maroc",
                    coordinates: { lat: 33.5731, lng: -7.5898 }
                },
                pricing: {
                    basePrice: 80,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 1,
                    maxBookingTime: 2
                },
                amenities: ["Itinéraire personnalisé", "Conseils budgétaires", "Contacts locaux", "Support WhatsApp"],
                capacity: 1,
                duration: 60,
                rating: { average: 4.9, count: 167 },
                status: "active",
                providerName: "Sara Voyage",
                providerAvatar: "🗺️"
            },
            {
                id: 20,
                hostId: "host_020",
                category: "Connect",
                title: "Médiation Santé - Consultation Médecin",
                description: "Accompagnement linguistique et culturel pour vos consultations médicales. Traduction darija-français et aide administrative.",
                images: ["health"],
                location: {
                    address: "Clinique moderne, Ville Nouvelle",
                    city: "Rabat",
                    region: "Rabat-Salé-Kénitra",
                    country: "Maroc",
                    coordinates: { lat: 34.0209, lng: -6.8416 }
                },
                pricing: {
                    basePrice: 120,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 1,
                    maxBookingTime: 2
                },
                amenities: ["Traduction médicale", "Aide administrative", "Suivi post-consultation", "Contacts fiables"],
                capacity: 2,
                duration: 60,
                rating: { average: 4.9, count: 98 },
                status: "active",
                providerName: "Dr. Leila Santé",
                providerAvatar: "👩‍⚕️"
            },
            {
                id: 21,
                hostId: "host_021",
                category: "Connect",
                title: "Baby-sitting Bilingue - Soirée Libre",
                description: "Garde d'enfants professionnelle avec une baby-sitter bilingue (français-anglais). Jeux éducatifs et sécurité garantie.",
                images: ["babysitting"],
                location: {
                    address: "Appartement moderne, Quartier résidentiel",
                    city: "Casablanca",
                    region: "Casablanca-Settat",
                    country: "Maroc",
                    coordinates: { lat: 33.5731, lng: -7.5898 }
                },
                pricing: {
                    basePrice: 90,
                    currency: "MAD",
                    unit: "hour"
                },
                availability: {
                    instantBook: true,
                    minBookingTime: 2,
                    maxBookingTime: 8
                },
                amenities: ["Baby-sitter qualifiée", "Jeux éducatifs", "Repas enfant", "Suivi sécurité"],
                capacity: 3,
                duration: 480,
                rating: { average: 4.8, count: 134 },
                status: "active",
                providerName: "Nadia Kids",
                providerAvatar: "👶"
            },
            {
                id: 22,
                hostId: "host_022",
                category: "Connect",
                title: "Travel Sherpa - Assistance Complète Maroc",
                description: "Assistance complète pour votre séjour marocain. De l'arrivée à l'aéroport au départ, je gère tout pour vous.",
                images: ["sherpa"],
                location: {
                    address: "Service mobile, Tout le Maroc",
                    city: "Marrakech",
                    region: "Marrakech-Safi",
                    country: "Maroc",
                    coordinates: { lat: 31.6295, lng: -7.9811 }
                },
                pricing: {
                    basePrice: 250,
                    currency: "MAD",
                    unit: "day"
                },
                availability: {
                    instantBook: false,
                    minBookingTime: 7,
                    maxBookingTime: 30
                },
                amenities: ["Transferts aéroport", "Réservations hôtels", "Guides locaux", "Support 24/7", "Traduction"],
                capacity: 6,
                duration: 1440,
                rating: { average: 5.0, count: 89 },
                status: "active",
                providerName: "Karim Sherpa",
                providerAvatar: "🎒"
            }
        ]
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
                cost: "200 000 DH", 
                desc: "Frais principaux: Développement Web/Mobile (100K), Salaires Core Team (60K), Marketing de lancement Rabat (23K), Infra AWS & Admin (17K)."
            },
            { 
                phase: "Phase 2: Croissance & Traction (Mois 6-12)", 
                action: "Acquisition & Optimisation", 
                cost: "167 000 DH", 
                desc: "Frais principaux: Campagnes Marketing Digital & Influence (67K), Recrutement Support & Ops (50K), Itérations Produit v2 (33K), Expansion Marrakech (17K)."
            },
            { 
                phase: "Phase 3: Pré-Scale & Rentabilité (Mois 12-18)", 
                action: "Scale & Préparation Série A", 
                cost: "133 000 DH", 
                desc: "Frais principaux: Renforcement Équipe Tech (50K), Marketing National (33K), Optimisation Infra & Sécurité (17K), Réserve Stratégique (33K)."
            }
        ],
        pnl_table: [
            { item: "Revenus", y1: "36M", y2: "582M", y3: "1.7Md", y4: "5.9Md", y5: "16.3Md" },
            { item: "Coûts Directs", y1: "-9M", y2: "-62M", y3: "-183M", y4: "-840M", y5: "-2.3Md" },
            { item: "Marge Brute", y1: "27M", y2: "520M", y3: "0.5Md", y4: "5.1Md", y5: "14.0Md" },
            { item: "Dépenses Ops", y1: "-1.7M", y2: "-3.3M", y3: "-7.0M", y4: "-9.2M", y5: "-11.7M" },
            { item: "EBITDA", y1: "25.3M", y2: "516M", y3: "0.5Md", y4: "5.1Md", y5: "14.0Md" }
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