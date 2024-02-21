//JS DA PAGINA "INTEGRANTES"

// JavaScript para interação com áreas clicáveis na imagem da árvore genealógica

// Adiciona evento de mouseover para cada área clicável
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseover', function() {
        exibirPopup(this); // Chamada da função para exibir o popup
    });
});

// Função para exibir o popup com a imagem e descrição do integrante
function exibirPopup(area) {
    // Define a posição do popup com base no centro da tela
    const popup = document.getElementById('popup');
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const popupLeft = (windowWidth - popupWidth) / 2;
    const popupTop = (windowHeight - popupHeight) / 2;

    popup.style.left = popupLeft + 'px';
    popup.style.top = popupTop + 'px';

    // Define a imagem e a descrição do integrante
    const imagem = popup.querySelector('img');
    const descricao = popup.querySelector('p');
    imagem.src = area.dataset.imagem; // Assume que o atributo data-imagem foi definido nas áreas clicáveis
    descricao.textContent = area.dataset.descricao; // Assume que o atributo data-descricao foi definido nas áreas clicáveis

    // Exibe o popup
    popup.style.display = 'block';

    // Exibe a camada de fundo semi-transparente
    document.getElementById('popup-overlay').style.display = 'block';

    // Adiciona um evento de clique no overlay para fechar o popup
    document.getElementById('popup-overlay').addEventListener('click', fecharPopup);
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none'; // Oculta a camada de fundo semi-transparente
}

// Adiciona evento de tecla pressionada para fechar o popup quando a tecla "Esc" for pressionada
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharPopup();
    }
});

// Adiciona evento de mouseout para esconder o popup quando o mouse sair da imagem
document.querySelector('.arvore-png img').addEventListener('mouseout', function(event) {
    const area = event.relatedTarget; // Elemento para onde o mouse está se movendo
    const popup = document.getElementById('popup');
    if (!popup.contains(area)) { // Verifica se o elemento para onde o mouse está se movendo não está dentro do popup
        fecharPopup();
    }
});



/* JavaScript para limitar o tamanho da area da interação. ----------------------------------------------------------*/

// Função para exibir o popup com a imagem e descrição do integrante
function exibirPopup(area, mouseX, mouseY) {
    // Verifica se a tela é grande o suficiente para exibir o popup
    if (window.innerWidth > 1075 && window.innerHeight > 615) {
        // Define a posição do popup com base no centro da tela
        const popup = document.getElementById('popup');
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        const popupLeft = (window.innerWidth - popupWidth) / 2;
        const popupTop = (window.innerHeight - popupHeight) / 2;

        popup.style.left = popupLeft + 'px';
        popup.style.top = popupTop + 'px';

        // Define a imagem e a descrição do integrante
        const imagem = popup.querySelector('img');
        const descricao = popup.querySelector('p');
        imagem.src = area.dataset.imagem; // Assume que o atributo data-imagem foi definido nas áreas clicáveis
        descricao.textContent = area.dataset.descricao; // Assume que o atributo data-descricao foi definido nas áreas clicáveis

        // Exibe o popup
        popup.style.display = 'block';

        // Exibe a camada de fundo semi-transparente
        document.getElementById('popup-overlay').style.display = 'block';
    }
}

/*---------------------------------------------------------------------------------------*/