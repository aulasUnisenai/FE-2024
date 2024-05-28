// utils.js
export const calcularPosicaoAleatoria = (tamanhoContainer, tamanhoAlvo, margemSeguranca) => {
    return Math.random() * (tamanhoContainer - tamanhoAlvo - 2 * margemSeguranca) + margemSeguranca;
};