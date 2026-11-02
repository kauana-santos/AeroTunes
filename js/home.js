const API_URL = "http://localhost:3000/home";

const titulo = document.querySelector("#page-title");
const conteudo = document.querySelector("#page-content");

async function carregarHome() {
    try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();

        titulo.textContent = dados.titulo;

        conteudo.innerHTML = `
            <section class="content-section">
                <h2>${dados.sobre.titulo}</h2>
                <p>${dados.sobre.descricao}</p>
                <p>${dados.sobre.complemento}</p>
            </section>

            <section class="content-section">
                <h2>${dados.proposta.titulo}</h2>
                <p>${dados.proposta.descricao}</p>
                <p>${dados.proposta.complemento}</p>
            </section>

            <section class="content-section">
                <h2>${dados.explorar.titulo}</h2>
                <p>${dados.explorar.descricao}</p>
            </section>

            <section class="content-section">
                <h2>${dados.generos.titulo}</h2>
                <p>${dados.generos.descricao}</p>

                <div class="genre-list">
                    ${dados.generos.estilos.map(estilo => `
                        <span class="genre-tag">${estilo}</span>
                    `).join("")}
                </div>
            </section>

            <section class="final-message">
                <h2>${dados.mensagemFinal.titulo}</h2>
                <p>${dados.mensagemFinal.descricao}</p>
                <p>${dados.mensagemFinal.chamada}</p>
            </section>
        `;

    } catch (erro) {
        console.error("Erro ao carregar a página:", erro);
        titulo.textContent = "Ops! Ocorreu um erro.";
    }
}

carregarHome();