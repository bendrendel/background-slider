const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const body = document.body;
const slides = document.querySelectorAll(".slide");
let activeSlide = 0;

setActiveSlide(activeSlide);

leftArrow.addEventListener("click", () => {
  activeSlide = (activeSlide + slides.length - 1) % slides.length;
  setActiveSlide(activeSlide);
});

rightArrow.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length;
  setActiveSlide(activeSlide);
});

function setActiveSlide(idx) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[idx].classList.add("active");
  body.style.backgroundImage = slides[idx].style.backgroundImage;
}
