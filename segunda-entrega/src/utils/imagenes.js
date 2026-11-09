const imagenes = import.meta.glob("../assets/*.jpg", { eager: true, import: "default" });

/**
 * Busca una imagen de la carpeta assets por su nombre de archivo.
 * @method obtenerImagen
 * @param {string} nombre - Nombre del archivo, por ejemplo provoleta.jpg
 * @return {string|undefined} La ruta de la imagen, o undefined si no existe
 */
export const obtenerImagen = (nombre) => imagenes[`../assets/${nombre}`];
