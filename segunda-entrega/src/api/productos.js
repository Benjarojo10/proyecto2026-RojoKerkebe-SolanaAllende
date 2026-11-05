const URL_API = "http://localhost:3001";

export const obtenerProductos = async () => {
    const respuesta = await fetch(`${URL_API}/productos`);

    if (!respuesta.ok) {
        throw new Error("No se pudo cargar el menú.");
    }

    return respuesta.json();
};
