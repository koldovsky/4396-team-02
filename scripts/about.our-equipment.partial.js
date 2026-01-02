document.body.addEventListener("htmx:afterSwap", (event) => {
  if (event.target.classList.contains("our-equipment")) {
    const images = event.target.querySelectorAll(".our-equipment__grid img");
    let zoomedImg = null;

    images.forEach((img) => {
      img.addEventListener("click", function () {
        if (zoomedImg === img) {
          img.classList.remove("img-zoomed");
          zoomedImg = null;
        } else {
          if (zoomedImg) {
            zoomedImg.classList.remove("img-zoomed");
          }
          img.classList.add("img-zoomed");
          zoomedImg = img;
        }
      });
    });
  }
});
