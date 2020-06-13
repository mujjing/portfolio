"use strict";

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("nav--dark");
  } else {
    navbar.classList.remove("nav--dark");
  }
});

//Handle scrolling when tapping on the nav menu

const navbarmenu = document.querySelector(".navbar__menu");
navbarmenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoViews(link);
});

//Handle Scrolling when tapping contact me button

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoViews("#contact");
});

//Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__content");
const homeheight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeheight;
});

//show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoViews("#home");
});

//project
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  console.log(filter);
  if (filter == null) {
    return;
  }

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);

  //   console.log("----------------------");
  //   for (let project of projects) {
  //     console.log(project);
  //   }
  //   console.log("----------------------");

  //   for (let i = 0; i < projects.length; i++) {
  //     project = projects[i];
  //     console.log(project);
  //   }
});

function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
