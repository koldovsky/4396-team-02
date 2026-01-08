const API_URL = 'https://nn2sc6e5c5.execute-api.eu-north-1.amazonaws.com/bestobmin-parser-API/rates';
const ROTATE_MS = 5000;        // показ наступної валюти кожні 15s
const REFRESH_MS = 180 * 60 * 1000; // оновлювати rates кожні 10 хв (опціонально)
const NEXT_TRY_MS = 30 * 1000; // повторна спроба отримати rates через 30s, якщо спочатку не вийшло

let intervalId = null;
let refreshIntervalId = null;
let currentIndex = -1;
let rates = [];
let tickerInitialized = false;

async function fetchRates() {
  try {
    console.log('Fetching currency rates...');
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    rates = Array.isArray(data.rate) ? data.rate : [];
  } catch (err) {
    console.error('Rates fetch failed:', err);
  }
}

function normalizeLabel(name = '') {
  return String(name).trim();
}

function showNext() {
  if (!rates.length) return;
  const currencyEl = document.querySelector('.currency-display');
  if (!currencyEl) return;
  currentIndex = (currentIndex + 1) % (rates.length - 1);
  const item = rates[currentIndex];
  const label = normalizeLabel(item.currency);
  currencyEl.textContent = `${label}: ${item.buy} UAH/${item.sell} UAH`;
}

function startTicker() {
  if (tickerInitialized) return;
  tickerInitialized = true;

  (async () => {
    await fetchRates();

    if (!rates.length) {
      const el = document.querySelector('.currency-display');
      if (el) el.textContent = 'Currency rates unavailable';
      // повторна спроба через 30s
      setTimeout(async () => {
        await fetchRates();
        if (rates.length) {
          currentIndex = -1;
          showNext();
          intervalId = setInterval(showNext, ROTATE_MS);
          refreshIntervalId = setInterval(fetchRates, REFRESH_MS);
        }
      }, NEXT_TRY_MS);
      return;
    }

    currentIndex = -1;
    showNext(); // показати одразу першу валюту
    clearInterval(intervalId);
    intervalId = setInterval(showNext, ROTATE_MS);

    // опціонально: оновлювати весь масив рідше (але не на кожному ротації)
    clearInterval(refreshIntervalId);
    refreshIntervalId = setInterval(fetchRates, REFRESH_MS);
  })();
}

export function initCurrencyTicker() {
  const el = document.querySelector('.currency-display');
  if (el) { startTicker(); return; }

  const onSwap = (evt) => {
    const swappedEl = (evt && evt.detail && evt.detail.target) || document;
    if (swappedEl.querySelector && swappedEl.querySelector('.currency-display')) {
      document.body.removeEventListener('htmx:afterSwap', onSwap);
      startTicker();
    }
  };

  document.body.addEventListener('htmx:afterSwap', onSwap);
  document.addEventListener('DOMContentLoaded', () => {
    const e = document.querySelector('.currency-display');
    if (e) startTicker();
  }, { once: true });
}

export function stopCurrencyTicker() {
  clearInterval(intervalId);
  clearInterval(refreshIntervalId);
  intervalId = null;
  refreshIntervalId = null;
  tickerInitialized = false;
}