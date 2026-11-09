/**
 * Botón genérico reutilizable.
 * @method Boton
 * @param {Object} props - Propiedades del botón
 * @param {React.ReactNode} props.children - Texto o contenido del botón
 * @param {Function} props.onClick - Función que se ejecuta al hacer clic
 * @param {string} props.tipo - Tipo del botón: button o submit
 * @param {string} props.variante - Estilo del botón: primario o secundario
 * @return {JSX.Element} El botón
 */
const Boton = ({ children, onClick, tipo = "button", variante = "primario" }) => (
    <button
        type={tipo}
        className={variante === "secundario" ? "boton boton-secundario" : "boton"}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Boton;
