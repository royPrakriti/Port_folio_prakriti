import './style.css';
import Experience from "../Experience/experience.js";

const experience = new Experience(document.querySelector(".experience-canvas"));

// Project Carousel
function initProjectCarousel() {
  const slides = document.querySelectorAll('.project-slide');
  const dotsContainer = document.querySelector('.project-dots');
  const prevButton = document.querySelector('.prev-project');
  const nextButton = document.querySelector('.next-project');
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('project-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Update slides
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentSlide) {
        slide.classList.add('active');
      }
    });

    // Update dots
    const dots = document.querySelectorAll('.project-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    // Update transform
    const slidesContainer = document.querySelector('.project-slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Navigation functions
  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  // Add event listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initProjectCarousel();
});


