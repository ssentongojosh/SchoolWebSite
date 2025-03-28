document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkMode");
  //   const themeText = document.getElementById("label");

  //   // Check for saved theme preference
  //   const currentTheme = localStorage.getItem("theme");
  //   if (currentTheme === "dark") {
  //     document.body.setAttribute("data-theme", "dark");
  //     toggle.checked = true;
  //     themeText.textContent = "Light Mode";
  //   }

  // Toggle theme
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      //   themeText.textContent = "Light Mode";
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      //   themeText.textContent = "Dark Mode";
    }
  });
});
