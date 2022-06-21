const custoDoProduto = 5;
const valorDeVenda = 9;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
  const totalCustoDoProduto = custoDoProduto * 1.2;
  const lucro = (valorDeVenda - totalCustoDoProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Erro, os valores não podem ser negativos");
}
