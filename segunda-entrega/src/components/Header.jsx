import { useState } from "react";
import { NavLink } from "react-router-dom";

const enlaces = [
    { ruta: "/", texto: "Inicio" },
    { ruta: "/sobre-nosotros", texto: "Sobre nosotros" },
    { ruta: "/menu", texto: "Menú" },
    { ruta: "/reservas", texto: "Reservas" },
    { ruta: "/contacto", texto: "Contacto" }
];

/**
 * Cabecera con el título del sitio y la navegación. En pantallas chicas el menú se abre y se cierra con un botón.
 * @method Header
 * @return {JSX.Element} La cabecera
 */
const Header = () => {
    const [abierta, setAbierta] = useState(false);

    return (
        <header className="encabezado">
            <div className="encabezado-contenido">
                <h1 className="marca">34 Roof</h1>
                <button
                    id="boton-menu"
                    type="button"
                    aria-label="Abrir menú de navegación"
                    aria-expanded={abierta}
                    onClick={() => setAbierta(!abierta)}
                >
                    ☰
                </button>
                <nav
                    id="navegacion"
                    className={abierta ? "navegacion abierta" : "navegacion"}
                    aria-label="Navegación principal"
                >
                    {enlaces.map(({ ruta, texto }) => (
                        <NavLink
                            key={ruta}
                            to={ruta}
                            end={ruta === "/"}
                            className={({ isActive }) => (isActive ? "enlace-activo" : undefined)}
                            onClick={() => setAbierta(false)}
                        >
                            {texto}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
