// jogo.js
import { moverAlvo, criarAlvo, mostrarAnimacaoVitoria } from './interface.js';

const informacoes = document.querySelector('.informacoes');
const valorTempo = informacoes.querySelector('#valorTempo');
const valorPontuacao = informacoes.querySelector('#valorPontuacao');
export const entradaNumAlvos = document.getElementById('numAlvos');
const derrotaAudio = new Audio('./utils/derrota.mp3'); 

let pontuacao = 0;
export let jogoAtivo = false;
let tempoRestante = 20;
let intervaloTempo;
export let alvo;

export const iniciarTempo = () => {
    intervaloTempo = setInterval(() => {
        tempoRestante--;
        valorTempo.textContent = tempoRestante;
        if (tempoRestante <= 0 || pontuacao === parseInt(entradaNumAlvos.value)) {
            clearInterval(intervaloTempo);
            fimDoJogo(tempoRestante <= 0);
        }
    }, 1000);
};

export const fimDoJogo = (tempoEsgotado) => {
    jogoAtivo = false;
    if (tempoEsgotado) {
        derrotaAudio.play();
    } else {
        mostrarAnimacaoVitoria(document.getElementById('containerJogo'));
    }
    if (alvo) alvo.removeEventListener('click', clicarNoAlvo);
};

export const resetarJogo = (containerJogo) => {
    pontuacao = 0;
    valorPontuacao.textContent = pontuacao;
    tempoRestante = 20;
    valorTempo.textContent = tempoRestante;
    jogoAtivo = true;

    if (alvo) {
        alvo.removeEventListener('click', clicarNoAlvo);
        alvo.remove();
    }

    alvo = criarAlvo(containerJogo);
    alvo.addEventListener('click', clicarNoAlvo);
    iniciarTempo();
};

const clicarNoAlvo = () => {
    if (!jogoAtivo) return;
    pontuacao++;
    valorPontuacao.textContent = pontuacao;
    if (pontuacao === parseInt(entradaNumAlvos.value)) {
        fimDoJogo(false);
    } else {
        moverAlvo(containerJogo, alvo);
    }
};