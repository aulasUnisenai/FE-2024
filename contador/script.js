// Aguarda o evento de carregamento do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do relógio e do input de data
    const entradaData = document.querySelector('.time-to');
    const diaRelogio = document.querySelector('.clock-day');
    const horasRelogio = document.querySelector('.clock-hours');
    const minutosRelogio = document.querySelector('.clock-minutes');
    const segundosRelogio = document.querySelector('.clock-seconds');

    let idIntervalo; // Variável para armazenar o ID do intervalo de atualização do relógio

    // Função para calcular e exibir o tempo restante até a data selecionada
    function calcularTempo() {
        clearInterval(idIntervalo); // Limpa qualquer intervalo de atualização anterior

        // Obtém a data selecionada no input ou define uma data padrão
        const dataSelecionada = entradaData.value ? new Date(entradaData.value + 'T00:00:00') : new Date('2020-01-01T00:00:00');

        // Função para atualizar o relógio com o tempo restante
        function atualizarRelogio() {
            const agora = new Date(); // Obtém a data e hora atual
            const diferenca = dataSelecionada.getTime() - agora.getTime(); // Calcula a diferença entre as datas em milissegundos
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // Calcula os dias restantes
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcula as horas restantes
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)); // Calcula os minutos restantes
            const segundos = Math.floor(diferenca / 1000); // Calcula os segundos restantes

            // Atualiza o texto dos elementos do relógio com o tempo restante
            diaRelogio.textContent = dias.toString().padStart(2, '0');
            horasRelogio.textContent = horas.toString().padStart(2, '0');
            minutosRelogio.textContent = minutos.toString().padStart(2, '0');
            segundosRelogio.textContent = segundos.toString().padStart(2, '0');

            // Verifica se a data selecionada já passou
            if (agora >= dataSelecionada) {
                clearInterval(idIntervalo); // Limpa o intervalo de atualização
                // Define um texto indicando que a data já passou
                diaRelogio.textContent = 'D';
                horasRelogio.textContent = 'O';
                minutosRelogio.textContent = 'N';
                segundosRelogio.textContent = 'E';
            }
        }

        atualizarRelogio(); // Chama a função de atualização imediatamente ao iniciar
        idIntervalo = setInterval(atualizarRelogio, 1000); // Inicia o intervalo de atualização do relógio a cada segundo
    }

    calcularTempo(); // Chama a função para iniciar a contagem do tempo diretamente ao carregar a página

    entradaData.addEventListener('change', calcularTempo); // Adiciona um ouvinte de evento para atualizar o relógio quando a data for alterada

    // Adiciona um ouvinte de evento para alternar entre os modos claro e escuro
    const botaoModoEscuro = document.getElementById('darkModeToggle');
    botaoModoEscuro.addEventListener('change', function() {
    const documentoTodo = document.documentElement; // Seleciona o documento inteiro
    documentoTodo.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' em todo o documento
});
});