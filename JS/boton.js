// Esta parte del código se encarga de mostrar u ocultar el botón de "subir" basado en la posición de desplazamiento vertical de la página.
window.onscroll = function () {
    // Verifica si la posición de desplazamiento vertical es mayor que 500 píxeles.
    if (document.documentElement.scrollTop > 500) {
        // Si es mayor, agrega la clase 'show' al elemento con la clase '.boton_contenedor'.
        document.querySelector('.boton_contenedor').classList.add('show');
    } else {
        // Si es menor o igual a 500 píxeles, elimina la clase 'show' del elemento con la clase '.boton_contenedor'.
        document.querySelector('.boton_contenedor').classList.remove('show');
    }
}

// Esta parte del código maneja el desplazamiento suave cuando se hace clic en el botón.
document.querySelector('.boton_contenedor').addEventListener('click', () => {
    // Llama a la función 'scrollToTop' con un valor de duración de 1000 milisegundos (1 segundo) para volver arriba.
    scrollToTop(1000); // 1000 milisegundos (1 segundo) para volver arriba
});

// Esta función realiza el desplazamiento suave hacia arriba.
function scrollToTop(duracion) {
    // Obtiene la posición actual de desplazamiento vertical.
    const inicio = document.documentElement.scrollTop;
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
        document.documentElement.scrollTop = easeOutQuad(tiempoTranscurrido, inicio, distancia, duracion);

        // Si no se ha alcanzado la duración deseada, solicita el siguiente cuadro de animación.
        if (tiempoTranscurrido < duracion) {
            requestAnimationFrame(animateScroll);
        }
    }

    // Inicia la animación solicitando el primer cuadro de animación.
    requestAnimationFrame(animateScroll);
}
