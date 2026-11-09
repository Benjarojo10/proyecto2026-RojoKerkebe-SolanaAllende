import Boton from "@components/Boton.jsx";
import { obtenerImagen } from "@utils/imagenes.js";
import { formatearPrecio } from "@utils/formato.js";

/**
 * Muestra un plato del menú con su foto, descripción, marca, precio y el botón para agregarlo al pedido.
 * @method Plato
 * @param {Object} props - Propiedades del plato
 * @param {Object} props.producto - Producto del menú
 * @param {Function} props.onAgregar - Función que agrega el producto al pedido
 * @return {JSX.Element} El plato
 */
const Plato = ({ producto, onAgregar }) => (
    <article className="plato">
        <img className="plato-foto" src={obtenerImagen(producto.imagen)} alt={producto.nombre} />
        <div className="plato-info">
            <h3>{producto.nombre}</h3>
            <p>{producto.description}</p>
            <p className="plato-marca">
                {producto.marca} ·{" "}
                <a href={producto.web} target="_blank" rel="noopener noreferrer">
                    Ver más
                </a>
            </p>
        </div>
        <div className="plato-accion">
            <span className="precio">{formatearPrecio(producto.precio)}</span>
            <Boton onClick={() => onAgregar(producto)}>+ Agregar</Boton>
        </div>
    </article>
);

export default Plato;
