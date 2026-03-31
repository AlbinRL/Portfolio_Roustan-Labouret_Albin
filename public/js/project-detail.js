// Base de données des projets
const projects = {
    'portfolio': {
        title: 'Portfolio Personnel',
        category: 'Web',
        categoryClass: 'bg-orange-600',
        description: 'Création d\'un portfolio professionnel avec HTML, CSS et JavaScript. Utilisation de Tailwind CSS pour le design. Ce projet m\'a permis de mettre en pratique mes compétences en développement web front-end et de créer une vitrine professionnelle de mes réalisations.',
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
        code: 'https://github.com/AlbinRL/portfolio'
    },
    'application-mobile': {
        title: 'Application Mobile',
        category: 'Mobile',
        categoryClass: 'bg-green-600',
        description: 'Développement d\'une application mobile pour la gestion de tâches quotidiennes. Interface utilisateur intuitive et moderne. Ce projet a été réalisé dans le cadre de mes études et m\'a permis d\'acquérir des compétences en développement mobile.',
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
        code: '#'
    },
    'switch-cisco': {
        title: 'Configuration d\'un Switch Cisco',
        category: 'Réseau',
        categoryClass: 'bg-purple-600',
        description: 'Dans le cadre de mes études en BTS SIO, j\'ai réalisé un projet de configuration réseau sur un switch Cisco. Ce projet m\'a permis d\'acquérir des compétences essentielles en administration réseau.',
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
        code: '#'
    }
};

// Fonction pour charger les détails du projet
async function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        window.location.href = 'projets.html';
        return;
    }

    try {
        const response = await fetch(`/api/projects/${projectId}`);
        if (!response.ok) {
            throw new Error('Projet non trouvé');
        }
        
        const project = await response.json();

        // Mise à jour des éléments de la page
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-category').textContent = project.category;
        document.getElementById('project-category').classList.add(project.categoryClass);
        document.getElementById('project-description').textContent = project.description;

        // Mise à jour des technologies
        const technologiesContainer = document.getElementById('project-technologies');
        technologiesContainer.innerHTML = project.technologies.map(tech => `
            <span class="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">${tech}</span>
        `).join('');

        // Mise à jour des fonctionnalités
        const featuresContainer = document.getElementById('project-features');
        featuresContainer.innerHTML = project.features.map(feature => `
            <li>${feature}</li>
        `).join('');

        // Mise à jour des compétences
        const skillsContainer = document.getElementById('project-skills');
        skillsContainer.innerHTML = project.skills.map(skill => `
            <li>${skill}</li>
        `).join('');

        // Mise à jour des liens
        document.getElementById('project-demo').href = project.demo;
        document.getElementById('project-code').href = project.code;

        // Mise à jour de l'icône
        const projectImage = document.getElementById('project-image');
        projectImage.innerHTML = `<i class="fas ${project.icon} text-6xl ${project.iconColor}"></i>`;

    } catch (error) {
        console.error('Erreur lors du chargement des détails du projet:', error);
        window.location.href = 'projets.html';
    }
}

// Chargement des détails du projet au chargement de la page
document.addEventListener('DOMContentLoaded', loadProjectDetails); 