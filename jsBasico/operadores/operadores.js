let a = 5;
let b = 10;
let c = 15;

// Operador AND
if (a < b && b < c) {
  console.log("a é menor que b e b é menor que c");
}

// Operador OR
if (a > b || b < c) {
  console.log("a é maior que b ou b é menor que c");
}

// Operador NOT
let myBool = false;
if (!myBool) {
  console.log("myBool é falso");
  console.log(!myBool);
}
