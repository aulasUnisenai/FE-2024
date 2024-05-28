// init.js
import { resetarJogo, entradaNumAlvos, jogoAtivo, alvo } from './jogo.js';
import { moverAlvo} from './interface.js';

document.addEventListener('DOMContentLoaded', () => {
    const botaoIniciar = document.getElementById('botaoIniciar');
    const containerJogo = document.getElementById('containerJogo');
    
    botaoIniciar.addEventListener('click', () => {
        if (!jogoAtivo) {
            const numAlvos = parseInt(entradaNumAlvos.value);
            if (!numAlvos || numAlvos <= 0) {
                alert('Por favor, defina o número de alvos antes de iniciar o jogo.');
            } else {
                containerJogo.innerHTML = '';
                resetarJogo(containerJogo, entradaNumAlvos);
            }
        }
    });
    
    window.addEventListener('resize', () => {
        if (alvo) {
            moverAlvo(containerJogo, alvo);
        }
    });
});