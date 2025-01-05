// Função para adicionar a classe 'show' quando a div aparecer na tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando a div aparecer na tela, anima a opacidade
            entry.target.classList.add('show');
        } else {
            // Quando a div sair da tela, remove a classe 'show'
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5 // O ponto de disparo é quando 50% do elemento estiver visível na tela
});

// Seleciona a div promocao para observação
const promoElement = document.querySelector('.promo');

// Inicia a observação
observer.observe(promoElement);
