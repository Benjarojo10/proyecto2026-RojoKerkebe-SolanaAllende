import { useState } from "react";
import Boton from "@components/Boton.jsx";
import { formatearPrecio } from "@utils/formato.js";

const Carrito = ({ pedido, onCambiar, onVaciar }) => {
    const [abierto, setAbierto] = useState(false);
    const [propina, setPropina] = useState(0);

    const items = Object.values(pedido);
    const cantidad = items.reduce((suma, item) => suma + item.cantidad, 0);
    const subtotal = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    const montoPropina = Math.round((subtotal * propina) / 100);
    const total = subtotal + montoPropina;

    return (
        <aside className={abierto ? "carrito abierto" : "carrito"}>
            <div className="carrito-barra">
                <div>
                    <span>{cantidad === 1 ? "1 ítem" : `${cantidad} ítems`}</span>
                    <strong>Total: {formatearPrecio(total)}</strong>
                </div>
                <Boton onClick={() => setAbierto(!abierto)}>{abierto ? "Cerrar" : "Ver pedido"}</Boton>
            </div>

            <div className="carrito-detalle">
                <h2>Tu pedido</h2>
                <ul className="lista-pedido">
                    {items.map((item) => (
                        <li key={item.id} className="item-pedido">
                            <span>{item.nombre}</span>
                            <span className="item-controles">
                                <button
                                    type="button"
                                    className="boton-cantidad"
                                    aria-label={`Quitar uno de ${item.nombre}`}
                                    onClick={() => onCambiar(item.id, -1)}
                                >
                                    -
                                </button>
                                <span>{item.cantidad}</span>
                                <button
                                    type="button"
                                    className="boton-cantidad"
                                    aria-label={`Agregar uno de ${item.nombre}`}
                                    onClick={() => onCambiar(item.id, 1)}
                                >
                                    +
                                </button>
                            </span>
                            <span className="item-precio">{formatearPrecio(item.precio * item.cantidad)}</span>
                        </li>
                    ))}
                </ul>
                {cantidad === 0 && <p className="texto-vacio">Todavía no agregaste nada.</p>}

                <div className="campo">
                    <label htmlFor="propina">Propina</label>
                    <select id="propina" value={propina} onChange={(evento) => setPropina(Number(evento.target.value))}>
                        <option value={0}>Sin propina</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <p className="linea-total">
                    <span>Subtotal</span>
                    <span>{formatearPrecio(subtotal)}</span>
                </p>
                <p className="linea-total">
                    <span>Propina</span>
                    <span>{formatearPrecio(montoPropina)}</span>
                </p>
                <p className="linea-total total">
                    <span>Total</span>
                    <span>{formatearPrecio(total)}</span>
                </p>

                <Boton variante="secundario" onClick={onVaciar}>Vaciar pedido</Boton>
            </div>
        </aside>
    );
};

export default Carrito;
