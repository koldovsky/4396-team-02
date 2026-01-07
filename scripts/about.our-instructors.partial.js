export function initOurInstructors() {
  const container = document.querySelector('.our-instructors__container__cards');
  if (!container) return;

  // Захист від повторної ініціалізації
  if (container.dataset.oiInit === 'true') return;
  container.dataset.oiInit = 'true';

  const cards = () => container.querySelectorAll('.our-instructors__card');

  const clearActive = () => {
    cards().forEach(c => {
      c.classList.remove('is-active');
      c.setAttribute('aria-pressed', 'false');
    });
  };

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.our-instructors__card');
    if (!card) return;
    const isActive = card.classList.contains('is-active');
    clearActive();
    if (!isActive) {
      card.classList.add('is-active');
      card.setAttribute('aria-pressed', 'true');
    }
  });

  // Додаємо атрибути для доступності
  cards().forEach(card => {
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');
    if (!card.hasAttribute('aria-pressed')) card.setAttribute('aria-pressed', 'false');
  });
}