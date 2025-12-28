// Logo scroll animation
const logoContainer = document.getElementById('logo-container');
const achievements = document.getElementById('achievements');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight / 2; // adjust speed
  const logoTop = Math.max(20, 50 - (scrollY / maxScroll) * 30); // move up
  const logoLeft = 50 + (scrollY / maxScroll) * 20; // move right

  logoContainer.style.top = logoTop + '%';
  logoContainer.style.left = logoLeft + '%';
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('next').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});
