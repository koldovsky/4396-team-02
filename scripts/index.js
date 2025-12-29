function init() {
  import("./global.burger-menu.partial.js");
  import("./index.why-choose-us.partial.js");
  import("./index.destinations.partial.js");
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