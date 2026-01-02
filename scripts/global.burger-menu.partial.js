let delegatedInitialized = false;

export function initBurger() {
  if (delegatedInitialized) return; // уникнути дублювання слухачів

  document.addEventListener('click', (e) => {
    // Toggle when burger button clicked (works for newly-inserted elements)
    const btn = e.target.closest('.burger-menu');
    if (btn) {
      const header = btn.closest('.global__nav-menu');
      const nav = header ? header.querySelector('.menu__buttons-block') : document.querySelector('.menu__buttons-block');
      const isActive = btn.classList.toggle('active');
      if (nav) nav.classList.toggle('is-open');
      if (header) header.classList.toggle('menu-open');
      if (isActive) document.body.classList.add('no-scroll');
      else document.body.classList.remove('no-scroll');
      btn.setAttribute('aria-expanded', String(isActive));
      return;
    }

    // Close menu when a menu link is clicked
    const link = e.target.closest('.menu__link');
    if (link) {
      const header = link.closest('.global__nav-menu');
      const btn = header ? header.querySelector('.burger-menu') : document.querySelector('.burger-menu');
      const nav = header ? header.querySelector('.menu__buttons-block') : document.querySelector('.menu__buttons-block');
      if (btn) btn.classList.remove('active');
      if (nav) nav.classList.remove('is-open');
      if (header) header.classList.remove('menu-open');
      document.body.classList.remove('no-scroll');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });

  delegatedInitialized = true;
}