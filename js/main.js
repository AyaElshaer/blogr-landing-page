const navLinks = document.querySelector(".nav-content");
const dropdowns = document.querySelectorAll(".ui.dropdown");
const icon = document.querySelector(".icons");

icon.addEventListener("click", function () {
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close");

  navLinks.classList.toggle("show");
  closeBtn.classList.toggle("show");
  hamburger.classList.toggle("hidde");
  
});

$(".ui.dropdown").dropdown();
