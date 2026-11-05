export const obtenerFechaHoy = () => {
    const ahora = new Date();
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const dia = String(ahora.getDate()).padStart(2, "0");
    return `${ahora.getFullYear()}-${mes}-${dia}`;
};

export const validarCampo = (campo, valor) => {
    switch (campo) {
        case "nombre":
            return /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]{2,}$/.test(valor.trim())
                ? ""
                : "Ingresá un nombre válido, solo con letras.";
        case "telefono":
            return /^\d{8,15}$/.test(valor.trim())
                ? ""
                : "Ingresá un teléfono válido, solo números (entre 8 y 15 dígitos).";
        case "fecha":
            return valor !== "" && valor >= obtenerFechaHoy()
                ? ""
                : "Ingresá una fecha válida, desde hoy en adelante.";
        case "hora":
            return valor !== "" ? "" : "Elegí un horario para tu reserva.";
        case "personas":
            return /^\d{1,2}$/.test(valor) && Number(valor) >= 1 && Number(valor) <= 12
                ? ""
                : "Ingresá una cantidad de personas entre 1 y 12.";
        default:
            return "";
    }
};
