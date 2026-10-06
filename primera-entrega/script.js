/**
 * Muestra u oculta el menú de navegación en pantallas chicas.
 * @method alternarMenu
 * @return {void}
 */
const alternarMenu = () => {
    const navegacion = document.getElementById("navegacion");
    navegacion.classList.toggle("abierta");
};

/**
 * Valida la fecha y la cantidad de personas de la reserva rápida.
 * Si algún valor es incorrecto avisa con un alert y blanquea el campo.
 * Si todo es correcto lleva al usuario a la página de reservas.
 * @method reservaRapida
 * @return {void}
 */
const reservaRapida = () => {
    const campoFecha = document.getElementById("fecha-rapida");
    const campoPersonas = document.getElementById("personas-rapida");
    const ahora = new Date();
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const dia = String(ahora.getDate()).padStart(2, "0");
    const hoy = `${ahora.getFullYear()}-${mes}-${dia}`;
    const personas = Number(campoPersonas.value);

    if (campoFecha.value === "" || campoFecha.value < hoy) {
        alert("Ingresá una fecha válida, desde hoy en adelante.");
        campoFecha.value = "";
        return;
    }

    if (!Number.isInteger(personas) || personas < 1 || personas > 12) {
        alert("Ingresá una cantidad de personas entre 1 y 12.");
        campoPersonas.value = "";
        return;
    }

    window.location.href = "reservas.html";
};

const pedido = {};
let categoriaActiva = "entradas";

/**
 * Pasa un texto a minúsculas y le quita los acentos y la ñ para comparar sin errores.
 * @method normalizar
 * @param {string} texto - Texto a normalizar
 * @return {string} El texto sin acentos, en minúsculas y sin espacios en los extremos
 */
const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

/**
 * Da formato de precio en pesos con separador de miles.
 * @method formatearPrecio
 * @param {number} valor - Monto a formatear
 * @return {string} El monto con signo pesos, por ejemplo "$8.500"
 */
const formatearPrecio = (valor) => `$${valor.toLocaleString("es-AR")}`;

/**
 * Muestra solo los platos que coinciden con la búsqueda y la categoría elegida.
 * Si hay texto en el buscador se busca en todas las categorías.
 * Si no hay coincidencias muestra un mensaje al usuario.
 * @method mostrarPlatos
 * @return {void}
 */
const mostrarPlatos = () => {
    const platos = document.querySelectorAll(".plato");
    const texto = normalizar(document.getElementById("buscador").value);
    let visibles = 0;

    platos.forEach((plato) => {
        const coincideTexto = normalizar(plato.dataset.nombre).includes(texto);
        const coincideCategoria = texto !== "" || plato.dataset.categoria === categoriaActiva;
        const mostrar = coincideTexto && coincideCategoria;
        plato.classList.toggle("oculto", !mostrar);
        if (mostrar) {
            visibles++;
        }
    });

    document.getElementById("mensaje-vacio").classList.toggle("oculto", visibles > 0);
};

/**
 * Cambia la categoría activa del menú, limpia el buscador y actualiza la lista.
 * @method cambiarCategoria
 * @param {string} categoria - Categoría a mostrar (entradas, principales, postres o bebidas)
 * @param {HTMLElement} boton - Pestaña que se presionó
 * @return {void}
 */
const cambiarCategoria = (categoria, boton) => {
    categoriaActiva = categoria;
    document.querySelectorAll(".pestana").forEach((pestana) => pestana.classList.remove("activa"));
    boton.classList.add("activa");
    document.getElementById("buscador").value = "";
    mostrarPlatos();
};

/**
 * Calcula la cantidad de items, el subtotal, la propina y el total del pedido.
 * @method calcularTotales
 * @return {{cantidad: number, subtotal: number, propina: number, total: number}} Totales del pedido
 */
const calcularTotales = () => {
    const porcentaje = Number(document.getElementById("propina").value);
    let cantidad = 0;
    let subtotal = 0;

    Object.values(pedido).forEach((item) => {
        cantidad += item.cantidad;
        subtotal += item.precio * item.cantidad;
    });

    const propina = Math.round(subtotal * porcentaje / 100);
    return { cantidad, subtotal, propina, total: subtotal + propina };
};

/**
 * Dibuja el pedido en pantalla y muestra los totales calculados.
 * @method actualizarPedido
 * @return {void}
 */
const actualizarPedido = () => {
    const totales = calcularTotales();
    const items = Object.entries(pedido).map(([id, item]) => `
        <li class="item-pedido">
            <span>${item.nombre}</span>
            <span class="item-controles">
                <button type="button" class="boton-cantidad" aria-label="Quitar uno" onclick="cambiarCantidad('${id}', -1)">-</button>
                <span>${item.cantidad}</span>
                <button type="button" class="boton-cantidad" aria-label="Agregar uno" onclick="cambiarCantidad('${id}', 1)">+</button>
            </span>
            <span class="item-precio">${formatearPrecio(item.precio * item.cantidad)}</span>
        </li>`).join("");

    document.getElementById("lista-pedido").innerHTML = items;
    document.getElementById("pedido-vacio").classList.toggle("oculto", totales.cantidad > 0);
    document.getElementById("subtotal").textContent = formatearPrecio(totales.subtotal);
    document.getElementById("monto-propina").textContent = formatearPrecio(totales.propina);
    document.getElementById("total").textContent = formatearPrecio(totales.total);
    document.getElementById("carrito-cantidad").textContent = totales.cantidad === 1 ? "1 item" : `${totales.cantidad} items`;
    document.getElementById("carrito-total-barra").textContent = `Total: ${formatearPrecio(totales.total)}`;
};

/**
 * Agrega un plato al pedido, o suma una unidad si ya estaba.
 * @method agregarAlPedido
 * @param {HTMLElement} boton - Botón "Agregar" dentro del plato elegido
 * @return {void}
 */
const agregarAlPedido = (boton) => {
    const plato = boton.closest(".plato");
    const id = plato.dataset.id;

    if (pedido[id]) {
        pedido[id].cantidad += 1;
    } else {
        pedido[id] = {
            nombre: plato.dataset.nombre,
            precio: Number(plato.dataset.precio),
            cantidad: 1
        };
    }

    actualizarPedido();
};

/**
 * Suma o resta unidades de un plato del pedido. Si llega a cero lo quita.
 * @method cambiarCantidad
 * @param {string} id - Identificador del plato
 * @param {number} cambio - 1 para sumar una unidad, -1 para restar una
 * @return {void}
 */
const cambiarCantidad = (id, cambio) => {
    pedido[id].cantidad += cambio;

    if (pedido[id].cantidad <= 0) {
        delete pedido[id];
    }

    actualizarPedido();
};

/**
 * Elimina todos los platos del pedido.
 * @method vaciarPedido
 * @return {void}
 */
const vaciarPedido = () => {
    Object.keys(pedido).forEach((id) => delete pedido[id]);
    actualizarPedido();
};

/**
 * Abre o cierra el detalle del pedido en pantallas chicas.
 * @method alternarCarrito
 * @param {HTMLElement} boton - Botón que abre y cierra el pedido
 * @return {void}
 */
const alternarCarrito = (boton) => {
    const carrito = document.getElementById("carrito");
    carrito.classList.toggle("abierto");
    boton.textContent = carrito.classList.contains("abierto") ? "Cerrar" : "Ver pedido";
};
/**