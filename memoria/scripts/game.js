// Importações
import { iconesDuplicados, containerDoJogo, elementoPontuacao, elementoMovimentos, embaralharArray } from './config.js';

// Importa a classe Carta
import { Carta } from './card.js';

// Array para armazenar as cartas selecionadas
let cartasSelecionadas = [];

// Armazenar o número de pares correspondentes
let paresCorrespondentes = 0;

// Armazenar o número de movimentos realizados
let movimentos = 0;

// Criar uma nova carta com o ícone especificado
export const criarCarta = icone => {
  // Nova instância da classe Carta
  const carta = new Carta(icone, {
    // Passa as funções e elementos necessários para a carta
    virarCarta: virarCarta,
    elementoMovimentos: elementoMovimentos,
    elementoPontuacao: elementoPontuacao
  });
  // Retorna o elemento HTML da carta
  return carta.elemento;
};

// Função para virar uma carta
export const virarCarta = (carta, icone) => {
  // Verifica se a carta já está virada e se há menos de duas cartas selecionadas
  if (!carta.elemento.classList.contains('flipped') && cartasSelecionadas.length < 2) {
    // Adiciona a classe 'flipped' para virar a carta
    carta.elemento.classList.add('flipped');
    // Adiciona a carta ao array de cartas selecionadas
    cartasSelecionadas.push({ carta: carta, icone: icone });

    // Verifica se duas cartas foram selecionadas
    if (cartasSelecionadas.length === 2) {
      // Incrementa o número de movimentos
      movimentos++;
      // Atualiza o texto do elemento de movimentos
      elementoMovimentos.textContent = `Movimentos: ${movimentos}`;
      // Chama a função para verificar a correspondência das cartas após um curto intervalo de tempo
      setTimeout(verificarCorrespondencia, 500);
    }
  }
};

// Função para verificar se as cartas selecionadas correspondem
export const verificarCorrespondencia = () => {
  // Desestrutura as cartas selecionadas em carta1 e carta2
  const [carta1, carta2] = cartasSelecionadas;

  // Verifica se os ícones das duas cartas são iguais
  if (carta1.icone === carta2.icone) {
    // Limpa o array de cartas selecionadas
    cartasSelecionadas = [];
    // Incrementa o número de pares correspondentes
    paresCorrespondentes++;
    // Atualiza o texto do elemento de pontuação
    elementoPontuacao.textContent = `Pontos: ${paresCorrespondentes}`;

    // Verifica se todos os pares foram encontrados
    if (paresCorrespondentes === iconesDuplicados.length / 2) {
      // Exibe uma mensagem de parabéns quando todos os pares foram encontrados
      alert(`Parabéns! Você encontrou todos os pares em ${movimentos} movimentos.`);
    }
  } else {
    // Caso os ícones não correspondam, desvira as cartas após um curto intervalo de tempo
    setTimeout(() => {
      carta1.carta.elemento.classList.remove('flipped');
      carta2.carta.elemento.classList.remove('flipped');
      cartasSelecionadas = [];
    }, 500);
  }
};

// Função para inicializar o jogo
export const inicializarJogo = () => {
  // Embaralha os ícones duplicados
  const iconesEmbaralhados = embaralharArray(iconesDuplicados);

  // Para cada ícone embaralhado, cria uma carta e a adiciona ao contêiner do jogo
  iconesEmbaralhados.forEach(icone => {
    const carta = criarCarta(icone);
    containerDoJogo.appendChild(carta);
  });
};

// Inicializa o jogo ao carregar a página
inicializarJogo();