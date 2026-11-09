import { useNavigate } from "react-router-dom";
import Boton from "@components/Boton.jsx";
import Tarjeta from "@components/Tarjeta.jsx";
import cartel from "@assets/cartel-34-roof-madera.jpg";
import salon from "@assets/salon-sillones-ventanales.jpg";
import chef from "@assets/chef-emplatando-pasta.jpg";
import vistaPanoramica from "@assets/vista-panoramica-terraza.jpg";

const materiales = [
    { nombre: "Madera", detalle: "Tablas rústicas en muros y mobiliario." },
    { nombre: "Plantas", detalle: "Muros verdes, olivos y pastos en la terraza." },
    { nombre: "Piedra", detalle: "Macetas y detalles de textura natural." },
    { nombre: "Cuero", detalle: "Tonos cálidos y superficies suaves." },
    { nombre: "Cemento", detalle: "Barras y pisos de acabado artesanal." }
];

/**
 * Página con el concepto del restaurante, sus materiales y lo que ofrece.
 * @method SobreNosotros
 * @return {JSX.Element} La página sobre nosotros
 */
const SobreNosotros = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero">
                <img src={cartel} alt="Cartel de 34 Roof sobre paredes de madera, junto a la barra de bebidas" />
                <div className="hero-texto">
                    <h2>Sobre nosotros</h2>
                    <p>Un mirador 360° en el piso 34, rodeado de materiales nobles.</p>
                </div>
            </section>

            <section className="bloque-texto">
                <h2>El concepto</h2>
                <p>
                    34 Roof es un restaurante en las alturas de Córdoba, en el piso 34, con vista panorámica de la
                    ciudad en todas las direcciones. Todo el espacio se pensó para transmitir la sensación de estar
                    rodeado de naturaleza.
                </p>
                <p>
                    Por eso elegimos materiales que se ven y se tocan: madera, plantas, piedra, cuero y cemento. Sus
                    tonos (verdes, beige y chocolate) están presentes en cada rincón del lugar.
                </p>
            </section>

            <section className="bloque-texto">
                <h2>Los materiales</h2>
                <ul className="materiales">
                    {materiales.map(({ nombre, detalle }) => (
                        <li key={nombre}>
                            <strong>{nombre}</strong>
                            <span>{detalle}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bloque-texto">
                <h2>Qué vas a encontrar</h2>
            </section>

            <section className="tarjetas">
                <Tarjeta
                    imagen={chef}
                    alt="Chef de 34 Roof emplatando una pasta"
                    titulo="Cocina"
                    texto="Desayunos y almuerzos de 8 a 15 h, con platos pensados para disfrutar sin apuro."
                    ruta="/menu"
                    enlace="Ver el menú"
                />
                <Tarjeta
                    imagen={salon}
                    alt="Salón de 34 Roof con sillones y ventanales sobre la ciudad"
                    titulo="Eventos"
                    texto="Un espacio para eventos corporativos y sociales, con la ciudad de fondo."
                    ruta="/contacto"
                    enlace="Consultanos"
                />
                <Tarjeta
                    imagen={vistaPanoramica}
                    alt="Terraza de 34 Roof con ventanales, olivos y vista panorámica"
                    titulo="Terraza"
                    texto="Ventanales de punta a punta y una terraza para mirar Córdoba desde las alturas."
                    ruta="/reservas"
                    enlace="Reservar mesa"
                />
            </section>

            <section className="reserva-rapida">
                <h2>Te esperamos</h2>
                <p>Todos los días de 8 a 15 h. Código de vestimenta: smart casual.</p>
                <Boton onClick={() => navigate("/reservas")}>Reservar ahora</Boton>
            </section>
        </>
    );
};

export default SobreNosotros;
