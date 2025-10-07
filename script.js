<script>
// === SLIDER VISI & MISI ===
let slideIndex = 0;
const slides = document.querySelectorAll(".visi-misi .slide");
const nextBtn = document.getElementById("nextVisi");
const prevBtn = document.getElementById("prevVisi");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});
prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});
showSlide(slideIndex);

// === SCROLL ANIMASI ===
const faders = document.querySelectorAll('.fade-in, .slide-up');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
</script>
