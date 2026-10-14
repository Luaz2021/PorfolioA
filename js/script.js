document.addEventListener('DOMContentLoaded', () => {
    // 1. Botón Volver Arriba
    const btnTop = document.getElementById('btnTop');

    if (btnTop) {
        btnTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Alerta de "Próximamente" para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que recargue o suba la página
            alert("¡Próximamente! Este proyecto estará disponible muy pronto cuando lo suba y despliegue en la web.");
        });
    });

    console.log("Portafolio backend de Luaz inicializado correctamente para 2026.");
});