const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__bottom-year");

const handleNav = () => {
  nav.classList.toggle("nav--active");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
  handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = `.${delayTime}s`;
    delayTime++;
  });
};

const handleCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.innerText = currentYear;
};

const handleCurrentSection = () => {
  const currentSection = window.scrollY;

  allSections.forEach((section) => {
    if (
      section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 20
    ) {
      navBtnBars.classList.add("black-bars-color");
    } else if (
      !section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 20
    ) {
      navBtnBars.classList.remove("black-bars-color");
    }
  });
};

handleCurrentYear();

navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleCurrentSection);
