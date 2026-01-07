export function initDivingPackages() {
  const cards = document.querySelectorAll(
    ".diving-packages__package-card"
  );

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("diving-packages__package-card--active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("diving-packages__package-card--active");
    });
  });
  
  cards.forEach((card) => {
  card.addEventListener("click", () => {
    // убрать selected со всех карточек
    cards.forEach((c) =>
      c.classList.remove("diving-packages__package-card--selected")
    );

    // добавить selected текущей
    card.classList.add("diving-packages__package-card--selected");
  });
});
}