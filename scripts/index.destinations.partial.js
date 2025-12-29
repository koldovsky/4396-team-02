const DESTINATIONS_CARDS = [
  {
    id: "racha-yai",
    title: "Racha Yai",
    text: "Ideal for beginners. Experienced divers come here only to get in shape after long breaks between dives...",
    image: "./assets/images/sections/destinations/racha_yai.png",
    alt: "Racha Yai photo",
    link: "about.html",
    reverse: false,
  },
  {
    id: "anemone-reef",
    title: "Anemone Reef",
    text: "A limestone rock rising from a depth of 30 meters. Its eastern slope is a gentle descent...",
    image: "./assets/images/sections/destinations/anemone_reef.png",
    alt: "Anemone Reef photo",
    link: "about.html",
    reverse: true,
  },
  {
    id: "king-cruiser",
    title: "King Cruiser",
    text: "King Cruiser is a large car ferry that sank in 1997 after colliding with Anemone Reef...",
    image: "./assets/images/sections/destinations/king_cruiser.png",
    alt: "King Cruiser wreck photo",
    link: "about.html",
    reverse: false,
    withPackagesButton: true,
  },
];

function createDestinationCardTemplate({ id, title, text, image, alt, link, reverse }) {
  return `
    <div class="destinations__item destinations__item--${id}">
      <div class="destinations__main ${
        reverse ? "destinations__main--reverse" : ""
      }">
        <div class="destinations__img">
          <img src="${image}" alt="${alt}" />
        </div>

        <div class="destinations__content">
          <h2 class="destinations__subtitle">${title}</h2>
          <p class="destinations__text">${text}</p>
          <a href="${link}" class="destinations__link destinations__link--read-more">
            READ MORE
          </a>
        </div>
      </div>
  `;   
}
