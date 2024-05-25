// Seleciona o elemento do quadrado
const quadrado = document.getElementById('quadrado');

// Seleciona os botões de controle
const btnCima = document.getElementById('btnCima');
const btnBaixo = document.getElementById('btnBaixo');
const btnEsquerda = document.getElementById('btnEsquerda');
const btnDireita = document.getElementById('btnDireita');

// Define a quantidade de pixels para mover o quadrado a cada passo
const passo = 10;

// Inicializa a posição do quadrado
quadrado.style.top = '0px';
quadrado.style.left = '0px';

// Função para mover o quadrado para cima
const moverCima = () => {
    // Obtém a posição atual do quadrado
    let topo = parseInt(quadrado.style.top);
    // Verifica se o quadrado não está no limite superior
    if (topo > 0) {
        // Move o quadrado para cima
        quadrado.style.top = `${topo - passo}px`;
    }
}

// Função para mover o quadrado para baixo
const moverBaixo = () => {
    // Obtém a posição atual do quadrado
    let topo = parseInt(quadrado.style.top);
    // Verifica se o quadrado não está no limite inferior
    if (topo < 350) { // 400 (altura do container) - 50 (altura do quadrado)
        // Move o quadrado para baixo
        quadrado.style.top = `${topo + passo}px`;
    }
}

// Função para mover o quadrado para a esquerda
const moverEsquerda = () => {
    // Obtém a posição atual do quadrado
    let esquerda = parseInt(quadrado.style.left);
    // Verifica se o quadrado não está no limite esquerdo
    if (esquerda > 0) {
        // Move o quadrado para a esquerda
        quadrado.style.left = `${esquerda - passo}px`;
    }
}

// Função para mover o quadrado para a direita
const moverDireita = () => {
    // Obtém a posição atual do quadrado
    let esquerda = parseInt(quadrado.style.left);
    // Verifica se o quadrado não está no limite direito
    if (esquerda < 350) { // 400 (largura do container) - 50 (largura do quadrado)
        // Move o quadrado para a direita
        quadrado.style.left = `${esquerda + passo}px`;
    }
}

// Adiciona event listeners para os botões de controle
btnCima.addEventListener('click', moverCima);
btnBaixo.addEventListener('click', moverBaixo);
btnEsquerda.addEventListener('click', moverEsquerda);
btnDireita.addEventListener('click', moverDireita);
