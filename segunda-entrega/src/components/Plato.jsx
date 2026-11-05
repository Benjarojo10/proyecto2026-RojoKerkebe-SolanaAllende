import Boton from "@components/Boton.jsx";
import { obtenerImagen } from "@utils/imagenes.js";
import { formatearPrecio } from "@utils/formato.js";

const Plato = ({ producto, onAgregar }) => (
    <article className="plato">
        <img className="plato-foto" src={obtenerImagen(producto.imagen)} alt={producto.nombre} />
        <div className="plato-info">
            <h3>{producto.nombre}</h3>
            <p>{producto.description}</p>
        </div>
        <div className="plato-accion">
            <span className="precio">{formatearPrecio(producto.precio)}</span>
            <Boton onClick={() => onAgregar(producto)}>+ Agregar</Boton>
        </div>
    </article>
);

export default Plato;
