const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const hamburger1 = document.querySelector(".hamburger1");
const hamburger2 = document.querySelector(".hamburger2");

const cross1 = document.querySelector(".cross1");
const cross2 = document.querySelector(".cross2");

const contentLayering = document.querySelector(".content-layering");
const contentContainer = document.querySelector(".content-container");

hamburger.addEventListener("click", function (event) {
  hamburger1.style.display = "none";
  hamburger2.style.display = "none";
  cross1.style.display = "block";
  cross2.style.display = "block";

  contentLayering.style.display = "flex";
  contentContainer.style.opacity = "0.5";
  contentContainer.style.cursor = "pointer";
});

contentContainer.addEventListener("click", function (event) {
  if (contentContainer.style.cursor === "pointer") {
    hamburger1.style.display = "block";
    hamburger2.style.display = "block";
    cross1.style.display = "none";
    cross2.style.display = "none";

    contentLayering.style.display = "none";
    contentContainer.style.opacity = "1";
    contentContainer.style.cursor = "auto";
  }
});

close.addEventListener("click", function (event) {
  hamburger1.style.display = "block";
  hamburger2.style.display = "block";
  cross1.style.display = "none";
  cross2.style.display = "none";

  contentLayering.style.display = "none";
  contentContainer.style.opacity = "1";
});
