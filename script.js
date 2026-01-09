// ===============================
// FADE-IN ON SCROLL
// ===============================
const faders = document.querySelectorAll(".fade");

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// ===============================
// OPTIONAL: STAGGERED FADE DELAY
// ===============================
// If you want each section's fade to appear slightly after the previous:
faders.forEach((fader, index) => {
  fader.style.animationDelay = `${index * 0.2}s`;
});
