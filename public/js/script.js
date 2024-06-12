const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// JavaScript for photo slideshow
var slides = [
  "../public/images/cool-blue.jpg",
  "../public/images/programming-background-collage.jpg",
  "../public/images/Web-Development-vs-Programming.jpg",
]; //  image paths
var currentSlide = 0;

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  document.querySelector(".hero-slide").style.backgroundImage =
    "url(" + slides[currentSlide] + ")";
}

setInterval(changeSlide, 6000); // Change slide every 6 seconds
