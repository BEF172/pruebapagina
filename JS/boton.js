// Esta parte del código se encarga de mostrar u ocultar el botón de "subir" basado en la posición de desplazamiento vertical de la página.
window.addEventListener('scroll', function () {
    // Verifica si la posición de desplazamiento vertical es mayor que 500 píxeles.
    if (window.scrollY > 500) {
        // Si es mayor, agrega la clase 'show' al elemento con la clase '.boton_contenedor'.
        document.querySelector('.boton_contenedor').classList.add('show');
    } else {
        // Si es menor o igual a 500 píxeles, elimina la clase 'show' del elemento con la clase '.boton_contenedor'.
        document.querySelector('.boton_contenedor').classList.remove('show');
    }
});

// Esta parte del código maneja el desplazamiento suave cuando se hace clic o toca el botón.
document.querySelector('.boton_contenedor').addEventListener('click', scrollToTop);
document.querySelector('.boton_contenedor').addEventListener('touchstart', scrollToTop);

// Esta función realiza el desplazamiento suave hacia arriba.
function scrollToTop() {
    // Obtiene la posición actual de desplazamiento vertical.
    const inicio = window.scrollY;
    // Define el objetivo de desplazamiento, que es 0 (la parte superior de la página).
    const objetivo = 0;
    // Calcula la distancia que se debe recorrer desde la posición actual hasta el objetivo.
    const distancia = objetivo - inicio;
    // Obtiene el tiempo de inicio de la animación.
    const tiempoInicio = performance.now();

    // Función que define una curva de aceleración para la animación (en este caso, easeOutQuad).
    function easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    }

    // Función que anima el desplazamiento.
    function animateScroll() {
        // Obtiene el tiempo actual.
        const tiempoActual = performance.now();
        // Calcula el tiempo transcurrido desde el inicio de la animación.
        const tiempoTranscurrido = tiempoActual - tiempoInicio;
        // Calcula la nueva posición de desplazamiento vertical utilizando la función de curva de aceleración.
        window.scrollTo(0, easeOutQuad(tiempoTranscurrido, inicio, distancia, 1000));

        // Si no se ha alcanzado la duración deseada, solicita el siguiente cuadro de animación.
        if (tiempoTranscurrido < 1000) {
            requestAnimationFrame(animateScroll);
        }
    }

    // Inicia la animación solicitando el primer cuadro de animación.
    requestAnimationFrame(animateScroll);
}
