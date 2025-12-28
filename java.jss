const logo = document.getElementById("logoWrapper");
const intro = document.getElementById("intro");
const logoFinal = document.getElementById("logoFinal");
const cards = document.querySelectorAll(".card");

let moved = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 60 && !moved) {
    logoFinal.appendChild(logo);
    logo.style.transform = "scale(0.85)";
    intro.style.display = "none";
    moved = true;
  }

  cards.forEach((card, index) => {
    const triggerPoint = window.innerHeight - 100;
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    }
  });
});
