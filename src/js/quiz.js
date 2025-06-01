const button = document.getElementById('botaoEnviar')
button.addEventListener('click', function(event){
  event.preventDefault()
  const questao1 = document.querySelector("input[name='questao1']:checked")
  const questao2 = document.querySelector("input[name='questao2']:checked")
  const questao3 = document.querySelector("input[name='questao3']:checked")
  const questao4 = document.querySelector("input[name='questao4']:checked")
  const questao5 = document.querySelector("input[name='questao5']:checked")
  const questao6 = document.querySelector("input[name='questao6']:checked")
  const questao7 = document.querySelector("input[name='questao7']:checked")
  const questao8 = document.querySelector("input[name='questao8']:checked")
  const questao9 = document.querySelector("input[name='questao9']:checked")
  const questao10 = document.querySelector("input[name='questao10']:checked")
  if (!questao1 || !questao2 || !questao3 || !questao4 || !questao5 || !questao6 || !questao7 || !questao8 || !questao9 || !questao10) {
    alert('Por favor, responda todas as questões antes de enviar.')
    return
  }
  
  let questoesCertas = 0
  if (questao1.value == "enchenteChuvasIntensas") {
    console.log("correto")
    questoesCertas++
  }
  if (questao2.value == "terremotoSubmarino") {
    console.log("correto")
    questoesCertas++
  }
  if (questao3.value == "sismografo") {
    console.log("correto")
    questoesCertas++
  }
  if (questao4.value == "tufaoCiclone") {
    console.log("correto")
    questoesCertas++
  }
  if (questao5.value == "avalanche") {
    console.log("correto")
    questoesCertas++
  }
  if (questao6.value == "lavaGasesToxicos") {
    console.log("correto")
    questoesCertas++
  }
  if (questao7.value == "faltaChuva") {
    console.log("correto")
    questoesCertas++
  }
  if (questao8.value == "chuvaForte") {
    console.log("correto")
    questoesCertas++
  }
  if (questao9.value == "furacao") {
    console.log("correto")
    questoesCertas++
  }
  if (questao10.value == "embaixoDeMoveis") {
    console.log("correto")
    questoesCertas++
  }
  // alert(questoesCertas)


  const paragrafo = document.getElementById("paragrafo")
  paragrafo.innerText = `Você acertou ${questoesCertas} de 10`
  console.log(paragrafo.innerText)

})
