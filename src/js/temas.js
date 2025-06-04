const botaoEscuro = document.getElementById('temaEscuro');
const botaoClaro = document.getElementById('temaClaro');
const botaoRosa = document.getElementById('temaRosa');

function setTema(classe) {
  document.body.classList.remove('modo-escuro', 'modo-claro', 'modo-rosa');
  document.body.classList.add(classe);
  localStorage.setItem('tema', classe);
}
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
  document.body.classList.add(temaSalvo);
}

botaoEscuro.addEventListener('click', () => setTema('modo-escuro'));
botaoClaro.addEventListener('click', () => setTema('modo-claro'));
botaoRosa.addEventListener('click', () => setTema('modo-rosa'));