// Seleciona os elementos do círculo e do contêiner
const circulo = document.getElementById('circulo');
const container = document.getElementById('container');

// Define a quantidade de pixels para mover o círculo a cada passo
const passo = 10;

// Função para mover o círculo
const moverCirculo = () => {
    let topo = circulo.offsetTop;
    let esquerda = circulo.offsetLeft;

    // Verifica e realiza os movimentos conforme o estado dos controles
    if (movimento.cima && topo > 0) circulo.style.top = `${Math.max(topo - passo, 0)}px`; // Garante que o círculo não ultrapasse o limite superior
    if (movimento.baixo && topo < (container.clientHeight - circulo.clientHeight)) circulo.style.top = `${Math.min(topo + passo, container.clientHeight - circulo.clientHeight)}px`; // Garante que o círculo não ultrapasse o limite inferior
    if (movimento.esquerda && esquerda > 0) circulo.style.left = `${Math.max(esquerda - passo, 0)}px`; // Garante que o círculo não ultrapasse o limite esquerdo
    if (movimento.direita && esquerda < (container.clientWidth - circulo.clientWidth)) circulo.style.left = `${Math.min(esquerda + passo, container.clientWidth - circulo.clientWidth)}px`; // Garante que o círculo não ultrapasse o limite direito
};

// Função para atualizar o estado de movimento
const atualizarMovimento = (e, estado) => {
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            movimento.cima = estado;
            break;
        case 'ArrowDown':
        case 's':
            movimento.baixo = estado;
            break;
        case 'ArrowLeft':
        case 'a':
            movimento.esquerda = estado;
            break;
        case 'ArrowRight':
        case 'd':
            movimento.direita = estado;
            break;
    }
};

// Objeto para armazenar os estados de movimento
let movimento = {
    cima: false,
    baixo: false,
    esquerda: false,
    direita: false
};

// Event listeners para pressionar e soltar as teclas
document.addEventListener('keydown', (e) => atualizarMovimento(e, true));
document.addEventListener('keyup', (e) => atualizarMovimento(e, false));

// Função para atualizar a posição do círculo a cada intervalo de tempo
setInterval(moverCirculo, 50);
