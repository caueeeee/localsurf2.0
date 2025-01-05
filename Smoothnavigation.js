function smoothScrollToTop() {
    let scrollDuration = 600; // Duração da rolagem em milissegundos
    let start = window.scrollY || document.documentElement.scrollTop;
    let startTime = null;

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let scrollAmount = Math.min(progress / scrollDuration, 5) * start; // Aceleração/desaceleração suave
        window.scrollTo(0, start - scrollAmount);

        if (progress < scrollDuration) {
            requestAnimationFrame(scrollStep); // Continua a rolagem
        }
    }

    requestAnimationFrame(scrollStep);
}

// Para a ação do botão "Voltar ao Topo"
document.getElementById("backToTop").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToTop();
});
