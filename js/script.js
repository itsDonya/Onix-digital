// Hamburger menu
const hamburger = document.querySelector(".hamburger-icon");
const firstHamburgerLine = document.querySelector(
  ".hamburger-icon span:first-child"
);
const secondHamburgerLine = document.querySelector(
  ".hamburger-icon span:nth-child(2)"
);
const thirdHamburgerLine = document.querySelector(
  ".hamburger-icon span:last-child"
);

const navbar = document.querySelector(".top-nav");

let opened = false;
hamburger.addEventListener("click", () => {
  opened = opened ? false : true;

  firstHamburgerLine.style.transform = opened ? "rotate(45deg)" : "rotate(0)";
  thirdHamburgerLine.style.transform = opened ? "rotate(-45deg)" : "rotate(0)";
  secondHamburgerLine.style.display = opened ? "none" : "block";

  navbar.style.transform = opened ? "translateX(0)" : "translateX(100%)";
  navbar.style.opacity = opened ? "1" : "0";
});
