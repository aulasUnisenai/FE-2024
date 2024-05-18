export function formatarCEP(inputCEP) {
  let cep = inputCEP.value.trim().replace(/\D/g, ''); // Remove caracteres não numéricos
  cep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2'); // Insere o hífen no formato correto

  inputCEP.value = cep; // Atualiza o valor do campo de entrada
}