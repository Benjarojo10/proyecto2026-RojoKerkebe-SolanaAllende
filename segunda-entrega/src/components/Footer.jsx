/**
 * Pie de página con el logo, la dirección, los horarios y el enlace a Instagram.
 * @method Footer
 * @return {JSX.Element} El pie de página
 */
const Footer = () => (
    <footer className="pie">
        <div className="pie-contenido">
            <img className="pie-logo" src="/logo-34-roof.svg" alt="Logo de 34 Roof" width="48" height="48" />
            <p>Humberto Primo 670, piso 34 · Córdoba</p>
            <p>Desayunos y almuerzos · 8 a 15 h</p>
            <a href="https://www.instagram.com/34roof/" target="_blank" rel="noopener noreferrer">
                Instagram @34roof
            </a>
        </div>
    </footer>
);

export default Footer;
