document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Initial check
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Initial check
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);

    // Gestion de l'affichage des documents dans une modale
    const toggleButtons = document.querySelectorAll('.open-doc');
    const modal = document.getElementById('modal');
    const modalIframe = document.getElementById('modal-iframe');
    const closeButton = document.querySelector('.close');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const docLink = button.getAttribute('data-file');
            modalIframe.src = docLink;
            modal.style.display = 'block'; // Affiche la modale
        });
    });

    // Fermer la modale
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        modalIframe.src = ''; // Réinitialise la source de l'iframe
    });

    // Fermer la modale en cliquant à l'extérieur
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalIframe.src = ''; // Réinitialise la source de l'iframe
        }
    });
});
