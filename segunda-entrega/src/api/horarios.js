const URL_API = "http://localhost:3001";

/**
 * Consulta los horarios de reserva en la API.
 * @method obtenerHorarios
 * @return {Promise<Array>} Lista de horarios
 */
export const obtenerHorarios = async () => {
    const respuesta = await fetch(`${URL_API}/horarios`);

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los horarios de reserva.");
    }

    return respuesta.json();
};
