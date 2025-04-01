document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Close all panels
      accordions.forEach((item) => {
        if (item !== this) {
          item.classList.remove("active");
          item.nextElementSibling.style.display = "none";
        }
      });

      // Toggle the clicked panel
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});
