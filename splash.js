function redirect() {
  document.location.href = "work.html";
}

try {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    fadeInAllColors();
  }

  document
    .querySelector(".splash-link")
    .addEventListener("click", function(event) {
      event.preventDefault();

      // fade in all colors
      fadeInAllColors();
    });

  // fade in all colors
  function fadeInAllColors() {
    var paths = document.querySelectorAll(".splash-link path");
    [].forEach.call(paths, function(path, i) {
      setTimeout(function() {
        path.style.fill = path.dataset.color;
      }, 50 * i);
    });

    setTimeout(function() {
      redirect();
    }, paths.length * 50 + 300);
  }
} catch (err) {
  redirect();
}
