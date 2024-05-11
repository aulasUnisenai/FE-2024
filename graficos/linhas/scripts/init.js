// Importa as funções necessárias
import { inicializarGrafico, grafico } from './linhas.js';

// Função para redimensionar o gráfico
const redimensionarGrafico = () => {
    grafico.resize();
};

// Adiciona um evento de redimensionamento da janela
window.addEventListener('resize', redimensionarGrafico);

// Inicializa o gráfico quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", inicializarGrafico);