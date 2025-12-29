// Get DOM elements
const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".menu__buttons-block");
const header = document.querySelector(".global__nav-menu");
const menuLinks = document.querySelectorAll(".menu__link");

if (burger && nav) {
  // Toggle menu function
  function toggleMenu() {
    burger.classList.toggle("active");        // клас для анімації хрестика
    nav.classList.toggle("is-open");
    header && header.classList.toggle("menu-open"); // змінює фон хедера
    document.body.classList.toggle("no-scroll");
    burger.setAttribute('aria-expanded', burger.classList.contains('active'));
  }

  // Close menu function
  function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("is-open");
    header && header.classList.remove("menu-open");
    document.body.classList.remove("no-scroll");
    burger.setAttribute('aria-expanded', 'false');
  }

  // Add click event listener to burger button
  burger.addEventListener("click", toggleMenu);

  // Add click event listeners to all menu links
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}