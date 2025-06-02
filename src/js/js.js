/*  Carousel*/

const carouselSlide = document.getElementById('carousel-slide');
const images = carouselSlide.querySelectorAll('img');
let counter = 0;

function updateCarousel() {
  const slideWidth = carouselSlide.parentElement.clientWidth;
  carouselSlide.style.width = `${slideWidth * images.length}px`;
  images.forEach(img => img.style.width = `${slideWidth}px`);
  carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
}


function nextSlide() {
  counter = (counter + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  counter = (counter - 1 + images.length) % images.length;
  updateCarousel();
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

setInterval(nextSlide, 5000);


/*--------------------------*/

/*Ifs dos alertas*/

document.getElementById('estado').addEventListener('change', function() {
    if (this.value === 'SãoPaulo') {
      document.getElementById('mensagem').style.display = 'block';
    } else {
      document.getElementById('mensagem').style.display = 'none';
    }
  });

document.getElementById('estado').addEventListener('change', function(){
    if (this.value === 'RioDeJaneiro') {
      document.getElementById('mensagem').style.display = 'block';
    } else {
      document.getElementById('mensagem').style.display = 'none';
    }
  });
document.getEventListener('estado').addEventListener('change', function(){
  if (this.value === 'BH'){
    document.getElementById('mensagem').style.display = 'block';
  } else{
    document.getElementById('mensagem').style.display = 'none';
  }
});

document.getEventListener('estado').addEventListener('change', function(){
  if (this.value === 'PortoAlegre'){
    document.getElementById('mensagem').style.display = 'block';
  } else{
    document.getElementById('mensagem').style.display = 'none';
  }
});

document.getEventListener('estado').addEventListener('change', function(){
  if (this.value === 'Palmas'){
    document.getElementById('mensagem').style.display = 'block';
  } else{
    document.getElementById('mensagem').style.display = 'none';
  }
});

document.getEventListener('estado').addEventListener('change', function(){
  if (this.value === 'Natal'){
    document.getElementById('mensagem').style.display = 'block';
  } else{
    document.getElementById('mensagem').style.display = 'none';
  }
});

document.getEventListener('estado').addEventListener('change', function(){
  if (this.value === 'Amazonas'){
    document.getElementById('mensagem').style.display = 'block';
  } else{
    document.getElementById('mensagem').style.display = 'none';
  }
});