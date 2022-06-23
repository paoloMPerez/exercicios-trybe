// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let ssegundoIndex = 0; ssegundoIndex < index; ssegundoIndex += 1) {
    if (numbers[index] < numbers[ssegundoIndex]) {
      let posicao = numbers[index];
      numbers[index] = numbers[ssegundoIndex];
      numbers[ssegundoIndex] = posicao;
    }
  }
}

console.log(numbers);
