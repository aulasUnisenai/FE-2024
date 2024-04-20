// Limites de caracteres
export const MAX_CARACTERES = 30;

// Referências aos elementos DOM
const inputTarefa = document.getElementById('taskInput');
const btnAdicionarTarefa = document.getElementById('addTaskBtn');
const listaTarefas = document.getElementById('taskList');
const spanTotalTarefas = document.getElementById('totalTasks');
const spanTarefasPendentes = document.getElementById('pendingTasks');
const spanTarefasConcluidas = document.getElementById('completedTasks');
const divMensagemErro = document.getElementById('errorMessage');

// Função para controlar a exibição da mensagem de erro
const controlarErro = (mensagem = '') => {
    if (mensagem) {
        divMensagemErro.textContent = mensagem;
        divMensagemErro.style.display = 'block';
    } else {
        divMensagemErro.style.display = 'none';
    }
};

// Função para atualizar as contagens de tarefas na interface
const atualizarContagemTarefas = (total, pendentes, concluidas) => {
    spanTotalTarefas.textContent = total;
    spanTarefasPendentes.textContent = pendentes;
    spanTarefasConcluidas.textContent = concluidas;
};

// Exportar funções e constantes para uso em outros arquivos
export { controlarErro, atualizarContagemTarefas, inputTarefa, btnAdicionarTarefa, listaTarefas };