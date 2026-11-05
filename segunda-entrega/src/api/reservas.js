const URL_API = "http://localhost:3001";

export const obtenerReservas = async () => {
    const respuesta = await fetch(`${URL_API}/reservas`);

    if (!respuesta.ok) {
        throw new Error("No se pudieron consultar las reservas.");
    }

    return respuesta.json();
};

export const crearReserva = async (reserva) => {
    const respuesta = await fetch(`${URL_API}/reservas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reserva)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo guardar la reserva.");
    }

    return respuesta.json();
};
