// ! Active NavBar =======================

let nav = document.querySelector(".navigation-wrapper");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// ! Hide NavBar ==================

let navLink = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((e) => {
  e.addEventListener("click", function () {
    navcollapse.classList.remove("show");
  });
});
