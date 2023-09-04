// Función que muestra u oculta el botón de "subir" basado en la posición de desplazamiento vertical de la página.
function toggleScrollButton() {
    // Verifica si la posición de desplazamiento vertical es mayor que 500 píxeles.
    if (window.scrollY > 500 || document.documentElement.scrollTop > 500) {
        // Si es mayor, muestra el botón.
        document.querySelector('.boton_contenedor').classList.add('show');
    } else {
        // Si es menor o igual a 500 píxeles, oculta el botón.
        document.querySelector('.boton_contenedor').classList.remove('show');
    }
}

// Agrega un evento que se activa cuando se realiza un desplazamiento en la página.
window.addEventListener('scroll', toggleScrollButton);

// Bandera para controlar el estado de animación del botón
let isAnimating = false;

// Esta función realiza el desplazamiento suave hacia arriba cuando se hace clic en el botón.
function scrollToTop(duration) {
    if (isAnimating) return; // Evita iniciar otra animación si ya está en curso
    isAnimating = true;

    const start = window.scrollY || document.documentElement.scrollTop;
    const target = 0;
    const distance = target - start;
    const startTime = performance.now();

    function easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    }

    function animateScroll() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        window.scroll(0, easeOutQuad(elapsedTime, start, distance, duration));

        if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            isAnimating = false; // La animación ha terminado
        }
    }

    requestAnimationFrame(animateScroll);
}

// Agrega un evento que se activa cuando se hace clic en el botón de "subir".
document.querySelector('.boton_contenedor').addEventListener('click', () => {
    // Llama a la función para desplazar suavemente hacia arriba.
    scrollToTop(1000); // 1000 milisegundos (1 segundo) para volver arriba
});
