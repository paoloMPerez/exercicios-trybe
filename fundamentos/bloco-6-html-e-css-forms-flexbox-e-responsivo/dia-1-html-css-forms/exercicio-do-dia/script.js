function pararBtn(event) {
  event.preventDefault();
  const validar = validarInput();
  if (validar === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

function limparDados() {
  const formInfo = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formInfo.length; index++) {
    const info = formInfo[index];
    info.value = "";
    info.checked = false;
  }
  textArea.value = "";
}

function habilitarBtn() {
  const btnEnviar = document.querySelector("#btn-enviar");
  const agreement = document.querySelector("#agreement");
  btnEnviar.disabled = !agreement.checked;
}

function validarInput() {
  const nome = document.querySelector("#nome-completo").value.length;
  const nomeInvalido = nome < 10 || nome > 40;

  const email = document.querySelector("#nome-completo").value.length;
  const emailInvalido = email < 10 || email > 50;

  const resposta = document.querySelector("#pq").value.length;
  const respostaInvalida = resposta > 500;

  if (nomeInvalido || emailInvalido || respostaInvalida) {
    return false;
  } else {
    return true;
  }
}

window.onload = function () {
  const btnEnviar = document.querySelector("#btn-enviar");
  btnEnviar.addEventListener("click", pararBtn);

  const btnLimpar = document.querySelector("#btn-limpar");
  btnLimpar.addEventListener("click", limparDados);

  const agreement = document.querySelector("#agreement");
  agreement.addEventListener("change", habilitarBtn);
};
