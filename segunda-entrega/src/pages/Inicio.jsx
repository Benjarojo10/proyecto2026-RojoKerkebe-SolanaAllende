import { useNavigate } from "react-router-dom";
import Boton from "@components/Boton.jsx";
import Tarjeta from "@components/Tarjeta.jsx";
import vistaPanoramica from "@assets/vista-panoramica-terraza.jpg";
import salon from "@assets/salon-sillones-ventanales.jpg";
import chef from "@assets/chef-emplatando-pasta.jpg";
import pasillo from "@assets/pasillo-ventanales-ciudad.jpg";

const Inicio = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero">
                <img src={vistaPanoramica} alt="Terraza de 34 Roof con ventanales, olivos y vista panorámica" />
                <div className="hero-texto">
                    <h2>Mirador 360°</h2>
                    <p>Desayunos y almuerzos con vista panorámica de Córdoba, en el piso 34.</p>
                    <Boton onClick={() => navigate("/reservas")}>Reservar ahora</Boton>
                </div>
            </section>

            <section className="tarjetas">
                <Tarjeta
                    imagen={salon}
                    alt="Salón de 34 Roof con sillones y ventanales sobre la ciudad"
                    titulo="Sobre nosotros"
                    texto="Un espacio pensado con materiales nobles para disfrutar la ciudad desde las alturas."
                    ruta="/sobre-nosotros"
                    enlace="Conocé el lugar"
                />
                <Tarjeta
                    imagen={chef}
                    alt="Chef de 34 Roof emplatando una pasta"
                    titulo="Nuestro menú"
                    texto="Desayunos y almuerzos de 8 a 15 h. Armá tu pedido y mirá cuánto sale tu cuenta."
                    ruta="/menu"
                    enlace="Ver el menú"
                />
                <Tarjeta
                    imagen={pasillo}
                    alt="Pasillo de 34 Roof con ventanales y vista de la ciudad"
                    titulo="Ubicación"
                    texto="Humberto Primo 670, piso 34, Córdoba."
                    ruta="/contacto"
                    enlace="Cómo llegar"
                />
            </section>

            <section className="reserva-rapida">
                <h2>Reservá tu mesa</h2>
                <p>Elegí la fecha y la cantidad de personas en nuestro formulario.</p>
                <Boton onClick={() => navigate("/reservas")}>Reservar</Boton>
            </section>
        </>
    );
};

export default Inicio;
