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

// Js do menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', function() {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
}