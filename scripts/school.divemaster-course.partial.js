const priceValue = document.querySelector(".divemaster-course__price-value");
const buttons = document.querySelectorAll(
  ".divemaster-course__price-toggle button"
);

const prices = {
  adult: "1000 USD",
  child: "800 USD",
};

priceValue.textContent = prices.adult;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    priceValue.textContent = prices[type];
  });
});
