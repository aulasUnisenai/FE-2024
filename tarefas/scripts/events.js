import { MAX_CARACTERES, inputTarefa, btnAdicionarTarefa, listaTarefas, controlarErro } from './dom.js';
import { adicionarTarefa, editarTarefa, removerTarefa, concluirTarefa } from './tasks.js';

// Evento DOMContentLoaded para iniciar o gerenciador de tarefas
document.addEventListener('DOMContentLoaded', () => {
    // Gerenciar evento de clique no botão de adicionar tarefa
    btnAdicionarTarefa.addEventListener('click', () => {
        controlarErro();

        const nomeTarefa = inputTarefa.value.trim();
        if (nomeTarefa) {
            if (nomeTarefa.length > MAX_CARACTERES) {
                controlarErro(`A tarefa não pode ter mais de ${MAX_CARACTERES} caracteres.`);
            } else {
                adicionarTarefa(nomeTarefa);
                inputTarefa.value = ''; // Limpa o campo de entrada
            }
        } else {
            controlarErro('Por favor, insira uma tarefa válida.');
        }
    });

    // Gerenciar evento de clique em uma tarefa
    listaTarefas.addEventListener('click', event => {
        const li = event.target.closest('li');
        const btn = event.target.closest('.task-btn');
        if (!li || !btn) return;

        controlarErro(); // Oculta qualquer mensagem de erro

        if (btn.classList.contains('edit')) {
            editarTarefa(li);
        } else if (btn.classList.contains('delete')) {
            removerTarefa(li);
        } else if (btn.classList.contains('complete')) {
            concluirTarefa(li);
        }
    });
});