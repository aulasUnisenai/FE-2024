/* var
Forma mais antiga de declarar variáveis em JavaScript
Acessível em todo o escopo da função em que é declarada, ou globalmente se for declarada fora de uma função
*/
var idade = 20; 

/* let
Acessível apenas dentro do bloco em que é declarada. 
Permite que você atualize o valor da variável, mas não permite redeclarar a mesma variável dentro do mesmo escopo
Variáveis que precisam ter seu valor atualizado
*/
let nome = "João";

/* const
Após atribuição inicial de um valor, a variável não pode ser atualizada.
Não pode ser redeclarada dentro do mesmo escopo.
Variáveis que devem permanecer constantes
*/
const PI = 3.14;

// Atribuindo valor a uma const
//PI = 3.1417;

// Exibir valores
console.log(idade);
console.log(nome);
console.log(PI);