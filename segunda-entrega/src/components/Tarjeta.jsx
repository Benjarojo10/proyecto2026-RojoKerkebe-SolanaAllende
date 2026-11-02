import { Link } from "react-router-dom";

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
