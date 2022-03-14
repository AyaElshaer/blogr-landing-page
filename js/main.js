const navLinks = document.querySelector(".nav-items");
const headerSec = document.querySelector(".header");
const dropdowns = document.querySelectorAll(".ui.dropdown");
const icon = document.querySelector(".icons");
const links = document.querySelectorAll(".link");

links.forEach( link => {
  link.addEventListener("click", function () {
    headerSec.classList.add("header-height");
  });
 
});

icon.addEventListener("click", function () {
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close");
  navLinks.classList.toggle("show");
  closeBtn.classList.toggle("show");
  hamburger.classList.toggle("hidde");

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("floating");
    dropdown.classList.add("fluid");
  });
  headerSec.classList.remove("header-height");
});

$(".ui.dropdown").dropdown();
