document.addEventListener("DOMContentLoaded", () => {
 // Tab functionality
 const tabs = document.querySelectorAll(".tab-btn");
 const contents = document.querySelectorAll(".tab-content");

 // Show the first tab by default
 document.querySelector(".tab-btn").classList.add("active");
 document.querySelector(".tab-content").classList.add("active");

 tabs.forEach((tab) => {
   tab.addEventListener("click", () => {
     tabs.forEach((t) => t.classList.remove("active"));
     contents.forEach((c) => c.classList.remove("active"));

     tab.classList.add("active");
     document.getElementById(tab.getAttribute("data-target")).classList.add("active");
   });
 });

 // Accordion functionality
 const accordionButtons = document.querySelectorAll(".accordion-btn");

 accordionButtons.forEach((btn) => {
   btn.addEventListener("click", () => {
     const content = btn.nextElementSibling;
     const isOpen = content.style.display === "block";

     document.querySelectorAll(".accordion-content").forEach((item) => {
       item.style.display = "none";
     });

     content.style.display = isOpen ? "none" : "block";
   });
 });
});