// Exemplo com let. Escopo de bloco
function letExample() {
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    console.log("Fora do loop: " + i); // erro: i não está definido
  }
  
  letExample(); // Output: 0 1 2 Error: i is not defined