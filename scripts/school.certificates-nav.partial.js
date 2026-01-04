export function initCertificatesPromo() {
    const certificates = document.querySelectorAll('.cert-img');

    if (certificates.length === 0) return;

    certificates.forEach(cert => {
        if (cert.dataset.promoActive) return;


        cert.style.cursor = 'pointer'; 

        cert.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            
            alert("🎉 Secret bonus found!\n\nYour promo code: DIVE15\n15% discount on all school services.");
        });

        cert.dataset.promoActive = "true";
    });
}