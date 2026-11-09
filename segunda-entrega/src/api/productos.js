const URL_API = "http://localhost:3001";

/**
 * Consulta la lista de productos del menú en la API.
 * @method obtenerProductos
 * @return {Promise<Array>} Lista de productos
 */
export const obtenerProductos = async () => {
    const respuesta = await fetch(`${URL_API}/productos`);

    if (!respuesta.ok) {
        throw new Error("No se pudo cargar el menú.");
    }

    return respuesta.json();
};
