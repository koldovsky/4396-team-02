(() => {
  const section = document.querySelector(".courses");
  if (!section) return;

  const modal = section.querySelector("#coursesModal");
  if (!modal) return;

  const dialog = modal.querySelector(".courses-modal__dialog");
  const modalImg = modal.querySelector(".courses-modal__image");
  const modalTitle = modal.querySelector(".courses-modal__title");
  const modalText = modal.querySelector(".courses-modal__text");
  const modalLink = modal.querySelector(".courses-modal__link");

  let lastActiveEl = null;

  function openModalFromCard(card) {
    const img = card.querySelector(".courses-card__image");
    const title = card.querySelector(".courses-card__title");
    const text = card.querySelector(".courses-card__text");
    const link = card.querySelector(".courses-card__link");

    if (!img || !title || !text || !link) return;

    lastActiveEl = document.activeElement;

    modalImg.src = img.getAttribute("src") || "";
    modalImg.alt = img.getAttribute("alt") || title.textContent.trim();

    modalTitle.textContent = title.textContent.trim();
    modalText.textContent = text.textContent.trim();

    modalLink.href = link.getAttribute("href") || "#";
    modalLink.textContent = link.textContent.trim() || "Learn more";

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    dialog.setAttribute("tabindex", "-1");
    dialog.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastActiveEl && typeof lastActiveEl.focus === "function") {
      lastActiveEl.focus();
    }
  }

  section.addEventListener("click", (e) => {
    const closeBtn = e.target.closest("[data-courses-close]");
    if (closeBtn) {
      e.preventDefault();
      closeModal();
      return;
    }

    const card = e.target.closest(".courses-card");
    if (!card) return;

    const clickedLink = e.target.closest(".courses-card__link");
    if (clickedLink) return;

    e.preventDefault();
    openModalFromCard(card);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
