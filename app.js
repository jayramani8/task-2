document.addEventListener("DOMContentLoaded", function () {
  var loadImage = document.querySelectorAll("img.lazy");
  var timeOut;

  function lazyload() {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      loadImage.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          console.log(img.offsetTop);

        }
      });
      if (loadImage.length == 0) {
        document.removeEventListener("scroll", lazyload);

      }
    }, 1000);
  }

  document.addEventListener("scroll", lazyload);

});