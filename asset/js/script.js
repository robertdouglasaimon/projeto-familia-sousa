// Adiciona evento de mouseover para cada área clicável
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseover', function() {
        const popupId = area.dataset.popupId; // Obtém o ID do popup associado à área clicável
        if (popupId) {
            exibirPopup(popupId); // Chama a função para exibir o popup pelo ID
        }
    });
});

// Função para exibir o popup com o ID específico
function exibirPopup(popupId) {
    // Define a posição do popup com base no centro da tela
    const popup = document.getElementById(popupId);
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const popupLeft = (windowWidth - popupWidth) / 2;
    const popupTop = (windowHeight - popupHeight) / 2;

    // Verifica se a tela é grande o suficiente para exibir o popup
    if (windowWidth > 1075 && windowHeight > 615) {
        popup.style.left = popupLeft + 'px';
        popup.style.top = popupTop + 'px';

        // Exibe o popup
        popup.style.display = 'block';

        // Exibe a camada de fundo semi-transparente
        document.getElementById('popup-overlay').style.display = 'block';

        // Adiciona um evento de clique no overlay para fechar o popup
        document.getElementById('popup-overlay').addEventListener('click', fecharPopup);
    }
}

// Função para fechar o popup
function fecharPopup() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    document.getElementById('popup-overlay').style.display = 'none'; // Oculta a camada de fundo semi-transparente
}

// Adiciona evento de tecla pressionada para fechar o popup quando a tecla "Esc" for pressionada
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharPopup();
    }
});

// Adiciona evento de mouseleave para esconder o popup quando o mouse sair da imagem
document.querySelector('.arvore-png img').addEventListener('mouseleave', function() {
    fecharPopup();
});


// Função para fazer os CARDS Flutuarem!
// Seleciona todos os cartões
const cards = document.querySelectorAll('.card');

// Adiciona a classe de animação a cada cartão
cards.forEach(card => {
    card.classList.add('floating');
});

// Remove a classe de animação após um certo período de tempo (por exemplo, 5 segundos)
setTimeout(() => {
    cards.forEach(card => {
        card.classList.remove('floating');
    });
}, 5000); // 5000 milissegundos = 5 segundos
