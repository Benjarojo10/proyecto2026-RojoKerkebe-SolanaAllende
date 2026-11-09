/**
 * Da formato de precio en pesos con separador de miles.
 * @method formatearPrecio
 * @param {number} valor - Monto a formatear
 * @return {string} El monto con signo pesos, por ejemplo "$8.500"
 */
export const formatearPrecio = (valor) => `$${valor.toLocaleString("es-AR")}`;

/**
 * Pasa un texto a minúsculas y le quita los acentos y la ñ para comparar sin errores.
 * @method normalizar
 * @param {string} texto - Texto a normalizar
 * @return {string} El texto sin acentos, en minúsculas y sin espacios en los extremos
 */
export const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
