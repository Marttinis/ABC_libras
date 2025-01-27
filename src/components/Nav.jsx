import './Nav.css'
function Nav() {
    return (
        <div id="div">
            <nav>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

                <img id="logo" src="src\assets\images\imagem_2024-11-05_110325305-removebg-preview.png" alt="logo" title='ABC Libras' />

                <ul className="navbar">
                    <li><a className="linkbar" href="/">Sobre</a></li>
                    <li><a className="linkbar" href="conteudos">Conteúdo</a></li>
                    <li><a className="linkbar" href="videos">Vídeos</a></li>
                    <li><a className="linkbar" href="especialistas">Especialistas</a></li>
                    <li><a className="linkbar" href="contato">Contato</a></li>
                </ul>

                <form>
                    <input className="pesquisa" type="text" placeholder="procurar..." required />  <button type="submit"
                        className="pesquisa" id="botao"><i className="fas fa-search"></i> </button>
                </form>
            </nav>
        </div>
    );
}

export default Nav;