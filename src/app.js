"use strict";
import "./styles/styles.scss";

// HTML Nodes
const mobileMenu = document.querySelector(".jsMobMainMenu");
const mobileNavigation = document.querySelector(".jsMobNavigation");
const buttonOpenMobileMenu = document.querySelector(".jsOpenMobileMenu");
const buttonOpenMobileSearch = document.querySelector(".jsOpenMobileSearch");

// Helper function
const setOverflow = (val) => (document.documentElement.style.overflow = val);

// Handler Function
const handleSwitchMobileSubMenu = function (e) {
  const target = e.target;
  const liElement = target.closest("li");

  if (!liElement) return;

  [...liElement.parentElement.children].forEach((element) => {
    if (element !== liElement) element.classList.remove("is-active");
  });

  liElement.classList.toggle("is-active");

  const icon = liElement.classList.contains("is-active")
    ? "las la-angle-down"
    : "las la-angle-right";
  liElement.querySelector("i").className = icon;
};

const handleSwitchMobileSearch = (e) => {
  const target = e.target;
  const button = target.closest(".jsOpenMobileSearch");

  if (!button) return;

  button.classList.toggle("is-active");
  buttonOpenMobileMenu.classList.remove("is-active");
  mobileNavigation.classList.remove("open-mobile-menu");
  mobileNavigation.classList.toggle("open-mobile-search");
};

const handleSwitchMobileMenu = (e) => {
  const target = e.target;
  const button = target.closest(".jsOpenMobileMenu");

  if (!button) return;

  button.classList.toggle("is-active");
  buttonOpenMobileSearch.classList.remove("is-active");
  mobileNavigation.classList.remove("open-mobile-search");
  mobileNavigation.classList.toggle("open-mobile-menu");
};

// Add Event Listener
mobileMenu.addEventListener("click", handleSwitchMobileSubMenu);
buttonOpenMobileMenu.addEventListener("click", handleSwitchMobileMenu);
buttonOpenMobileSearch.addEventListener("click", handleSwitchMobileSearch);
