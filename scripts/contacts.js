function init() {
  import("./global.burger-menu.partial.js").then(mod => mod.initBurger());
  import("./global.currency.partial.js").then(mod => mod.initCurrencyTicker());

  // додавайте інші partials тут за потреби

}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  console.log(`Loaded partials: ${loadedPartialsCount}/${totalPartials}`);
  if (loadedPartialsCount - 2 === totalPartials) init();
});