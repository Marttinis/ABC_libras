import './Conteudo.css'
function Conteudo() {
    return (
        <section id="conteudo">
            <article>
                <h2>O que é Alfabeto Manual ?</h2>
                <p>
                    É um recurso das línguas de sinais que utiliza as mãos para representar o alfabeto das línguas
                    orais. Cada letra ou número são representadas por configurações de mão específicas. O Alfabeto
                    Manual também é conhecido como Alfabeto Digital, Datilologia ou Dactilologia.

                </p>
                <div className="imagem">
                    <img id="imagem1"
                        src="https://academiadelibras.com/wp-content/webp-express/webp-images/uploads/2023/04/alfabeto-em-libras-para-imprimir-246x300.jpeg.webp"
                        alt="alfabeto manual em libras" title="alfabeto manual em libras" />
                    <a href="https://www.libras.com.br/alfabeto-manual">Leia mais</a>
                </div>


            </article>

            <article>
                <h2>Os cinco parâmetros da Libras</h2>
                <p>
                    Quando falamos sobre os articuladores da língua de sinais, certamente podemos pensar em mãos.
                    Mas na realidade, são usados como articuladores, além de mãos, outras partes do corpo, como a
                    cabeça, face e tronco.
                </p>
                 <ul id="lista1">
                    <li> A configuração da mão;</li>
                    <li>Ponto ou local de articulação;</li>
                    <li>O movimento;</li>
                    <li>Orientação/direcionalidade;</li>
                    <li>Expressão facial e/ou corporal;</li>
                </ul> 

                <div class="imagem">
                    <img id="imagem2"
                        src="https://www.libras.com.br/ct__images/artigos/os-5-parametros-da-libras/exemplos-de-configuracoes-de-mao-libras.png"
                        alt="configuração de mãos" />

                    <a href="https://www.libras.com.br/os-cinco-parametros-da-libras">Leia mais</a>
                </div>

            </article>

        </section>
    ); 
}

export default Conteudo; 