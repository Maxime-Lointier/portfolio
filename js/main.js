document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-mail');
    const mailText = document.getElementById('mail-text');
    const copySuccess = document.getElementById('copy-success');
    function copyMail() {
        navigator.clipboard.writeText(mailText.textContent.trim());
        copySuccess.style.display = 'inline';
        setTimeout(() => {
            copySuccess.style.display = 'none';
        }, 1200);
    }
    if (copyBtn && mailText && copySuccess) {
        copyBtn.addEventListener('click', copyMail);
        mailText.addEventListener('click', copyMail);
        mailText.style.cursor = "pointer";
        mailText.title = "Cliquer pour copier";
    }
    
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