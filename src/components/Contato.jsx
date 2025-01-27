import './Contato.css'
function Contato() {
    return (
        <section id="contato">
            <form>
                <h2>Insira um Comentario</h2>

                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Digite o seu nome completo" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Digite seu email" required />


                        <label for="assunto">Assunto:</label>
                        <select name="assunto" id="assunto" required>
                            <option value="duvidas">Dúvidas</option>
                            <option value="recomendações">Recomendações</option>
                            <option value="outro">Outro</option>
                        </select>

                        <label for="mensagem">Mensagem:</label>
                        <textarea name="texto" id="texto" spellcheck="true" placeholder="Digite sua mensagem..."
                            required></textarea>

                        <div id='botao'>
                            <button type="submit">Enviar</button>
                        </div>

                    </form>
                </section>
                );
}

                export default Contato;