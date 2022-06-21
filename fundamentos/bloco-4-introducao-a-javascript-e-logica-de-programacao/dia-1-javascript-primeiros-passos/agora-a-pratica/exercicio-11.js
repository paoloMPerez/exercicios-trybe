let aliquotaInss;
let aliquotaIr;

const salarioBruto = 1850.3;

if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * 0.11;
} else {
  aliquotaInss = 570.88;
}

const salarioLiquido = salarioBruto - aliquotaInss;

if (salarioLiquido <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioLiquido <= 2826.65) {
  aliquotaIr = salarioLiquido * 0.075 - 142.8;
} else if (salarioLiquido <= 3751.05) {
  aliquotaIr = salarioLiquido * 0.15 - 354.8;
} else if (salarioLiquido <= 4664.68) {
  aliquotaIr = salarioLiquido * 0.225 - 636.13;
} else {
  aliquotaIr = salarioLiquido * 0.275 - 869.36;
}

console.log("Salário: " + (salarioLiquido - aliquotaIr));
