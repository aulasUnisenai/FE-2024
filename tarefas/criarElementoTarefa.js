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