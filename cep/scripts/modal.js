export const mostrarResultadoModal = (resultado) => {
  const modal = document.getElementById('modal');
  const resultadoModal = document.getElementById('resultado-modal');

  resultadoModal.innerHTML = resultado;
  modal.style.display = 'block';

  // Adicionando um event listener para o botão de fechar o modal
  const botaoFecharModal = document.getElementById('fechar-modal');
  botaoFecharModal.addEventListener('click', fecharModal);

  // Adicionando um event listener para a tecla "Esc" ao abrir o modal
  document.addEventListener('keydown', fecharComEsc);
};

export const fecharModal = () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';

  // Removendo o event listener para a tecla "Esc" ao fechar o modal
  document.removeEventListener('keydown', fecharComEsc);
};

// Função para fechar o modal ao pressionar a tecla "Esc"
const fecharComEsc = (event) => {
  if (event.key === 'Escape') {
    fecharModal();
  }
};