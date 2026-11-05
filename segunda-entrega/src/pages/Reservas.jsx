import { useState } from "react";
import { crearReserva, obtenerReservas } from "@api/reservas.js";
import Boton from "@components/Boton.jsx";
import Input from "@components/Input.jsx";
import { horarios, MAXIMO_RESERVAS_POR_HORARIO } from "@data/horarios.js";
import { obtenerFechaHoy, validarCampo } from "@utils/validaciones.js";

const campoVacio = { nombre: "", telefono: "", fecha: "", hora: "", personas: "" };

const Reservas = () => {
    const [datos, setDatos] = useState(campoVacio);
    const [errores, setErrores] = useState(campoVacio);
    const [mensaje, setMensaje] = useState("");
    const [errorGeneral, setErrorGeneral] = useState("");

    const cambiar = (evento) => {
        const { id, value } = evento.target;
        setDatos({ ...datos, [id]: value });
        setErrores({ ...errores, [id]: validarCampo(id, value) });
        setMensaje("");
        setErrorGeneral("");
    };

    const confirmar = async (evento) => {
        evento.preventDefault();
        setMensaje("");
        setErrorGeneral("");

        const nuevosErrores = {};
        Object.keys(campoVacio).forEach((campo) => {
            nuevosErrores[campo] = validarCampo(campo, datos[campo]);
        });
        setErrores(nuevosErrores);

        if (Object.values(nuevosErrores).some((error) => error !== "")) {
            return;
        }

        try {
            const existentes = await obtenerReservas();
            const ocupadas = existentes.filter(
                (reserva) => reserva.fecha === datos.fecha && reserva.hora === datos.hora
            );

            if (ocupadas.length >= MAXIMO_RESERVAS_POR_HORARIO) {
                setErrores({ ...nuevosErrores, hora: "Sin turnos para esa fecha y horario. Probá con otro." });
                return;
            }

            await crearReserva({ ...datos, nombre: datos.nombre.trim(), personas: Number(datos.personas) });
            const fechaLegible = datos.fecha.split("-").reverse().join("/");
            setMensaje(
                `¡Listo, ${datos.nombre.trim()}! Reservamos tu mesa para ${datos.personas} ${
                    Number(datos.personas) === 1 ? "persona" : "personas"
                } el ${fechaLegible} a las ${datos.hora}. Te vamos a llamar al ${datos.telefono} para confirmar.`
            );
            setDatos(campoVacio);
            setErrores(campoVacio);
        } catch {
            setErrorGeneral("No pudimos guardar tu reserva. Revisá que el servidor esté encendido (npm run api).");
        }
    };

    return (
        <section className="reserva-completa">
            <h2>Reservá tu mesa</h2>
            <p className="reserva-subtitulo">
                Desayunos y almuerzos de 8 a 15 h · Cupos limitados por franja horaria.
            </p>

            <form className="formulario-reserva" onSubmit={confirmar} noValidate>
                <p className="nota-campos">Todos los campos son obligatorios.</p>

                <Input
                    id="nombre"
                    etiqueta="Nombre"
                    valor={datos.nombre}
                    onChange={cambiar}
                    error={errores.nombre}
                    size={30}
                    maxLength={40}
                    placeholder="Ej: Ana Pérez"
                />
                <Input
                    id="telefono"
                    etiqueta="Teléfono"
                    valor={datos.telefono}
                    onChange={cambiar}
                    error={errores.telefono}
                    size={15}
                    maxLength={15}
                    placeholder="Ej: 3511234567"
                />

                <div className="fila-doble">
                    <Input
                        id="fecha"
                        etiqueta="Fecha"
                        tipo="date"
                        valor={datos.fecha}
                        onChange={cambiar}
                        error={errores.fecha}
                        min={obtenerFechaHoy()}
                    />
                    <div className="campo">
                        <label htmlFor="hora">Hora</label>
                        <select
                            id="hora"
                            value={datos.hora}
                            onChange={cambiar}
                            aria-invalid={errores.hora ? "true" : "false"}
                            aria-describedby={errores.hora ? "hora-error" : undefined}
                        >
                            <option value="">Elegí un horario</option>
                            {horarios.map((horario) => (
                                <option key={horario} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </select>
                        {errores.hora && (
                            <p id="hora-error" className="mensaje-error" role="alert">
                                {errores.hora}
                            </p>
                        )}
                    </div>
                </div>

                <Input
                    id="personas"
                    etiqueta="Cantidad de personas"
                    valor={datos.personas}
                    onChange={cambiar}
                    error={errores.personas}
                    size={4}
                    maxLength={2}
                    placeholder="Ej: 4"
                />

                <Boton tipo="submit">Confirmar reserva</Boton>

                {errorGeneral && <p className="mensaje-error" role="alert">{errorGeneral}</p>}
                {mensaje && <p className="mensaje-reserva" role="status">{mensaje}</p>}
            </form>
        </section>
    );
};

export default Reservas;
