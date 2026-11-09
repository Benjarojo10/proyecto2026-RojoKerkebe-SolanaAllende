import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/Header.jsx";
import Footer from "@components/Footer.jsx";

/**
 * Estructura común de todas las páginas: cabecera, contenido de la ruta hija y pie. Vuelve al inicio de la página al cambiar de ruta.
 * @method Layout
 * @return {JSX.Element} El diseño general de la página
 */
const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="contenedor-pagina">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
