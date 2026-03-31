// Fonction pour créer une carte de projet
function createProjectCard(project) {
    return `
        <div class="project-card bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6">
            <div class="flex items-center mb-4">
                <i class="fas ${project.icon} ${project.iconColor} text-2xl mr-3"></i>
                <h3 class="text-xl font-bold text-white">${project.title}</h3>
            </div>
            <div class="mb-4">
                <span class="px-3 py-1 ${project.categoryClass} text-white rounded-full text-sm">
                    ${project.category}
                </span>
            </div>
            <p class="text-gray-300 mb-4">${project.shortDescription}</p>
            <div class="mb-4">
                <h4 class="text-white font-semibold mb-2">Technologies utilisées :</h4>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `
                        <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
            <div class="btn-container">
                <a href="projet-detail.html?id=${project._id}" class="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors">
                    Voir le projet
                </a>
            </div>
        </div>
    `;
}

// Fonction pour charger les projets
async function loadProjects() {
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();
        
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
        
        // Initialisation du filtrage
        initFiltering();
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
    }
}

// Fonction pour initialiser le filtrage
function initFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mise à jour des classes des boutons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600');
                btn.classList.add('bg-gray-700');
            });
            button.classList.remove('bg-gray-700');
            button.classList.add('bg-blue-600');

            const category = button.dataset.category.toLowerCase();

            projectCards.forEach(card => {
                const projectCategory = card.querySelector('span').textContent.toLowerCase();
                if (category === 'all' || projectCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Chargement des projets au chargement de la page
document.addEventListener('DOMContentLoaded', loadProjects); 