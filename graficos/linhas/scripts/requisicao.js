// Exporta uma função assíncrona para obter os dados do gráfico do arquivo requisicao.js
export const obterDadosGrafico = async () => {
    try {
      // Realiza uma requisição assíncrona para o arquivo JSON usando fetch
      const resposta = await fetch('data/linhas.json');
  
      // Converte a resposta para JSON
      const { rotulos, dados } = await resposta.json();
  
      // Retorna um objeto com os rótulos e dados do gráfico
      return { rotulos, dados };
    } catch (error) {
      // Em caso de erro, lança uma exceção com uma mensagem de erro
      throw new Error('Erro ao buscar os dados:', error);
    }
  }