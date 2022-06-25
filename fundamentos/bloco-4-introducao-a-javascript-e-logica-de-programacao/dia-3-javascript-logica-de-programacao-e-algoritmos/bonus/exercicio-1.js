// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 10;
let simbolo = "*";
let espaco = "";

for (let index = 0; index < n; index += 1) {
  espaco = espaco + simbolo;
}
for (let index = 0; index < n; index += 1) {
  console.log(espaco);
}
