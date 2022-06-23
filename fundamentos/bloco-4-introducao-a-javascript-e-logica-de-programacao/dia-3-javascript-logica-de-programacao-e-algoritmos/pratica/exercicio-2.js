//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = "tryber";
let palavraReversa = "";

for (let index = 0; index < palavra.length; index += 1) {
  palavraReversa += palavra[palavra.length - 1 - index];
}

console.log(palavraReversa);

// solução 2 do gabarito:

let word = "tryber";
let reverseWord = "";

reverseWord = word.split("").reverse().join("");

console.log(reverseWord);
