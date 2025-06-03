const botaoEscuro = document.getElementById('temaEscuro');
    let modoEscuro = false;

    botaoEscuro.addEventListener('click', () => {
      modoEscuro = !modoEscuro;

      if (modoEscuro) {
        document.body.style.backgroundColor = '#062F4F';
      } 
    });

const botaoClaro = document.getElementById('temaClaro');
    let modoClaro = false;

    botaoClaro.addEventListener('click', () => {
      modoClaro = !modoClaro;

      if (modoClaro) {
        document.body.style.backgroundColor = '#ffffff';
      } 
    });

const botaoRosa = document.getElementById('temaRosa');
    let modoRosa = false;

    botaoRosa.addEventListener('click', () => {
      modoRosa = !modoRosa;

      if (modoRosa) {
        document.body.classList.add('modo-rosa')
      } 
      else {
        document.body.classList.remove('modo-rosa')
      }
    });