function startCountdown()
{
    const container = document.querySelector('.advanced-open-water-diver-image-container');
    if(container === null)
    {
        return;
    }
    const img = container.querySelector('img');
    if(img === null)
    {
        return;
    }
    const imgHTML = img.outerHTML;
    let seconds = 10;
    container.innerHTML = `<div class="advanced-open-water-diver__countdown">${seconds}s</div>`;
    const countdownEl = container.querySelector('.advanced-open-water-diver__countdown');
    const timer = setInterval(() =>
    {
        seconds -= 1;
        if(seconds > 0)
        {
            countdownEl.textContent = seconds;
        }
        else
        {
            clearInterval(timer);
            container.innerHTML = imgHTML;
        }
    }, 1000);
}

if(document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', startCountdown);
}
else
{
    startCountdown();
}

// Also start when htmx finishes loading partials (fallback)
if(window && window.document)
{
    document.body.addEventListener('htmx:afterOnLoad', startCountdown);
}