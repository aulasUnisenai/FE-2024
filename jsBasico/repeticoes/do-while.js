/*
O código dentro do loop é executado pelo menos uma vez, mesmo se a condição especificada for falsa.
Condição é verificada depois da primeira execução do bloco de código. 
*/
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);