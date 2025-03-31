document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("darkMode");
  const currentTheme = localStorage.getItem("theme");

  // Apply the saved theme on page load
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";
  }

  // Toggle theme on checkbox change
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
});
