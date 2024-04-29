// Importa a função virarCarta 
import { virarCarta } from './game.js';

// Classe que representa uma carta do jogo
export class Carta {
  // Construtor da classe Carta
  constructor(icone, jogo) {
    // Inicializa o ícone da carta
    this.icone = icone;
    // Guarda a referência do jogo
    this.jogo = jogo;
    // Cria o elemento HTML da carta
    this.elemento = this.criarElemento();
    // Adiciona um ouvinte de evento de clique à carta para virá-la
    this.elemento.addEventListener('click', () => this.virar());
  }

  // Método para criar o elemento HTML da carta
  criarElemento() {
    // Cria um novo elemento div para a carta
    const carta = document.createElement('div');
    // Adiciona a classe 'card' à carta
    carta.classList.add('card');
    // Define o conteúdo HTML da carta com um ícone na parte de trás
    carta.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back"><span class="material-icons">${this.icone}</span></div>
      </div>`;
    // Retorna o elemento HTML da carta
    return carta;
  }

  // Método para virar a carta
  virar() {
    // Chama a função virarCarta do jogo, passando a carta e o ícone como argumentos
    virarCarta(this, this.icone);
  }
}