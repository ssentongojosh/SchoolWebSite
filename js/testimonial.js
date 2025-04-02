document.addEventListener("DOMContentLoaded", function () {
  var testimonials = document.querySelectorAll(".testimonial");
  var k = 0;

  function showTestimonial() {
    var current = testimonials[k];
    current.classList.remove("active");
    current.classList.add("prev");

    current.addEventListener("transitionend", function handler() {
      current.classList.remove("prev");
      current.removeEventListener("transitionend", handler);
    });

    k = (k + 1) % testimonials.length;
    var next = testimonials[k];
    next.classList.add("active");
  }

  testimonials[0].classList.add("active");

  setInterval(showTestimonial, 4000);
});
