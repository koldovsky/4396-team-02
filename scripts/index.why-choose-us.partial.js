const WHY_CHOOSE_US_CARDS = [
  {
    icon: "./assets/images/sections/why-choose-us/icons/full-service.svg",
    alt: "Full service icon",
    title: "Full Service",
    text: "We organize the whole diving program with transfers from your hotel and meals on-board.",
  },
  {
    icon: "./assets/images/sections/why-choose-us/icons/certification.svg",
    alt: "Certification icon",
    title: "Certification",
    text: "PADI certification. Become a professional scuba diver during your next trip to Phuket.",
  },
  {
    icon: "./assets/images/sections/why-choose-us/icons/tours.svg",
    alt: "Tours icon",
    title: "Tours",
    text: "We also offer daily diving tours to Racha Yai, Anemone Reef, Shark Point, Racha Noi and more.",
  },
  {
    icon: "./assets/images/sections/why-choose-us/icons/diving-safari.svg",
    alt: "Diving safari icon",
    title: "Diving Safari",
    text: "Go diving to Hin Muang, Koh Haa-Neua, Koh Haa-Yai and Similan Islands.",
  },
];

function createWhyChooseUsCardMarkup({ icon, alt, title, text }) {
  return `
    <article class="why-choose-us__item">
      <div class="why-choose-us__item-icon-wrapper">
        <img width="60" src="${icon}" alt="${alt}" class="why-choose-us__item-icon" />
      </div>
      <h2 class="why-choose-us__item-title">${title}</h2>
      <p class="why-choose-us__item-text">${text}</p>
    </article>
  `;
}

function renderWhyChooseUsCards() {
  const container = document.querySelector(".why-choose-us__list");
  if (!container) return;

  container.innerHTML = WHY_CHOOSE_US_CARDS.map(
    createWhyChooseUsCardMarkup
  ).join("");
}

renderWhyChooseUsCards();

export { WHY_CHOOSE_US_CARDS, renderWhyChooseUsCards };
