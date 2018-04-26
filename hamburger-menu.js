document
  .querySelector(".hamburger-button")
  .addEventListener("click", onButtonClick);

function onButtonClick() {
  document.querySelector(".header").classList.toggle("menu-open");
  document.querySelector(".meny").classList.toggle("visible");
  document.querySelector(".hamburger-button").classList.toggle("open");
}
