// Obtém referências para os elementos do DOM
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const calcularButton = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

// Função para calcular o IMC
function calcularIMC() {
  // Obtém os valores de altura e peso inseridos pelo usuário
  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);
  
  // Valida se os campos estão preenchidos e se os valores são válidos
  if (!altura || !peso || altura <= 0 || peso <= 0) {
    alert('Preencha os campos corretamente!');
    return;
  }

  // Calcula o IMC usando a fórmula padrão
  const imc = peso / (altura * altura);
  
  // Determina a classificação do IMC e o grau de obesidade
  const classificacao = imc < 18.5 ? 'Magreza' :
                        imc < 25 ? 'Normal' :
                        imc < 30 ? 'Sobrepeso' :
                        imc < 40 ? 'Obesidade' : 'Obesidade grave';
  const grauObesidade = imc < 30 ? 0 :
                        imc < 35 ? 1 :
                        imc < 40 ? 2 : 3;

  // Exibe o resultado na página
  resultadoDiv.innerHTML = `IMC: ${imc.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}.<br>
  Classificação: ${classificacao}.<br>
  Grau de obesidade: ${grauObesidade}.`;
  resultadoDiv.style.display = 'block';
}

// Função para limpar os campos do formulário
function limparCampos() {
    alturaInput.value = '';
    pesoInput.value = '';
    resultadoDiv.style.display = 'none';
  }

// Adiciona um event listener ao botão "Calcular"
calcularButton.addEventListener('click', calcularIMC);

// Adiciona um listener de evento para as teclas Enter e Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      // Chama a função calcularIMC() quando a tecla Enter é pressionada
      calcularIMC();
    } else if (event.key === 'Escape') {
        // Chama a função limparCampos() quando a tecla Esc é pressionada
        limparCampos();
    }
  });