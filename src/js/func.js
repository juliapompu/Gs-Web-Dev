prevButton.addEventListener('click', () => {
    console.log('Botão anterior clicado');
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
  });
  
  nextButton.addEventListener('click', () => {
    console.log('Botão próximo clicado');
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
  });