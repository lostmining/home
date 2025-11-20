// 1. Domain Checker
const allowedDomain = "www.cryptoapp.store";
const currentDomain = window.location.hostname;
if (currentDomain !== allowedDomain && currentDomain !== "www." + allowedDomain) {
   window.location.href = "https://" + allowedDomain + window.location.pathname + window.location.search;
}

// 2. URL Cleanup
var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}

// 3. Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(image => imageObserver.observe(image));
});

// 4. Disable Context Menu and Selection
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// 5. Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true,
});

// 6. Popup Functions
function openPopup(paymentUrl) {
    const popup = document.getElementById("paymentPopup");
    const iframe = document.getElementById("paymentFrame");
    iframe.src = paymentUrl;
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("paymentPopup");
    const iframe = document.getElementById("paymentFrame");
    popup.style.display = "none";
    iframe.src = ""; // Clear src to stop loading
}
