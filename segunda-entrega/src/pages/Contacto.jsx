import { useNavigate } from "react-router-dom";
import Boton from "@components/Boton.jsx";

/**
 * Página de contacto con la dirección, los horarios, los medios de contacto y el mapa.
 * @method Contacto
 * @return {JSX.Element} La página de contacto
 */
const Contacto = () => {
    const navigate = useNavigate();

    return (
        <section className="contacto">
            <h2>Contacto</h2>
            <p className="contacto-intro">
                Escribinos o visitanos. También podés consultarnos por eventos corporativos y sociales.
            </p>

            <div className="contacto-layout">
                <article className="contacto-datos">
                    <h3>Dirección</h3>
                    <p>
                        Humberto Primo 670, piso 34
                        <br />
                        Córdoba, Argentina
                    </p>

                    <h3>Horarios</h3>
                    <p>Desayunos y almuerzos · todos los días de 8 a 15 h</p>

                    <h3>Teléfono</h3>
                    <p>(0351) 555-0134</p>

                    <h3>Mail</h3>
                    <p>
                        <a href="mailto:hola@34roof.com">hola@34roof.com</a>
                    </p>

                    <h3>Redes</h3>
                    <p>
                        <a href="https://www.instagram.com/34roof/" target="_blank" rel="noopener noreferrer">
                            Instagram @34roof
                        </a>
                    </p>

                    <Boton onClick={() => navigate("/reservas")}>Reservar mesa</Boton>
                </article>

                <div className="mapa">
                    <iframe
                        title="Mapa con la ubicación de 34 Roof"
                        src="https://www.google.com/maps?q=Humberto+Primo+670,+C%C3%B3rdoba,+Argentina&output=embed"
                        width="600"
                        height="420"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
