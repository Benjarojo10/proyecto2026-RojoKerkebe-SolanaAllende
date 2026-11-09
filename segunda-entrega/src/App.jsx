import { Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout.jsx";
import Inicio from "@pages/Inicio.jsx";
import SobreNosotros from "@pages/SobreNosotros.jsx";
import Menu from "@pages/Menu.jsx";
import Reservas from "@pages/Reservas.jsx";
import Contacto from "@pages/Contacto.jsx";

/**
 * Define las rutas del sitio. Todas las páginas se muestran dentro del diseño común.
 * @method App
 * @return {JSX.Element} Las rutas de la aplicación
 */
const App = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="sobre-nosotros" element={<SobreNosotros />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservas" element={<Reservas />} />
            <Route path="contacto" element={<Contacto />} />
        </Route>
    </Routes>
);

export default App;
