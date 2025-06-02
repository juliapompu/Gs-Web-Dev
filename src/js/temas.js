const botao = document.getElementById('botao-tema');
    let modoEscuro = false;

    botao.addEventListener('click', () => {
      modoEscuro = !modoEscuro;

      if (modoEscuro) {
        document.body.style.backgroundColor = '#121212';
        botao.textContent = '☀️';
      } else {
        document.body.style.backgroundColor = '#ffffff';
        botao.textContent = '🌙';
      }
    });