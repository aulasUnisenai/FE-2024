// Array de ícones disponíveis para o jogo
export const icones = [
  'apple',
  'star',
  'photo_camera',
  'anchor',
  'music_note',
  'umbrella'
];

// Array de ícones duplicados
export const iconesDuplicados = [...icones, ...icones];

// Contêiner do jogo no HTML
export const containerDoJogo = document.getElementById('game-container');

// Marcador de pontuação no HTML
export const elementoPontuacao = document.getElementById('score');

// Contador de movimentos no HTML
export const elementoMovimentos = document.getElementById('moves');

// Função para embaralhar o array 
export const embaralharArray = array => array.sort(() => Math.random() - 0.5);