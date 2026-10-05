/**
 * Muestra u oculta el menú de navegación en pantallas chicas.
 * @method alternarMenu
 * @return {void}
 */
const alternarMenu = () => {
    const navegacion = document.getElementById("navegacion");
    navegacion.classList.toggle("abierta");
};

/**
 * Valida la fecha y la cantidad de personas de la reserva rápida.
 * Si algún valor es incorrecto avisa con un alert y blanquea el campo.
 * Si todo es correcto lleva al usuario a la página de reservas.
 * @method reservaRapida
 * @return {void}
 */
const reservaRapida = () => {
    const campoFecha = document.getElementById("fecha-rapida");
    const campoPersonas = document.getElementById("personas-rapida");
    const ahora = new Date();
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const dia = String(ahora.getDate()).padStart(2, "0");
    const hoy = `${ahora.getFullYear()}-${mes}-${dia}`;
    const personas = Number(campoPersonas.value);

    if (campoFecha.value === "" || campoFecha.value < hoy) {
        alert("Ingresá una fecha válida, desde hoy en adelante.");
        campoFecha.value = "";
        return;
    }

    if (!Number.isInteger(personas) || personas < 1 || personas > 12) {
        alert("Ingresá una cantidad de personas entre 1 y 12.");
        campoPersonas.value = "";
        return;
    }

    window.location.href = "reservas.html";
};
