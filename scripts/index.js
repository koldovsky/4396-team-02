function init() {
  import("./global.burger-menu.partial.js").then(mod => mod.initBurger());
  import("./index.why-choose-us.partial.js");
  import("./index.destinations.partial.js");

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
  if (!(node instanceof HTMLElement)) return 0;

  if (node.matches(selector) && !node.hasAttribute("data-partial-tracked")) {
    node.setAttribute("data-partial-tracked", "true");
    count++;
  }

  for (const child of node.children) {
    count += markAndCountPlaceholdersRecursive(child);
  }
  return count;
}

// Початковий підрахунок top-level partial'ів
totalPartials = markAndCountPlaceholdersRecursive(document);
//console.log(`Initial partials: ${totalPartials}`);

// Коли htmx вставляє (swap) новий partial — перевіряємо вкладені placeholders
document.body.addEventListener("htmx:afterSwap", (evt) => {
  const swappedEl = (evt && evt.detail && evt.detail.target) || document;
  const newlyFound = markAndCountPlaceholdersRecursive(swappedEl);

  if (newlyFound > 0) {
    totalPartials += newlyFound;
    //console.log(`Found ${newlyFound} nested partial(s). Total partials: ${totalPartials}`);
  }

  loadedPartialsCount++;
  //console.log(`Loaded partials: ${loadedPartialsCount}/${totalPartials}`);

  if (loadedPartialsCount === totalPartials) init();
});