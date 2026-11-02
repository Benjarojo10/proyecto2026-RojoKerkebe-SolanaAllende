const Input = ({ id, etiqueta, valor, onChange, error, tipo = "text", ...resto }) => (
    <div className="campo">
        <label htmlFor={id}>{etiqueta}</label>
        <input
            id={id}
            type={tipo}
            value={valor}
            onChange={onChange}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
            {...resto}
        />
        {error && (
            <p id={`${id}-error`} className="mensaje-error" role="alert">
                {error}
            </p>
        )}
    </div>
);

export default Input;
