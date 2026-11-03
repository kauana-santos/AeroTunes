const API_URL = "http://localhost:3000/albuns";

const titulo = document.querySelector("#page-title");
const conteudo = document.querySelector("#page-content");

async function carregarAlbuns() {
    try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();

        titulo.textContent = "Álbuns";

        conteudo.innerHTML = `
            <section class="albums-section">

                <div class="albums-grid">

                    ${dados.map(album => `
                        <article class="album-card">

                            <div class="album-image">
                                <img src="${album.capa}" alt="Capa do álbum ${album.nome}">
                            </div>

                            <div class="album-info">
                                <h3>${album.nome}</h3>

                                <p>${album.artista}</p>

                                <div class="album-details">
                                    <span>${album.ano}</span>
                                    <span>${album.genero}</span>
                                </div>

                                <p class="album-description">
                                    ${album.descricao}
                                </p>
                            </div>
                        </article>
                    `).join("")}
                </div>
            </section>
        `;

    } catch (erro) {
        console.error("Erro ao carregar álbuns:", erro);
        titulo.textContent = "Ops! Ocorreu um erro.";
    }
}

carregarAlbuns();