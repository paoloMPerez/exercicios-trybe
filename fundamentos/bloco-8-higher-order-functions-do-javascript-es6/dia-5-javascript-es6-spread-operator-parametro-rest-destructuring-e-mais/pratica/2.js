// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

const sum = (...numbers) => numbers.reduce(((total, number) => total + number), 0);

console.log(sum(8, 5));