// Smooth logo scroll
const logoContainer = document.getElementById('logo-container');
const maxScroll = 200; // How much scroll to move logo

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollY = Math.min(scrollY, maxScroll);

  // Move logo up and slightly right
  logoContainer.style.top = `${50 - (scrollY / maxScroll) * 30}%`;
  logoContainer.style.left = `${50 + (scrollY / maxScroll) * 20}%`;
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((s,i) => s.classList.toggle('active', i === index));
}

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
