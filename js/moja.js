let navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = '0'
}

function hideMenu() {
    navLinks.style.right = '-200px'
}


// Function to check and apply the sticky class

window.addEventListener("scroll", function() {
    var header = this.document.querySelector("header")
    header.classList.toggle("sticky", this.window.scrollY > 0)
})


//about slide show


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// thematic
const slider = document.querySelector('.slider-edu');
const slides = document.querySelectorAll('.slide-edu');

let currentSlide = 0;

function goToSlide(slideIndex) {
    if (slideIndex < 0 || slideIndex >= slides.length) return;
    currentSlide = slideIndex;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds

// Optional: Add event listeners for manual navigation
// const nextButton = document.querySelector('.next-button');
// const prevButton = document.querySelector('.prev-button');
// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



