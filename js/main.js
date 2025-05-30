window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.competence-bar').forEach(bar => {
        const percent = parseInt(bar.getAttribute('data-percent'));
        const wave = bar.querySelector('.competence-wave');
        
        // Correction du texte de pourcentage
        const percentText = bar.querySelector('.competence-percent');
        if (percentText) {
            percentText.textContent = percent + '%';
        }
        
        // Remplir la barre sans animation complexe
        setTimeout(() => {
            wave.classList.add('animate-final');
            wave.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        }, 300);
    });
});