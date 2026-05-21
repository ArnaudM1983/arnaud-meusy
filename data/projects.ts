export type Project = {
    slug: string;
    title: string;
    client: string;
    role: string;
    year: string;
    link: string;
    category: string;
    overview: string;
    challenge: string;
    solution: string;
    stack: string[];
    impact: string;
    image: string;
    video?: string;
    intro: string;
    gallery: string[];
};

export const PROJECTS: Project[] = [
    {
        slug: "eighty-one-store",
        title: "Eighty One Store",
        client: "Eighty One",
        role: "Full-Stack Developer & UX Designer",
        year: "2026",
        link: "https://www.eightyonestore.com/",
        category: "E-Commerce",
        intro: "Conception d'une plateforme e-commerce sur mesure incluant API REST, interface client Next.js et dashboard administrateur haute performance.",
        overview: "Le projet Eighty-One visait à remplacer les solutions standards par une infrastructure propriétaire capable de gérer un catalogue complexe de variantes, une logistique multi-transporteurs et un flux de données fluide entre le client et l'administration.",
        challenge: "Synchroniser en temps réel les stocks et les paiements sécurisés (Stripe/PayPal) tout en offrant une expérience utilisateur fluide, de la sélection d'un point relais Mondial Relay & Colissimo jusqu'à la gestion automatisée des retours en stock lors d'annulations.",
        solution: "Utilisation de Symfony pour bâtir une architecture backend évolutive, couplée à un frontend Next.js optimisé pour le SEO. L'interface d'administration a été propulsée par le framework Refine pour accélérer le développement des vues CRUD et la gestion complexe des variantes de produits.",
        stack: ["Next.js", "Symfony", "Refine", "TypeScript", "Tailwind CSS", "Stripe", "MySQL"],
        impact: "Plateforme propriétaire centralisant vente, logistique et administration.",
        image: "81.webp",
        gallery: [
            "/81.webp",
            "/81-2.webp",
            "/81-3.webp",
            "/81-4.webp"
        ]
    },
    {
        slug: "drophub-crm",
        title: "Drophub CRM",
        client: "Projet Personnel (Freelance)",
        role: "Full-Stack Developer & UX Designer",
        year: "2026",
        link: "https://drophub-delta.vercel.app/",
        category: "SaaS / Sales Automation",
        intro: "Une solution SaaS sur mesure automatisant la prospection freelance par l'intelligence artificielle et la gestion de pipeline.",
        overview: "Pour optimiser mon propre flux de prospection en tant que freelance, j'ai conçu Drophub CRM : un outil centralisant la génération de séquences de messages personnalisés et le suivi commercial pour pallier l'inefficacité des relances manuelles.",
        challenge: "L'enjeu majeur résidait dans l'optimisation des performances front-end (Tailwind) et la gestion d'une interface complexe intégrant du Drag-and-Drop sans compromettre la stabilité de l'application.",
        solution: "Mise en place d'une architecture Next.js avec typage TypeScript intégral, intégration de l'API Gemini pour la rédaction assistée, et déploiement d'une base de données Supabase avec politiques RLS pour sécuriser les données prospects.",
        stack: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "Tailwind CSS"],
        impact: "Prospection automatisée et suivi commercial optimisé au quotidien.",
        image: "drophub.webp",
        gallery: [
            "/drophub.webp",
            "/drophub-2.webp",
            "/drophub-3.webp",
            "/drophub-4.webp"
        ]
    },
    {
        slug: "kickflip-studio",
        title: "Kickflip Studio",
        client: "Exploration Personnelle",
        role: "Creative Developer & UX Designer",
        year: "2025",
        link: "https://kickflip-studio.netlify.app/",
        category: "Expérience Immersive & SaaS",
        intro: "Une vitrine interactive fusionnant la performance de Next.js et l'immersion sensorielle de la 3D temps réel.",
        overview: "L'objectif était de repousser les limites des interfaces web traditionnelles en intégrant des technologies 3D et physiques complexes au sein d'une architecture Headless CMS fluide.",
        challenge: "Maîtriser l'interaction entre le moteur physique Matter.js et les scènes Three.js tout en conservant une gestion de contenu éditoriale flexible via Prismic.",
        solution: "Développement d'une architecture modulaire avec Slicemachine, orchestrant des animations GSAP synchronisées à des composants React Three Fiber.",
        stack: ["Next.js", "Three.js", "GSAP", "Prismic", "Matter.js", "TypeScript", "Tailwind CSS"],
        impact: "Immersion 3D fluide alliée à une autonomie éditoriale.",
        video: "kickflip.mp4",
        image: "kickflip-fallback.webp",
        gallery: [
            "/kickflip.webp",
            "/kickflip-2.webp",
            "/kickflip-3.webp",
            "/kickflip-4.webp"
        ]
    },
    {
        slug: "gellery",
        title: "Gellery",
        client: "Gellery France",
        role: "Full-Stack Development & UX Design",
        year: "2025",
        link: "https://gellery.fr",
        category: "E-Commerce",
        intro: "Une plateforme e-commerce premium dédiée aux professionnels du Nail Art, alliant esthétique minimaliste et expérience d'achat fluide.",
        overview: "Gellery souhaitait une vitrine digitale capable de refléter son positionnement haut de gamme tout en gérant un catalogue complexe de kits thématiques et de produits techniques pour prothésistes ongulaires.",
        challenge: "L'enjeu majeur consistait à simplifier la navigation au sein d'un large inventaire (couleurs, outils, fonctionnels) tout en intégrant un configurateur de 'Mini-Kit' personnalisé pour favoriser la conversion.",
        solution: "Développement d'une boutique sous WooCommerce avec une interface épurée privilégiant le visuel. Mise en place d'une architecture de l'information sectorisée par usage et intégration d'un système de paiement sécurisé via Stripe.",
        stack: ["WordPress", "WooCommerce", "PHP"],
        impact: "Un univers visuel fort boostant les ventes professionnelles.",
        image: "gellery-homepage.webp",
        gallery: [
            "/gellery-homepage-2.webp",
            "/gellery-grid.webp",
            "/gellery-kit.webp",
            "/gellery-mobile.webp"
        ]
    },
    {
        slug: "residence-barma",
        title: "BARMA COURCHEVEL",
        client: "Adjectif / Promoteur Immobilier",
        role: "Développeur Web Front-End",
        year: "2025",
        link: "https://www.barma-residence-courchevel.fr/",
        category: "Vitrine Immobilière de Luxe",
        intro: "Une vitrine immersive haut de gamme pour une résidence de luxe située au cœur du domaine des 3 Vallées.",
        overview: "Le projet consiste à promouvoir la résidence BARMA à Courchevel La Tania. L'enjeu était de traduire numériquement l'élégance savoyarde et le standing des 71 appartements via une interface fluide, visuelle et rassurante pour des investisseurs internationaux.",
        challenge: "L'enjeu technique résidait dans l'intégration rigoureuse d'une maquette riche en contenus médias (vidéos YouTube, galeries haute définition, perspectives 3D) tout en garantissant des performances optimales et une navigation responsive impeccable sur un secteur très concurrentiel.",
        solution: "Développement d'une structure robuste en PHP pour la gestion des contenus et déploiement d'une interface dynamique avec JavaScript et Bootstrap. J'ai optimisé le chargement des ressources critiques (lazy-loading, gestion des cookies tiers pour YouTube) pour assurer une fluidité maximale lors de la consultation des prestations haut de gamme.",
        stack: ["PHP", "JavaScript", "Bootstrap", "YouTube API"],
        impact: "Une vitrine digitale élégante optimisée pour la conversion.",
        image: "barma.webp",
        gallery: [
            "/barma-1.webp",
            "/barma-2.webp",
            "/barma-3.webp",
            "/barma-4.webp"
        ]
    },
    {
        slug: "alto-conseil-vitrine-strategique",
        title: "Alto Conseil",
        client: "Concept Case Study",
        role: "Full-Stack & UX Design",
        year: "2024",
        link: "https://altoconseil.netlify.app/",
        category: "Vitrine",
        intro: "Une interface institutionnelle haute performance alliant la réactivité de Vue.js à l'élégance minimaliste de Tailwind CSS.",
        overview: "Conception d'une plateforme vitrine pour un cabinet de conseil en stratégie. L'enjeu était de transformer un catalogue de services complexes en une expérience utilisateur fluide, segmentée par piliers d'expertise (stratégie, finance, organisation).",
        challenge: "Le défi résidait dans l'équilibre entre une esthétique corporate rigoureuse et une interactivité moderne, notamment pour la gestion des compteurs de statistiques et des structures de données relationnelles entre expertises et témoignages.",
        solution: "Architecture basée sur Vue.js pour une navigation réactive et une gestion d'état simplifiée. Utilisation de Tailwind CSS pour un design system cohérent et responsive, permettant une itération rapide sur les composants d'interface comme les FAQ interactives et les formulaires de capture de leads.",
        stack: ["Vue.js", "Tailwind CSS", "Vite"],
        impact: "Une présence digitale maximisant la conversion client.",
        image: "alto.webp",
        gallery: [
            "/alto.webp",
            "/alto-mobile.webp",
            "/alto-2.webp",
            "/alto-3.webp"
        ]
    },
    {
        slug: "lucie-coaching-recrutement",
        title: "Lucie Coaching Recrutement",
        client: "Lucie Jandot",
        role: "Full-Stack Development & UX Design",
        year: "2025",
        link: "https://luciecoachingrecrutement.com/",
        category: "Vitrine Professionnelle & E-commerce",
        intro: "Création d'une plateforme web élégante et d'une boutique en ligne pour une coach certifiée et recruteuse à Lyon.",
        overview: "L'objectif était de concevoir un site complet centralisant l'activité de coaching, les services de recrutement pour entreprises et particuliers, tout en intégrant une boutique en ligne (WooCommerce) pour la vente de prestations et de produits.",
        challenge: "Traduire numériquement la bienveillance et le dynamisme de la cliente à travers un design épuré, tout en structurant une grande quantité de contenus (offres B2B, offres B2C, espace coaching) et de nombreux témoignages clients de manière fluide et lisible.",
        solution: "Développement d'un site sur mesure sous WordPress et WooCommerce. Mise en place d'une architecture de l'information sectorisée avec des parcours utilisateurs clairs, une intégration soignée des avis clients pour renforcer la réassurance, et un système de panier optimisé pour la boutique.",
        stack: ["WordPress", "WooCommerce", "PHP"],
        impact: "Une présence digitale professionnelle et unifiée boostant la prise de rendez-vous et la vente de services.",
        image: "coach-1.webp",
        gallery: [
            "/coach-1.webp",
            "/coach-2.webp",
            "/coach-3.webp",
            "/coach-4.webp"
        ]
    },
];

// Map pour accès direct via le slug
export const PROJECTS_MAP = PROJECTS.reduce((acc, project) => {
    acc[project.slug] = project;
    return acc;
}, {} as Record<string, Project>);