const URL_API = "http://localhost:3001";

/**
 * Consulta las categorías del menú en la API.
 * @method obtenerCategorias
 * @return {Promise<Array>} Lista de categorías
 */
export const obtenerCategorias = async () => {
    const respuesta = await fetch(`${URL_API}/categorias`);

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar las categorías del menú.");
    }

    return respuesta.json();
};
