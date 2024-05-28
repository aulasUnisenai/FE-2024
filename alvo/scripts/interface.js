// interface.js
import { calcularPosicaoAleatoria } from './utils.js';

export const moverAlvo = (containerJogo, alvo) => {
    const margemSeguranca = 50; 
    const { offsetWidth: larguraContainer, offsetHeight: alturaContainer } = containerJogo;
    const { offsetWidth: larguraAlvo, offsetHeight: alturaAlvo } = alvo;

    const xAleatorio = calcularPosicaoAleatoria(larguraContainer, larguraAlvo, margemSeguranca);
    const yAleatorio = calcularPosicaoAleatoria(alturaContainer, alturaAlvo, margemSeguranca);

    alvo.style.left = `${xAleatorio}px`;
    alvo.style.top = `${yAleatorio}px`;
};

export const criarAlvo = (containerJogo) => {
    const alvo = document.createElement('div');
    alvo.className = 'alvo';
    const centroX = containerJogo.offsetWidth / 2 - alvo.offsetWidth / 2;
    const centroY = containerJogo.offsetHeight / 2 - alvo.offsetHeight / 2;
    alvo.style.left = `${centroX}px`;
    alvo.style.top = `${centroY}px`;
    containerJogo.appendChild(alvo);
    return alvo;
};

export const mostrarAnimacaoVitoria = (container) => {
    const fireworks = new Fireworks.default(container, {
        sound: {
            enable: true,
            files: ['utils\fogos.mp3'],
        }
    });
    fireworks.start();
    const audio = document.getElementById('audioFogos');
    audio.play();
};