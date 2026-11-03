const API_URL = "http://localhost:3000/favoritos";

const titulo = document.querySelector("#page-title");
const conteudo = document.querySelector("#page-content");

async function carregarFavoritos() {
    try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();

        titulo.textContent = "Minhas músicas favoritas";

        conteudo.innerHTML = `
            <section class="favorites-section">
                <div class="favorites-grid">

                    ${dados.map(favorito => `
                        <article class="favorite-card">

                            <div class="favorite-image">
                                <img 
                                    src="${favorito.capa}" 
                                    alt="${favorito.nome}"
                                >
                            </div>

                            <div class="favorite-info">
                                <h3>${favorito.nome}</h3>
                                <p>${favorito.artista}</p>

                                <div class="favorite-details">
                                    <span>${favorito.ano}</span>
                                    <span>${favorito.genero}</span>
                                </div>
                            </div>

                        </article>
                    `).join("")}

                </div>
            </section>
        `;

    } catch (erro) {
        console.error("Erro ao carregar favoritos:", erro);
        titulo.textContent = "Ops! Ocorreu um erro.";
    }
}

carregarFavoritos();