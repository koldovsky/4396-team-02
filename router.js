const routes = {
  '/': 'pages/home.html',
  '/about': 'pages/about.html',
  '/packages': 'pages/packages.html',
  '/school': 'pages/school.html',
  '/contacts': 'pages/contacts.html',
};

const app = document.getElementById('app');

function getPath() {
  const hash = window.location.hash || '#/';
  return hash.slice(1) || '/';
}

async function render(path) {
  const file = routes[path];
  if (!file) {
    app.innerHTML = '<h1>404</h1><p>Сторінку не знайдено</p>';
    return;
  }
  const res = await fetch(file);
  app.innerHTML = await res.text();
}

function onRouteChange() {
  render(getPath());
}

window.addEventListener('hashchange', onRouteChange);
window.addEventListener('DOMContentLoaded', onRouteChange);