const URL_API = "http://localhost:3001";

/**
 * Consulta las reservas guardadas en la API.
 * @method obtenerReservas
 * @return {Promise<Array>} Lista de reservas
 */
export const obtenerReservas = async () => {
    const respuesta = await fetch(`${URL_API}/reservas`);

    if (!respuesta.ok) {
        throw new Error("No se pudieron consultar las reservas.");
    }

    return respuesta.json();
};

/**
 * Guarda una reserva nueva en la API.
 * @method crearReserva
 * @param {Object} reserva - Datos de la reserva: nombre, teléfono, fecha, hora y personas
 * @return {Promise<Object>} La reserva guardada, con su id
 */
export const crearReserva = async (reserva) => {
    const respuesta = await fetch(`${URL_API}/reservas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reserva)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo guardar la reserva.");
    }

    return respuesta.json();
};
