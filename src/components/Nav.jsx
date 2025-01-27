import './Nav.css'
function Nav() {
    return (
        <nav>
        {/* <img id="logo" src="assets\images\imagem_2024-11-05_110325305-removebg-preview.png" alt="logo"> */}

        <ul className="navbar">
            <li><a className="linkbar" href="#inicio">Início</a></li>
            <li><a className="linkbar" href="#conteudo">Conteúdo</a></li>
            <li><a className="linkbar" href="#videos">Vídeos</a></li>
            <li><a className="linkbar" href="#especialistas">Especialistas</a></li>
            <li><a className="linkbar" href="#contato">Contato</a></li>
        </ul>

        <form>
            <input className="pesquisa" type="text" placeholder="procurar..." required />  <button type="submit"
                className="pesquisa" id="botao"><i className="fas fa-search"></i> </button>
        </form>
    </nav>
    );
}

export default Nav;