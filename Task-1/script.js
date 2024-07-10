// let currentSlide = 0;
// const slides = document.querySelectorAll('.carousel-section');

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove('active');
//     if (i === index) {
//       slide.classList.add('active');
//     }
//   });
// }

// /* current slide = 2
// current slide+1 = 3 slides moves to 3 index
// now current slides 3 so we module them to show the current slides.
// */
// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// // showSlide(currentSlide);

/*
let currentIndex = 0;

const prevButton = document.querySelector('.prev-carousel-btn');
const nextButton = document.querySelector('.next-carousel-btn');

const imageContainer = document.querySelector('.image-container');

*/

const prevBtn = document.querySelector('.prev-carousel-btn');
const nextBtn = document.querySelector('.next-carousel-btn');
const imageContainer = document.querySelector('.image-container');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
  const width = cards[0].offsetWidth; //width of single card
  //here we move container alog with X-axis by calculating the card width * index we move along left so here we use //* - sign
  imageContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', function () {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});
