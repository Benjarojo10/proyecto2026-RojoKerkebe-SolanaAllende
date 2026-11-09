/**
 * Campo de formulario genérico con su etiqueta y un mensaje de error accesible.
 * @method Input
 * @param {Object} props - Propiedades del campo
 * @param {string} props.id - Identificador del campo, usado por la etiqueta
 * @param {string} props.etiqueta - Texto de la etiqueta
 * @param {string} props.valor - Valor actual del campo
 * @param {Function} props.onChange - Función que se ejecuta al cambiar el valor
 * @param {string} props.error - Mensaje de error, vacío si el valor es correcto
 * @param {string} props.tipo - Tipo del input, por defecto text
 * @return {JSX.Element} El campo con su etiqueta
 */
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
