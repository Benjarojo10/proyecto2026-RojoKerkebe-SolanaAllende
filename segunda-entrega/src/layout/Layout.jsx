import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/Header.jsx";
import Footer from "@components/Footer.jsx";

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
