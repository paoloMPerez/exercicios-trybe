// Agora inverta o lado do triângulo.

let n = 10;
let simbolo = "*";
let espaco = "";
let posicao = n - 1;

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex < n; colunaIndex += 1) {
    if (colunaIndex < posicao) {
      espaco = espaco + " ";
    } else {
      espaco = espaco + simbolo;
    }
  }  
  console.log(espaco);
  espaco = '';
  posicao = posicao - 1;
};
