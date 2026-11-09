import { Link } from "react-router-dom";

/**
 * Tarjeta con imagen, título, texto y un enlace a otra página.
 * @method Tarjeta
 * @param {Object} props - Propiedades de la tarjeta
 * @param {string} props.imagen - Ruta de la imagen
 * @param {string} props.alt - Texto alternativo de la imagen
 * @param {string} props.titulo - Título de la tarjeta
 * @param {string} props.texto - Descripción de la tarjeta
 * @param {string} props.ruta - Ruta a la que lleva el enlace
 * @param {string} props.enlace - Texto del enlace
 * @return {JSX.Element} La tarjeta
 */
const Tarjeta = ({ imagen, alt, titulo, texto, ruta, enlace }) => (
    <article className="tarjeta">
        <img src={imagen} alt={alt} />
        <div className="tarjeta-texto">
            <h2>{titulo}</h2>
            <p>{texto}</p>
            <Link to={ruta}>{enlace}</Link>
        </div>
    </article>
);

export default Tarjeta;
