const mongoose = require('mongoose');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schéma du projet
const projectSchema = new mongoose.Schema({
    title: String,
    category: String,
    categoryClass: String,
    description: String,
    shortDescription: String,
    technologies: [String],
    features: [String],
    skills: [String],
    demo: String,
    code: String,
    icon: String,
    iconColor: String
});

const Project = mongoose.model('Project', projectSchema);

// Données des projets
const projects = [
    {
        title: 'Portfolio Personnel',
        category: 'Web',
        categoryClass: 'bg-orange-600',
        description: 'Création d\'un portfolio professionnel avec HTML, CSS et JavaScript. Utilisation de Tailwind CSS pour le design. Ce projet m\'a permis de mettre en pratique mes compétences en développement web front-end et de créer une vitrine professionnelle de mes réalisations.',
        shortDescription: 'Création d\'un portfolio professionnel avec HTML, CSS et JavaScript. Utilisation de Tailwind CSS pour le design.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        features: [
            'Design responsive et moderne',
            'Navigation intuitive',
            'Filtrage des projets par catégorie',
            'Animations fluides',
            'Optimisation des performances'
        ],
        skills: [
            'Maîtrise des technologies web front-end',
            'Utilisation de frameworks CSS',
            'Gestion de projet',
            'Optimisation SEO',
            'Responsive design'
        ],
        demo: '#',
        code: 'https://github.com/AlbinRL/portfolio',
        icon: 'fa-laptop-code',
        iconColor: 'text-orange-500'
    },
    {
        title: 'Application Mobile',
        category: 'Mobile',
        categoryClass: 'bg-green-600',
        description: 'Développement d\'une application mobile pour la gestion de tâches quotidiennes. Interface utilisateur intuitive et moderne. Ce projet a été réalisé dans le cadre de mes études et m\'a permis d\'acquérir des compétences en développement mobile.',
        shortDescription: 'Développement d\'une application mobile pour la gestion de tâches quotidiennes. Interface utilisateur intuitive et moderne.',
        technologies: ['React Native', 'Firebase'],
        features: [
            'Gestion des tâches',
            'Synchronisation en temps réel',
            'Notifications push',
            'Interface utilisateur intuitive',
            'Mode hors ligne'
        ],
        skills: [
            'Développement mobile cross-platform',
            'Gestion de base de données',
            'Authentification utilisateur',
            'Gestion des états',
            'Tests unitaires'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-mobile-alt',
        iconColor: 'text-green-500'
    },
    {
        title: 'Configuration d\'un Switch Cisco',
        category: 'Réseau',
        categoryClass: 'bg-purple-600',
        description: 'Dans le cadre de mes études en BTS SIO, j\'ai réalisé un projet de configuration réseau sur un switch Cisco. Ce projet m\'a permis d\'acquérir des compétences essentielles en administration réseau.',
        shortDescription: 'Dans le cadre de mes études en BTS SIO, j\'ai réalisé un projet de configuration réseau sur un switch Cisco.',
        technologies: ['Cisco', 'VLAN', 'STP'],
        features: [
            'Configuration des VLANs',
            'Mise en place du protocole STP',
            'Configuration des ports trunk et access',
            'Gestion des adresses IP',
            'Configuration de la sécurité'
        ],
        skills: [
            'Administration réseau',
            'Configuration de matériel Cisco',
            'Gestion des VLANs',
            'Sécurité réseau',
            'Diagnostic réseau'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-network-wired',
        iconColor: 'text-purple-500'
    },
    {
        title: 'Site E-commerce',
        category: 'Web',
        categoryClass: 'bg-orange-600',
        description: 'Développement d\'une boutique en ligne complète avec panier d\'achat, système de paiement et gestion des stocks. Interface responsive et optimisée pour les conversions.',
        shortDescription: 'Développement d\'une boutique en ligne avec panier d\'achat et système de paiement. Interface responsive et optimisée pour les conversions.',
        technologies: ['PHP', 'MySQL', 'Stripe', 'Bootstrap'],
        features: [
            'Panier d\'achat',
            'Système de paiement sécurisé',
            'Gestion des stocks',
            'Interface d\'administration',
            'Système de recherche avancé'
        ],
        skills: [
            'Développement back-end',
            'Gestion de base de données',
            'Intégration de paiement',
            'Sécurité web',
            'Optimisation des performances'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-shopping-cart',
        iconColor: 'text-orange-500'
    },
    {
        title: 'Application Fitness',
        category: 'Mobile',
        categoryClass: 'bg-green-600',
        description: 'Application mobile de suivi d\'entraînement avec exercices personnalisés, statistiques et intégration avec des appareils de fitness.',
        shortDescription: 'Application mobile de suivi d\'entraînement avec exercices personnalisés et statistiques.',
        technologies: ['Flutter', 'Firebase', 'HealthKit'],
        features: [
            'Suivi des exercices',
            'Statistiques détaillées',
            'Intégration avec les appareils de fitness',
            'Programmes personnalisés',
            'Suivi des objectifs'
        ],
        skills: [
            'Développement Flutter',
            'Intégration d\'API',
            'Gestion des données en temps réel',
            'Design d\'interface mobile',
            'Tests d\'applications'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-dumbbell',
        iconColor: 'text-green-500'
    },
    {
        title: 'Mise en place d\'un Firewall',
        category: 'Réseau',
        categoryClass: 'bg-purple-600',
        description: 'Configuration d\'un pare-feu pour sécuriser un réseau d\'entreprise. Mise en place de règles de filtrage et de NAT.',
        shortDescription: 'Configuration d\'un pare-feu pour sécuriser un réseau d\'entreprise.',
        technologies: ['pfSense', 'NAT', 'VPN'],
        features: [
            'Configuration des règles de filtrage',
            'Mise en place du NAT',
            'Configuration d\'un VPN',
            'Monitoring du trafic',
            'Gestion des accès'
        ],
        skills: [
            'Sécurité réseau',
            'Configuration de pare-feu',
            'Gestion des VPN',
            'Monitoring réseau',
            'Troubleshooting'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-shield-alt',
        iconColor: 'text-purple-500'
    },
    {
        title: 'Blog Personnel',
        category: 'Web',
        categoryClass: 'bg-orange-600',
        description: 'Création d\'un blog personnel avec système de gestion de contenu, commentaires et authentification utilisateur.',
        shortDescription: 'Blog personnel avec système de gestion de contenu et commentaires.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'EJS'],
        features: [
            'Système de gestion de contenu',
            'Commentaires utilisateurs',
            'Authentification',
            'Interface d\'administration',
            'Système de tags'
        ],
        skills: [
            'Développement full-stack',
            'Gestion de contenu',
            'Authentification',
            'Base de données NoSQL',
            'Templating'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-blog',
        iconColor: 'text-orange-500'
    },
    {
        title: 'Application Météo',
        category: 'Mobile',
        categoryClass: 'bg-green-600',
        description: 'Application mobile de prévisions météorologiques avec géolocalisation et notifications personnalisées.',
        shortDescription: 'Application de prévisions météorologiques avec géolocalisation.',
        technologies: ['React Native', 'OpenWeather API', 'Geolocation'],
        features: [
            'Prévisions en temps réel',
            'Géolocalisation',
            'Notifications personnalisées',
            'Widgets',
            'Historique des données'
        ],
        skills: [
            'Intégration d\'API',
            'Géolocalisation',
            'Notifications push',
            'Gestion des données en temps réel',
            'Design d\'interface'
        ],
        demo: '#',
        code: '#',
        icon: 'fa-cloud-sun',
        iconColor: 'text-green-500'
    }
];

// Fonction pour initialiser la base de données
async function initDatabase() {
    try {
        // Suppression des projets existants
        await Project.deleteMany({});
        
        // Insertion des nouveaux projets
        await Project.insertMany(projects);
        
        console.log('Base de données initialisée avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données:', error);
    } finally {
        mongoose.connection.close();
    }
}

// Exécution de l'initialisation
initDatabase(); 