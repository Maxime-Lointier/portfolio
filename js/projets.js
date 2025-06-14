    
    document.querySelectorAll('.projet-title').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.parentElement;
            card.classList.toggle('active');
        });
    });
window.addEventListener('DOMContentLoaded', () => {
    // Gestion du dropdown au clic
    document.querySelectorAll('.projet-title').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.projet-card');
            card.classList.toggle('active');
        });
    });

    // Ouvre la carte si un hash est présent dans l'URL
    const hash = window.location.hash;
    if (hash) {
        const card = document.querySelector(hash);
        if (card && card.classList.contains('projet-card')) {
            card.classList.add('active');
            // Scroll jusqu'à la carte ouverte
            setTimeout(() => {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
});