document.addEventListener("DOMContentLoaded", function () {
  const loadImage = document.querySelectorAll("img.lazy");
  let timeOut;

  function lazyload() {

    timeOut = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      console.log(scrollTop + ":" + window.innerHeight);

      loadImage.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');

        }
      });
      if (loadImage.length == 0) {
        document.removeEventListener("scroll", lazyload);

      }
    }, 2000);
  }

  document.addEventListener("scroll", lazyload);

});
