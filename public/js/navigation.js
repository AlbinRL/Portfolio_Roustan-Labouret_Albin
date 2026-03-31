document.addEventListener('DOMContentLoaded', function() {
    // Charger la navigation (chemin root-relatif pour fonctionner depuis n'importe quelle page)
    fetch('/public/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
            
            // Marquer le lien actif (gère les sous-dossiers comme /public/projets/...)
            const path = window.location.pathname;
            let activeNavId = 'nav-home';
            if (path.includes('/projets')) {
                activeNavId = 'nav-projets';
            } else if (path.includes('parcour')) {
                activeNavId = 'nav-parcour';
            } else if (path.includes('competences')) {
                activeNavId = 'nav-competences';
            } else if (path.includes('e5')) {
                activeNavId = 'nav-e5';
            } else if (path.includes('veilles')) {
                activeNavId = 'nav-veilles';
            } else if (path.includes('stage')) {
                activeNavId = 'nav-stage';
            }
            const activeLink = document.getElementById(activeNavId);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        })
        .catch(error => console.error('Erreur lors du chargement de la navigation:', error));
}); 