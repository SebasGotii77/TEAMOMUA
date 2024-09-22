// Un mensaje especial al cargar la página
window.onload = function() {
    alert('TE AMO MAS DE LO QUE TIENES IDEA MI MONGA JSSKJS');
};

function mostrarMensaje() {
    var mensaje = document.getElementById("mensaje");
    if (mensaje.classList.contains("show")) {
        mensaje.classList.remove("show");
        mensaje.style.display = "none"; // Ocultar si ya está visible
    } else {
        mensaje.style.display = "block"; // Asegurar que esté visible
        setTimeout(function() {
            mensaje.classList.add("show");
        }, 100); // Agregar la clase después de un pequeño delay para la transición
    }
}

function reproducirCancion() {
    var cancion = document.getElementById("cancion");
    if (cancion.classList.contains("show")) {
        cancion.classList.remove("show");
        cancion.style.display = "none"; // Ocultar si ya está visible
    } else {
        cancion.style.display = "block"; // Asegurar que esté visible
        setTimeout(function() {
            cancion.classList.add("show");
        }, 100); // Agregar la clase después de un pequeño delay para la transición
    }
}
