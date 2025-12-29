const diveStatuses = [
  "Perfect conditions for diving",
  "Calm water and clear visibility",
  "Great day to explore coral reefs",
  "Warm water and rich marine life",
  "Ideal weather for underwater photography",
  "Excellent tides for diving adventures",
  "Safe and enjoyable diving experience",
  "Vibrant underwater ecosystem today",
  "Optimal conditions for night diving",
  "Refreshing dive in crystal-clear waters",
  "Excellent visibility for underwater photography",
  "Gentle currents and comfortable depth",
  "Ideal conditions for beginner divers",
  "Discover vibrant reefs and tropical fish",
  "Experience the thrill of deep-sea diving",
  "Perfect day for a wreck dive adventure",
  "Explore hidden underwater caves today",
  "Enjoy a peaceful dive with abundant marine life",
  "Great conditions for snorkeling and diving",
  "Dive into clear waters with stunning views",
];

const statusElement = document.querySelector(".gallery__status");
let currentIndex = 0;

setInterval(() => {
  statusElement.style.opacity = "0";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % diveStatuses.length;
    statusElement.textContent = diveStatuses[currentIndex];
    statusElement.style.opacity = "0.85";
  }, 300);
}, 8000);
