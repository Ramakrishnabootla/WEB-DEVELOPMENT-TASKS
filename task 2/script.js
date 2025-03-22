const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide'); // Use `let` instead of `const` to allow updates
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const currentSlide = document.querySelector('.current-slide');
const totalSlides = document.querySelector('.total-slides');
const slideForm = document.getElementById('slide-form');

let slideIndex = 0;

// Set total slides
totalSlides.textContent = slides.length;

// Function to update slide position
function updateSlide() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide.textContent = slideIndex + 1;
}

// Next Slide
nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlide();
});

// Previous Slide
prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

// Arrow Key Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlide();
  } else if (e.key === 'ArrowLeft') {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }
});

// Add New Slide from Form
slideForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user input
  const title = document.getElementById('slide-title').value;
  const description = document.getElementById('slide-description').value;
  const imageUrl = document.getElementById('slide-image').value;

  // Create new slide
  const newSlide = document.createElement('div');
  newSlide.classList.add('slide');
  newSlide.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <img src="${imageUrl}" alt="User Added Image">
  `;
  slider.appendChild(newSlide);

  // Update the `slides` variable to include the new slide
  slides = document.querySelectorAll('.slide'); // Reinitialize `slides`

  // Update total slides count
  totalSlides.textContent = slides.length;

  // Clear the form
  slideForm.reset();

  // Move to the new slide
  slideIndex = slides.length - 1; // Set `slideIndex` to the new slide
  updateSlide();
});