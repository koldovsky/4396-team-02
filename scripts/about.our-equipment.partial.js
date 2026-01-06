export function initOurEquipment() {
  const section = document.querySelector(".our-equipment");
  if (!section) return;

  const images = section.querySelectorAll(".our-equipment__grid img");
  let zoomedImg = null;

  images.forEach((img) => {
    img.addEventListener("click", () => {
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
