const pecaDeXadrex = 'cavalo';

switch (pecaDeXadrex.toLowerCase()) {
  case 'rei':
    console.log('O Rei anda uma casa para qualquer direção');
    break;
  case 'bispo':
    console.log('O Bispo anda em diagonal');
    break;
  case 'rainha':
    console.log('A Rainha anda para todos os lados');
    break;
  case 'cavalo':
    console.log('O Cavalo Anda em L');
    break;
  case 'torre':
    console.log('A Torre anda na horizontal e vertical');
    break;
  case 'peão':
    console.log(
      'O Peão Anda uma casa para frente, no primeiro movimento podem ser duas'
    );
    break;
  default:
    console.log("Erro, peça inexistente!");
    break;
}
