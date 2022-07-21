// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
const acorde = ()=> 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const tomarCafe = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:

const doingThings = (func) => {
  const resultado = func();
  console.log(resultado);
};

doingThings(acorde);
doingThings(tomarCafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!