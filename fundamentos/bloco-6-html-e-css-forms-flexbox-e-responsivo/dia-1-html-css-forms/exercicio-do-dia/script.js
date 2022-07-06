function pararBtn(event) {
  event.preventDefault();
}

function limparDados() {
  const formInfo = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formInfo.length; index++) {
    const info = formInfo[index];
    info.value = ''
    info.checked = false;    
  }
  textArea.value = ''
}

function habilitarBtn () {
  const btnEnviar = document.querySelector('#btn-enviar');
  const agreement = document.querySelector('#agreement');
  btnEnviar.disabled = !agreement.checked;
}

window.onload = function () {
  const btnEnviar = document.querySelector('#btn-enviar');
  btnEnviar.addEventListener('click', pararBtn);

  const btnLimpar = document.querySelector('#btn-limpar');
  btnLimpar.addEventListener('click', limparDados);

  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', habilitarBtn);
};


