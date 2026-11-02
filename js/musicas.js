const API_URL = "http://localhost:3000/musicas";

const titulo = document.querySelector("#page-title");
const conteudo = document.querySelector("#page-content");

async function carregarMusicas() {
    try {
        const resposta = await fetch(API_URL);
        const musicas = await resposta.json();

        titulo.textContent = "Biblioteca musical";

        conteudo.innerHTML = `
            <div class="music-grid">
                ${musicas.map(musica => `
                    <article class="music-card">
                        <img 
                            src="${musica.capa}" 
                            alt="Capa da música ${musica.nome}"
                        >

                        <div class="music-info">
                            <h2>${musica.nome}</h2>
                            <p>${musica.cantor}</p>

                            <div class="music-details">
                                <span>${musica.ano}</span>
                                <span>${musica.genero}</span>
                            </div>
                        </div>
                    </article>
                `).join("")}
            </div>
        `;

    } catch (erro) {
        console.error("Erro ao carregar músicas:", erro);
        titulo.textContent = "Ops! Ocorreu um erro.";
        conteudo.textContent = "Não foi possível carregar as músicas.";
    }
}

carregarMusicas();