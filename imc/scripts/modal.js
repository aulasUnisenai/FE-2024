// Obtém referências para os elementos do DOM
const modal = document.getElementById('modal'); // Referência ao modal
const closeModalButton = document.querySelector('.close'); // Referência ao botão de fechar o modal

// Função para abrir o modal
function openModal() {
    modal.style.display = 'flex'; // Alterado para 'flex' para garantir o alinhamento central
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none'; // Oculta o modal
}

// Event listener para abrir o modal ao clicar no botão
document.getElementById('openModalButton').addEventListener('click', openModal);

// Event listener para fechar o modal ao clicar no botão de fechar
closeModalButton.addEventListener('click', closeModal);

// Event listener para fechar o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === modal) { // Verifica se o clique foi fora do conteúdo do modal
        closeModal();
    }
});

// Event listener para fechar o modal ao pressionar a tecla "Esc"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') { // Verifica se a tecla pressionada é "Esc"
        closeModal();
    }
});