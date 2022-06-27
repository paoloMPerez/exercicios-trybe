// Faça uma pirâmide com n asteriscos de base

let n = 10;
let simbolo = '*';
let espaco = '';
let meioDaPiramide = (n + 1) / 2
let ladoEsquerdo = meioDaPiramide
let ladoDireito = meioDaPiramide

for (let linhaIndex = 0; linhaIndex <= meioDaPiramide; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex < n; colunaIndex += 1) {
    if (colunaIndex > ladoEsquerdo && colunaIndex < ladoDireito) {
      espaco = espaco + simbolo;
    } else {
      espaco = espaco + ' ';
    }
  }  
  console.log(espaco);
  espaco = '';
  ladoEsquerdo -= 1;
  ladoDireito += 1;
};
