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
