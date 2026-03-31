document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');

    // Ajouter une transition CSS aux projets
    projects.forEach(project => {
        project.style.transition = 'all 0.5s ease-in-out';
        project.style.opacity = '1';
        project.style.transform = 'scale(1)';
        project.style.display = 'block';
        project.style.order = '0';
    });

    // Ajouter une transition à la grille
    projectsGrid.style.transition = 'all 0.5s ease-in-out';

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'bg-orange-600', 'bg-green-600', 'bg-purple-600', 'text-white');
                btn.classList.add('bg-gray-700', 'text-gray-300');
            });

            // Ajouter la classe active au bouton cliqué avec la couleur correspondante
            const category = button.getAttribute('data-category');
            button.classList.remove('bg-gray-700', 'text-gray-300');
            
            switch(category) {
                case 'web':
                    button.classList.add('bg-orange-600', 'text-white');
                    break;
                case 'mobile':
                    button.classList.add('bg-green-600', 'text-white');
                    break;
                case 'reseau':
                    button.classList.add('bg-purple-600', 'text-white');
                    break;
                default:
                    button.classList.add('bg-blue-600', 'text-white');
            }

            let visibleCount = 0;

            // Réorganiser les projets
            projects.forEach(project => {
                const isVisible = category === 'all' || project.getAttribute('data-category') === category;
                if (isVisible) {
                    project.style.display = 'block';
                    project.style.order = visibleCount.toString();
                    visibleCount++;
                } else {
                    project.style.display = 'none';
                    project.style.order = '999';
                }
            });

            // Maintenir la grille à 3 colonnes
            projectsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        });
    });
}); 