const viewportSize = document.getElementById("viewport-size");

function actualizarViewport() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    viewportSize.innerHTML = ancho+" x "+alto;
}

actualizarViewport();

window.addEventListener("resize", actualizarViewport);