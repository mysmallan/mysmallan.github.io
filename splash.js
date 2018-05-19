function redirect() {
  document.location.href = "work.html";
  // document.location.replace("work.html");
}

try {
  var fadeTimeout = 70;
  // fade in all colors
  function fadeInAllColors() {
    var paths = document.querySelectorAll(".splash-link path");
    [].forEach.call(paths, function(path, i) {
      setTimeout(function() {
        path.style.fillOpacity = 1;
      }, fadeTimeout * i);
    });

    setTimeout(function() {
      redirect();
    }, paths.length * fadeTimeout + 300);
  }

  fadeInAllColors();
} catch (err) {
  redirect();
}
