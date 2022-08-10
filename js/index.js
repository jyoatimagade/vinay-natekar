// ------------------- lOader js

let loader = document.querySelector(".loader");

window.addEventListener("load", function vanish() {
  loader.classList.add("disappear");
});

//------------------ Navigation js
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("section").each(function (i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
        if ($(this).position().top <= windscroll - 0) {
          $("nav li.active").removeClass("active");
          $("nav li").eq(i).addClass("active");
        }
      });
    } else {
      $("nav li.active").removeClass("active");
      $("nav li:first").addClass("active");
    }
  })
  .scroll();
