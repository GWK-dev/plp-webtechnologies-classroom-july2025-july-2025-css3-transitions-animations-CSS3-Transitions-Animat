// Global variable for demo
let isAnimating = false;

// Function with parameter & return value
function animateBox() {
  const box = document.querySelector('.box');
  if (!isAnimating) {
    box.classList.add('animate');
    isAnimating = true;
    return "Box started animating!";
  }
  return "Box is already animating.";
}

// Reset function
function resetBox() {
  const box = document.querySelector('.box');
  box.classList.remove('animate');
  isAnimating = false;
  return "Box reset.";
}
