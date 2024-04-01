// Exemplo com var.  Escopo de função
function varExample() {
    for (var i = 0; i < 3; i++) {
      console.log(i);
    }
    console.log("Fora do loop: " + i);
  }

varExample(); // Output: 0 1 2 Fora do loop: 3