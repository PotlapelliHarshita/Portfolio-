// Lightbox functionality
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    img.src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

function reveal() {
    revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
