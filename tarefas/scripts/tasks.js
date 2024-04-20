// tasks.js
import {MAX_CARACTERES, controlarErro, atualizarContagemTarefas, listaTarefas } from './dom.js';

// Contadores de tarefas
let totalTarefas = 0;
let tarefasPendentes = 0;
let tarefasConcluidas = 0;

// Função para criar um novo elemento de tarefa
const criarElementoTarefa = (nomeTarefa) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-name">${nomeTarefa}</span>
        <div class="task-actions">
            <button class="task-btn edit" title="Editar">
                <i class="fas fa-pencil-alt"></i>
            </button>
            <button class="task-btn delete" title="Remover">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="task-btn complete" title="Concluir">
                <i class="fas fa-check"></i>
            </button>
        </div>
    `;
    return li;
};

// Função para adicionar uma nova tarefa
const adicionarTarefa = nomeTarefa => {
    const novaTarefa = criarElementoTarefa(nomeTarefa);
    listaTarefas.appendChild(novaTarefa);

    totalTarefas++;
    tarefasPendentes++;
    atualizarContagemTarefas(totalTarefas, tarefasPendentes, tarefasConcluidas);

    controlarErro(); // Oculta qualquer mensagem de erro
};

// Função para remover uma tarefa da lista
const removerTarefa = li => {
    if (li.classList.contains('completed')) {
        tarefasConcluidas--;
    } else {
        tarefasPendentes--;
    }

    totalTarefas--;
    atualizarContagemTarefas(totalTarefas, tarefasPendentes, tarefasConcluidas);
    li.remove();

    controlarErro(); // Oculta qualquer mensagem de erro
};

// Função para concluir uma tarefa
const concluirTarefa = li => {
    li.classList.add('completed');
    
    tarefasPendentes--;
    tarefasConcluidas++;
    
    atualizarContagemTarefas(totalTarefas, tarefasPendentes, tarefasConcluidas);

    li.remove();

    controlarErro(); // Oculta qualquer mensagem de erro
};

// Função para editar uma tarefa existente
const editarTarefa = li => {
    const nomeTarefaElemento = li.querySelector('.task-name');
    const nomeAtual = nomeTarefaElemento.textContent;
    const novoNome = prompt('Editar tarefa:', nomeAtual);

    if (novoNome !== null) {
        const nomeAjustado = novoNome.trim();
        if (nomeAjustado.length > MAX_CARACTERES) {
            controlarErro(`A tarefa editada não pode ter mais de ${MAX_CARACTERES} caracteres.`);
        } else {
            nomeTarefaElemento.textContent = nomeAjustado;
            controlarErro(); // Oculta qualquer mensagem de erro
        }
    }
};

// Exportar as funções para uso em outros arquivos
export { adicionarTarefa, removerTarefa, concluirTarefa, editarTarefa };