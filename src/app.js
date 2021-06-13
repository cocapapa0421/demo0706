"use strict";
import "./styles/styles.scss";

// HTML Nodes
const mobileMenu = document.querySelector(".jsMobMainMenu");
const mobileNavigation = document.querySelector(".jsMobNavigation");
const buttonOpenMobileMenu = document.querySelector(".jsOpenMobileMenu");
const buttonOpenMobileSearch = document.querySelector(".jsOpenMobileSearch");

// Helper function
const setOverflowHidden = (val) =>
  (document.documentElement.style.overflow = val);

// Handler Function
const handleSwitchMobileSubMenu = function (e) {
  const target = e.target;

  if (!target.classList.contains("mob-main-menu__link")) return;

  const hasSubMenu = target.closest("li.has-sub-menu");

  if (!hasSubMenu) return;
  e.preventDefault();
  this.querySelectorAll(".mob-main-menu__item").forEach((el) => {
    if (el !== hasSubMenu) el.classList.remove("is-active");
  });
  hasSubMenu.classList.toggle("is-active");
};

const handleSwitchMobileNavigation = (e) => {
  const button = e.target.closest(".mob-header__button");
  const action = button.dataset.mobAction;
  const openTarget = button.dataset.openTarget;

  openTarget === "open-mobile-menu"
    ? mobileNavigation.classList.remove("open-mobile-search")
    : mobileNavigation.classList.remove("open-mobile-menu");
  if (!action || !openTarget) return;

  let icon = action === "open" ? "la-times" : "la-bars";

  action === "open" ? setOverflowHidden("hidden") : setOverflowHidden("unset");
  button.querySelector("i").classList.remove("la-bars", "la-times");
  button.querySelector("i").classList.add(icon);
  button.dataset.mobAction = action === "open" ? "close" : "open";
  mobileNavigation.classList.toggle(openTarget);
};

// Add Event Listener
mobileMenu.addEventListener("click", handleSwitchMobileSubMenu);
buttonOpenMobileMenu.addEventListener("click", handleSwitchMobileNavigation);
buttonOpenMobileSearch.addEventListener("click", handleSwitchMobileNavigation);
