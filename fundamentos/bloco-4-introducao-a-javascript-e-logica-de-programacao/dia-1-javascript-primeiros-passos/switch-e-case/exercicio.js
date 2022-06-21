let pessoaCandidata = 'reprovada';

switch (pessoaCandidata) {
  case "aprovada":
    console.log("Parabéns, você foi APROVADA");
    break;
  case "lista":
    console.log("Será, será? Aguarde e confie!");
    break;
  case "reprovada":
    console.log("foi mal ai, tente na proxima!");
    break;
  default:
    console.log("não se aplica");
}
