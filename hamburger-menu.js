document
  .querySelector(".hamburger-button")
  .addEventListener("click", onButtonClick);

function onButtonClick() {
  document.querySelector(".header").classList.toggle("menu-open");
  document.querySelector(".meny").classList.toggle("visible");
  document.querySelector(".hamburger-button").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var fader = document.querySelector(".fader");
    if (fader) {
      fader.classList.add("fade-out");
      setTimeout(function() {
        fader.classList.add("hide");
      }, 300);
    }
  }, 1);
});
