document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('check');
    const menu = document.querySelector('.side-menu');
    const body = document.body;

    // Garantir que o menu não esteja visível quando a página carregar
    checkbox.checked = false;
    menu.classList.remove('active');  // Remove a classe 'active' para garantir que o menu esteja escondido

    // Controla a ativação/desativação do menu
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            menu.classList.add('active'); // Ativa o menu
            body.classList.add('menu-active'); // Move o conteúdo da página
        } else {
            menu.classList.remove('active'); // Desativa o menu
            body.classList.remove('menu-active'); // Restaura o conteúdo da página
        }
    });
});
