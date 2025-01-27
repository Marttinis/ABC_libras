import './Footer.css'

function Footer() {
    return (
        <footer>

            <ul>
                <li><a href="">Politicas de privacidade</a></li>
                <li><a href="">Termos de Uso</a></li>
                <li><a href="">Ajuda</a></li>
            </ul>

            <div className="social-media">
                <a href="https://facebook.com" target="_blank">Facebook</a>
                <a href="https://twitter.com" target="_blank">Twitter</a>
                <a href="https://instagram.com" target="_blank">Instagram</a>
            </div>

            {/* <h2>contatos</h2>
            <p>85 99123-4567</p>
            <p>gabrielmartins23445@gmail.com</p> */}

            <p>&copy; 2024 ABC em Libras. Todos os direitos reservados.</p>

        </footer>
    );
}

export default Footer;