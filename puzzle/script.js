// Elementos do DOM
const containerQuebraCabeca = document.getElementById("puzzle-container");
const quebraCabecaCompleto = document.getElementById("completed-puzzle");
const mensagemConcluida = document.getElementById("completed-message");
const estatisticas = document.getElementById("stats");
const botaoReiniciar = document.getElementById("restart-button");

// Variáveis do jogo
let horaInicio;
let movimentos = 0;
let intervaloTimer;

// Números para o quebra-cabeça
const numeros = Array.from({ length: 16 }, (_, index) => index + 1); // Utilizando Array.from para criar um array de 1 a 16.

// Embaralhar os números aleatoriamente
const embaralharArray = (array) => array.slice().sort(() => Math.random() - 0.5);
const numerosEmbaralhados = embaralharArray(numeros);

// Lógica para criar as peças do quebra-cabeça
numerosEmbaralhados.forEach(numero => {
  // Criação de uma peça do quebra-cabeça
  const criarPecaQuebraCabeca = (numero) => {
    const peca = document.createElement("div");
    peca.classList.add("puzzle-piece");
    peca.innerText = numero;
    peca.draggable = true;

    // Adiciona eventos de arrastar para a peça
    const arrastarInicio = (evento) => {
      // Inicia o arraste da peça
      evento.dataTransfer.setData("text/plain", evento.target.innerText);
    };

    const arrastarSobre = (evento) => {
      // Impede o comportamento padrão de arrastar sobre elementos
      evento.preventDefault();
    };

    const soltar = (evento) => {
      // Manipulação do evento de soltar a peça
      evento.preventDefault();
      const dado = evento.dataTransfer.getData("text/plain");

      // Encontra a peça arrastada no conjunto de peças
      const elementoArrastado = Array.from(document.querySelectorAll(".puzzle-piece")).find(peca => contem(peca, dado));

      if (elementoArrastado) {
        // Troca os números das peças
        const numeroTemporario = elementoArrastado.innerText;
        elementoArrastado.innerText = evento.target.innerText;
        evento.target.innerText = numeroTemporario;

        // Incrementa o contador de movimentos
        movimentos++;

        // Verifica se o quebra-cabeça foi concluído
        verificarConcluido();
      }
    };

    // Adiciona eventos de arrastar para a peça
    peca.addEventListener("dragstart", arrastarInicio);
    peca.addEventListener("dragover", arrastarSobre);
    peca.addEventListener("drop", soltar);

    // Adiciona a peça ao contêiner do quebra-cabeça
    containerQuebraCabeca.appendChild(peca);
  };

  criarPecaQuebraCabeca(numero);
});

// Função personalizada para verificar se um elemento contém um determinado texto
const contem = (elemento, texto) => {
  return elemento.innerText.includes(texto);
};

// Função para verificar se o quebra-cabeça foi concluído
const verificarConcluido = () => {
  const pecasQuebraCabeca = document.querySelectorAll(".puzzle-piece");
  const concluido = Array.from(pecasQuebraCabeca).every((peca, indice) => parseInt(peca.innerText) === indice + 1);

  if (concluido) {
    // Parar o cronômetro e ocultar o quebra-cabeça
    clearInterval(intervaloTimer);
    containerQuebraCabeca.style.display = "none";

    // Exibe a mensagem de conclusão e estatísticas
    if (quebraCabecaCompleto && mensagemConcluida && estatisticas && botaoReiniciar) {
      quebraCabecaCompleto.style.display = "block";
      mensagemConcluida.innerText = "Parabéns! Quebra-cabeça concluído.";
      estatisticas.innerText = `Movimentos: ${movimentos} | Tempo: ${formatarTempo(obterTempoDecorrido())}`;

      // Adiciona evento de clique para reiniciar o quebra-cabeça
      botaoReiniciar.addEventListener("click", reiniciarQuebraCabeca);
    }
  }
};

// Reinicia o quebra-cabeça
const reiniciarQuebraCabeca = () => {
  // Reinicia o quebra-cabeça
  movimentos = 0;
  iniciarTimer();
  containerQuebraCabeca.style.display = "grid";
  quebraCabecaCompleto.style.display = "none";

  // Embaralha os números aleatoriamente novamente
  const numerosReembaralhados = embaralharArray(numeros);

  // Atualiza os números nas peças do quebra-cabeça
  const pecasQuebraCabeca = document.querySelectorAll(".puzzle-piece");
  pecasQuebraCabeca.forEach((peca, indice) => {
    peca.innerText = numerosReembaralhados[indice];
  });
};

// Inicia o cronômetro quando a página carregar
const iniciarTimer = () => {
  // Inicia o cronômetro
  horaInicio = new Date().getTime();
  intervaloTimer = setInterval(atualizarTimer, 1000);
};

// Atualiza o cronômetro e exibe o tempo decorrido
const atualizarTimer = () => {
  const tempoDecorrido = obterTempoDecorrido();
  estatisticas.innerText = `Movimentos: ${movimentos} | Tempo: ${formatarTempo(tempoDecorrido)}`;
};

// Obtém o tempo decorrido desde o início do cronômetro
const obterTempoDecorrido = () => {
  return new Date().getTime() - horaInicio;
};

// Formata o tempo em minutos:segundos
const formatarTempo = (milissegundos) => {
  const segundos = Math.floor(milissegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${preencherZeros(minutos)}:${preencherZeros(segundosRestantes)}`;
};

// Adiciona um zero à esquerda se o valor for menor que 10
const preencherZeros = (valor) => {
  return valor < 10 ? `0${valor}` : valor;
};

// Inicia o cronômetro quando a página carregar
iniciarTimer();