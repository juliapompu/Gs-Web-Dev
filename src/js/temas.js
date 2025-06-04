// const botaoEscuro = document.getElementById('temaEscuro');
//     let modoEscuro = false;

//     botaoEscuro.addEventListener('click', () => {
//       modoEscuro = !modoEscuro;

//       if (modoEscuro) {
//         document.body.classList.add('modo-escuro');
//       } 
//     });

// // --------------------------------------------------------
// const botaoClaro = document.getElementById('temaClaro');
// let modoClaro = false;

// botaoClaro.addEventListener('click', () => {
//   modoClaro = !modoClaro;
  
//   if (modoClaro) {
//     document.body.classList.add('modo-claro');
//   } 
// });

// // --------------------------------------------------------
// const botaoRosa = document.getElementById('temaRosa');
//     let modoRosa = false;

//     botaoRosa.addEventListener('click', () => {
//       modoRosa = !modoRosa;

//       if (modoRosa) {
//         document.body.classList.add('modo-rosa')
//       } 
//       else {
//         document.body.classList.remove('modo-rosa')
//       }
//     });
const botaoEscuro = document.getElementById('temaEscuro');
const botaoClaro = document.getElementById('temaClaro');
const botaoRosa = document.getElementById('temaRosa');

function setTema(classe) {
  document.body.classList.remove('modo-escuro', 'modo-claro', 'modo-rosa');
  document.body.classList.add(classe);
}

botaoEscuro.addEventListener('click', () => setTema('modo-escuro'));
botaoClaro.addEventListener('click', () => setTema('modo-claro'));
botaoRosa.addEventListener('click', () => setTema('modo-rosa'));