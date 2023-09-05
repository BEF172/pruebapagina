// Función para mostrar u ocultar el botón de "subir" basado en la posición de desplazamiento vertical de la página.
function toggleScrollButton() {
    if (window.scrollY > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector('.boton_contenedor').classList.add('show');
    } else {
        document.querySelector('.boton_contenedor').classList.remove('show');
    }
}

// Agrega un evento que se activa cuando se realiza un desplazamiento en la página.
window.addEventListener('scroll', () => {
    toggleScrollButton();
});

let isAnimating = false;

// Función para desplazar suavemente hacia arriba cuando se hace clic en el botón.
function scrollToTop(duration) {
    if (isAnimating) return;
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
            isAnimating = false;
        }
    }

    requestAnimationFrame(animateScroll);
}

// Agrega un evento que se activa cuando se hace clic en el botón de "subir".
document.querySelector('.botonarriba').addEventListener('click', () => {
    scrollToTop(1000);
});

const vga = document.getElementById('vgafoto');

if (vga) {
    vga.addEventListener('click', function () {
        const elementoDestino = document.getElementById('VGACONTENIDO');

        if (elementoDestino) {
            elementoDestino.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'center',     // Alinea la parte superior del elemento con el centro del contenedor
            });

        }
    });
}

const dvi = document.getElementById('dvifoto');

if (dvi) {
    dvi.addEventListener('click', function () {
        const elementoDestino = document.getElementById('DVICONTENIDO');

        if (elementoDestino) {
            elementoDestino.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'center',     // Alinea la parte superior del elemento con el centro del contenedor
            });
        }
    });
}

const hdmi = document.getElementById('hdmifoto');

if (hdmi) {
    hdmi.addEventListener('click', function () {
        const elementoDestino = document.getElementById('HDMICONTENIDO');

        if (elementoDestino) {
            elementoDestino.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'center',     // Alinea la parte superior del elemento con el centro del contenedor
            });
        }
    });
}

const displayport = document.getElementById('displayportfoto');

if (displayport) {
    displayport.addEventListener('click', function () {
        const elementoDestino = document.getElementById('DISPLAYPORTCONTENIDO');

        if (elementoDestino) {
            elementoDestino.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'center',     // Alinea la parte superior del elemento con el centro del contenedor
            });

        }
    });
}
