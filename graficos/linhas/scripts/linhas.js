// Importa a função para obter os dados do gráfico do arquivo requisicao.js
import { obterDadosGrafico } from './requisicao.js';

// Variável para armazenar a instância do gráfico
export let grafico;

// Função assíncrona para inicializar o gráfico
export const inicializarGrafico = async () => {
  try {
    // Obtém os dados do gráfico utilizando a função obterDadosGrafico
    const { rotulos, dados } = await obterDadosGrafico();

    // Converte os dados para o formato numérico
    const dadosNumericos = dados.map(Number);

    // Obtém o contexto do elemento canvas onde o gráfico será desenhado
    const ctx = document.getElementById('line-chart').getContext('2d');

    // Cria uma nova instância do gráfico utilizando a biblioteca Chart.js
    grafico = new Chart(ctx, {
        type: 'line',
        data: {
          labels: rotulos,
          datasets: [{
            label: 'Ocorrências',
            data: dadosNumericos,
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                grid: {
                  display: false
                },
                beginAtZero: true
              }
            }
          }
    });
  } catch (erro) {
    // Em caso de erro, exibe uma mensagem de erro no console
    console.error('Ocorreu um erro:', erro);
  }
}