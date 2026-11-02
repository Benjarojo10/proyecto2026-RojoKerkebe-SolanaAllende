export const formatearPrecio = (valor) => `$${valor.toLocaleString("es-AR")}`;

export const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
