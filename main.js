const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
  nav.classList.toggle("nav--active");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
  handleNavItemsAnimation()
};

// animation for items

const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = `.${delayTime}s`;
    delayTime++;
  });
};

navBtn.addEventListener("click", handleNav);
