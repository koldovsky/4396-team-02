function init() {
  import("./global.burger-menu.partial.js").then(mod => mod.initBurger());
  import("./school.advanced-open-water-diving.partial.js");

  // додавайте інші partials тут за потреби

}

const selector = '[hx-trigger="load"], [data-hx-trigger="load"]';
let totalPartials = 0;
let loadedPartialsCount = 0;

/**
 * Рекурсивно обходить вузол та підвузли, знаходить placeholders,
 * маркує їх (щоб уникнути дублювання) і повертає кількість нових.
 */
function markAndCountPlaceholdersRecursive(node) {
  let count = 0;
  if (!(node instanceof HTMLElement)) return 0; // return if node is not an HTMLElement

  if (node.matches(selector) && !node.hasAttribute("data-partial-tracked")) {
    node.setAttribute("data-partial-tracked", "true");
    count++;
  }

  for (const child of node.children) count += markAndCountPlaceholdersRecursive(child);

  return count;
}

// initial counting top-level partials
totalPartials = markAndCountPlaceholdersRecursive(document);

// When htmx inserts (swap) a new partial — check nested placeholders
document.body.addEventListener("htmx:afterSwap", (evt) => {
  const swappedEl = (evt && evt.detail && evt.detail.target) || document;
  const newlyFound = markAndCountPlaceholdersRecursive(swappedEl);

  if (newlyFound > 0) totalPartials += newlyFound;

  loadedPartialsCount++;

  if (loadedPartialsCount === totalPartials) init();
});