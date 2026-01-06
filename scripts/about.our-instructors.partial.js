export function initOurInstructors() {
  const cards = document.querySelectorAll('.our-instructors__card');
  console.log("cards found =", cards.length);

  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isActive = card.classList.contains('is-active');

      cards.forEach(c => c.classList.remove('is-active'));

      if (!isActive) {
        card.classList.add('is-active');
      }
    });
  });
}