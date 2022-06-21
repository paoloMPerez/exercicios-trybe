let anguloInternonoA = 55;
let anguloInternonoB = 50;
let anguloInternoC = 75;

let somaAngulos = anguloInternonoA + anguloInternonoB + anguloInternoC;

let todosAngulosPositivos =
  anguloInternonoA > 0 && anguloInternonoB > 0 && anguloInternoC > 0;

if (todosAngulosPositivos) {
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: ângulo inválido");
}
