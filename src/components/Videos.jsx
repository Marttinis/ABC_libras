import './Videos.css'
function Videos() {
    return (
        <section id="videos">

            <h2>Alfabeto em Libras</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fYaXJXf60gU?si=67LzAfNso6rKfP71"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                Video de apresentação do alfabeto em libras, perceba que algumas letras exigem movimentos
                especificos, boa aula.
            </p>

            <h2>Fundamentos em Libras</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H_SRjNgfW14?si=OC_fB4nqMiQ5lBQ9"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                Aula de fundamentos em libras
            </p>
        </section>
    );
}

export default Videos;