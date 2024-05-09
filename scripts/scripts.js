let toDarkModeIco = document.getElementsByClassName("to-dark-mode-icon");
let toLightModeIco = document.getElementsByClassName("to-light-mode-icon");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  Array.from(toLightModeIco).forEach((element) => {
    element.classList.remove("hidden");
  });
} else {
  Array.from(toDarkModeIco).forEach((element) => {
    element.classList.remove("hidden");
  });
}

function toggleDarkMode(params) {
  // toggle icons inside button
  Array.from(toDarkModeIco).forEach((element) => {
    element.classList.toggle("hidden");
  });
  Array.from(toLightModeIco).forEach((element) => {
    element.classList.toggle("hidden");
  });

  // if set via local storage previously
  if ("theme" in localStorage) {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
}

let navIconTop = document.getElementById("icon-top");
let navIconBottom = document.getElementById("icon-bottom");
let navToggleButton = document.getElementsByClassName("toggle-nav");
let navMenu = document.getElementById("nav-menu");

function openCloseNav() {
  let navIconTopClassList = ["rotate-45", "scale-x-110", "translate-x-1.5"];
  let navIconBottomClassList = [
    "origin-bottom-left",
    "-rotate-45",
    "scale-x-110",
    "translate-x-1.5",
  ];

  navMenu.classList.toggle("translate-x-full");

  navIconTopClassList.forEach((elemClass) => {
    navIconTop.classList.toggle(elemClass);
  });
  navIconBottomClassList.forEach((elemClass) => {
    navIconBottom.classList.toggle(elemClass);
  });
}
