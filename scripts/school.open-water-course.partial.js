// Функція debounce для обмеження частоти викликів
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function analyzeText() {
    const container = document.querySelector('.open-water-course');
    if (!container) return;

    const text = container.textContent;

    // Підрахунок візуальних рядків тексту для всього блоку (залежно від ширини)
    const style = getComputedStyle(container);
    const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2; // fallback
    const height = container.getBoundingClientRect().height;
    const lines = Math.round(height / lineHeight);
    console.log('Lines:', lines, 'Height:', height, 'LineHeight:', lineHeight); // Для дебагу

    // Великі букви
    const uppercase = (text.match(/[A-Z]/g) || []).length;

    // Малі букви
    const lowercase = (text.match(/[a-z]/g) || []).length;

    // Цифри
    const digits = (text.match(/\d/g) || []).length;

    // Знайти або створити status bar
    let statusBar = document.querySelector('.open-water-course__status-bar');
    if (!statusBar) {
        statusBar = document.createElement('div');
        statusBar.className = 'open-water-course__status-bar';
        // Додавання після gallery
        const galleryElement = document.querySelector('.open-water-course__gallery');
        if (galleryElement) {
            galleryElement.insertAdjacentElement('afterend', statusBar);
        } else {
            // Fallback: додати в кінець контейнера
            const container = document.querySelector('.open-water-course');
            if (container) {
                container.appendChild(statusBar);
            }
        }
    }

    // Оновлення вмісту status bar
    statusBar.innerHTML = `
        <span>Рядків: ${lines}</span> |
        <span>Великі букви: ${uppercase}</span> |
        <span>Малі букви: ${lowercase}</span> |
        <span>Цифри: ${digits}</span>
    `;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', analyzeText);
} else {
    analyzeText();
}

// Також після завантаження htmx partials
if (window && window.document) {
    document.body.addEventListener('htmx:afterOnLoad', analyzeText);
}

// Спостерігання за зміною розміру всього блоку
const container = document.querySelector('.open-water-course');
if (container) {
    const debouncedAnalyzeText = debounce(analyzeText, 200);
    const resizeObserver = new ResizeObserver(debouncedAnalyzeText);
    resizeObserver.observe(container);
}