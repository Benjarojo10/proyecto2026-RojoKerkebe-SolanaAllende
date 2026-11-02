const imagenes = import.meta.glob("../assets/*.jpg", { eager: true, import: "default" });

export const obtenerImagen = (nombre) => imagenes[`../assets/${nombre}`];
