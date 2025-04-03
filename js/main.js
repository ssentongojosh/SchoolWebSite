document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("darkMode");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";
  }

 
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('active');
  });

});
