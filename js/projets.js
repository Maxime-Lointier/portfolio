    
    document.querySelectorAll('.projet-title').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.parentElement;
            card.classList.toggle('active');
        });
    });
