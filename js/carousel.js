document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  for (let index = 0; index < slides.length; index++) {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (index === 0) {
      indicator.classList.add("active");
    }

    indicator.onclick = function () {
      showSlide(index);
    };
    indicatorsContainer.appendChild(indicator);
  }

  function showSlide(index) {
    if (index >= slides.length) {
      index = 0;
    }

    if (index < 0) {
      index = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      if (i === index) {
        slides[i].classList.add("active");
      } else {
        slides[i].classList.remove("active");
      }
    }
    const indicators = document.querySelectorAll(".indicator");
    for (let j = 0; j < indicators.length; j++) {
      if (j === index) {
        indicators[j].classList.add("active");
      } else {
        indicators[j].classList.remove("active");
      }
    }
    currentSlide = index;
  }

  function moveSlide(step) {
    showSlide(currentSlide + step);
  }

  let autoSlide = setInterval(function () {
    moveSlide(1);
  }, 5000);
});
