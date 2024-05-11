// Importa a função para obter os dados do gráfico do arquivo requisicao.js
import { obterDadosGrafico } from './requisicao.js';

// Variável para armazenar a instância do gráfico
export let grafico;

// Função assíncrona para inicializar o gráfico
export const inicializarGrafico = async () => {
  try {
    // Obtém os dados do gráfico utilizando a função obterDadosGrafico
    const dados = await obterDadosGrafico();

    // Define as categorias e opções para o gráfico
    const categorias = ['Instalação', 'Professores', 'Disciplinas'];
    const opcoes = ['Excelente', 'Boa', 'Ruim'];

    // Combina os dados para cada categoria e opção
    const dadosCombinados = categorias.flatMap(categoria =>
      opcoes.map(opcao =>
        dados.reduce((contagem, item) => contagem + (item[categoria].trim() === opcao ? 1 : 0), 0)
      )
    );

    // Obtém o contexto do elemento canvas onde o gráfico será desenhado
    const canvas = document.getElementById('combined-chart');
    const ctx = canvas.getContext('2d');

    // Define as cores para as barras do gráfico
    const cores = ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)'];

    // Cria uma nova instância do gráfico utilizando a biblioteca Chart.js
    grafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: opcoes,
        datasets: categorias.map((categoria, indice) => ({
          label: categoria,
          data: dadosCombinados.slice(indice * opcoes.length, (indice + 1) * opcoes.length),
          backgroundColor: cores[indice],
          borderColor: cores[indice],
          borderWidth: 1
        }))
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 10,
              usePointStyle: true
            }
          }
        }
      }
    });

    // Função para redimensionar o gráfico
    const redimensionarGrafico = () => {
      grafico.resize();
    };

    // Adiciona um evento de redimensionamento da janela
    window.addEventListener('resize', redimensionarGrafico);
  } catch (erro) {
    // Em caso de erro, exibe uma mensagem de erro no console
    console.error('Erro ao inicializar o gráfico:', erro);
  }
};