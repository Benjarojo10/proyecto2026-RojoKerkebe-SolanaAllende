import { useEffect, useState } from "react";
import { obtenerProductos } from "@api/productos.js";
import Carrito from "@components/Carrito.jsx";
import Input from "@components/Input.jsx";
import Plato from "@components/Plato.jsx";
import { categorias } from "@data/categorias.js";
import { normalizar } from "@utils/formato.js";

const MAXIMO_POR_PRODUCTO = 10;

const leerPedidoGuardado = () => {
    try {
        return JSON.parse(localStorage.getItem("pedido")) ?? {};
    } catch {
        return {};
    }
};

const Menu = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("entradas");
    const [pedido, setPedido] = useState(leerPedidoGuardado);

    useEffect(() => {
        const cargar = async () => {
            try {
                setProductos(await obtenerProductos());
            } catch {
                setError("No pudimos cargar el menú. Revisá que el servidor esté encendido (npm run api).");
            }
        };
        cargar();
    }, []);

    useEffect(() => {
        localStorage.setItem("pedido", JSON.stringify(pedido));
    }, [pedido]);

    const texto = normalizar(busqueda);
    const visibles = productos.filter((producto) => {
        const coincideTexto = normalizar(producto.nombre).includes(texto);
        const coincideCategoria = texto !== "" || producto.categoria === categoria;
        return coincideTexto && coincideCategoria;
    });

    const cambiarCantidad = (id, cambio) => {
        const actual = pedido[id];

        if (cambio > 0 && actual.cantidad >= MAXIMO_POR_PRODUCTO) {
            alert(`Podés agregar hasta ${MAXIMO_POR_PRODUCTO} unidades por producto.`);
            return;
        }

        const nuevaCantidad = actual.cantidad + cambio;
        const nuevoPedido = { ...pedido, [id]: { ...actual, cantidad: nuevaCantidad } };

        if (nuevaCantidad <= 0) {
            delete nuevoPedido[id];
        }

        setPedido(nuevoPedido);
    };

    const agregar = (producto) => {
        if (pedido[producto.id]) {
            cambiarCantidad(producto.id, 1);
            return;
        }
        setPedido({
            ...pedido,
            [producto.id]: { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 }
        });
    };

    return (
        <>
            <section className="menu-encabezado">
                <h2>Nuestro menú</h2>
                <p>Desayunos y almuerzos de 8 a 15 h. Armá tu pedido y mirá cuánto sale tu cuenta.</p>
            </section>

            <div className="menu-layout">
                <section className="menu-platos">
                    <div className="buscador">
                        <Input
                            id="buscador"
                            etiqueta="Buscar plato"
                            valor={busqueda}
                            onChange={(evento) => setBusqueda(evento.target.value)}
                            size={30}
                            maxLength={30}
                            placeholder="Buscar plato (ej: ñoquis)"
                        />
                    </div>

                    <div className="pestanas">
                        {categorias.map(({ id, nombre }) => (
                            <button
                                key={id}
                                type="button"
                                className={categoria === id ? "pestana activa" : "pestana"}
                                onClick={() => {
                                    setCategoria(id);
                                    setBusqueda("");
                                }}
                            >
                                {nombre}
                            </button>
                        ))}
                    </div>

                    {error && <p className="mensaje-error" role="alert">{error}</p>}
                    {!error && productos.length > 0 && visibles.length === 0 && (
                        <p className="mensaje-vacio">No encontramos ese plato en el menú.</p>
                    )}

                    <div>
                        {visibles.map((producto) => (
                            <Plato key={producto.id} producto={producto} onAgregar={agregar} />
                        ))}
                    </div>
                </section>

                <Carrito pedido={pedido} onCambiar={cambiarCantidad} onVaciar={() => setPedido({})} />
            </div>
        </>
    );
};

export default Menu;
