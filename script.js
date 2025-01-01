document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelector('.text-slider-items').textContent.split(',');
  const textSlider = document.querySelector('.text-slider');
  let index = 0; 
  let charIndex = 0; 
  let isDeleting = false; 
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  document.querySelector('.text-slider-items').style.display = 'none';

  function typeEffect() {
    const currentWord = items[index];

    if (isDeleting) {
      textSlider.textContent = currentWord.substring(0, charIndex--);
    } else {
      textSlider.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % items.length;
      setTimeout(typeEffect, typingSpeed);
    } else {
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  typeEffect();
});

window.addEventListener('scroll', function () {
  const navBar = document.querySelector('.nav-bar');
  if (window.scrollY > 50) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});