// script.js - JavaScript for LifeLink website

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements to fade in
document.querySelectorAll('.step-card, .safety-card, .hero-stats').forEach(card => {
    observer.observe(card);
});

// Optional: Button click tracking (for analytics)
document.querySelectorAll('.hero-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent.trim());

    });
});


function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-menu-open');
}

document.querySelector("#registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const fd = new FormData(this);
  console.log("Registering donor:", Object.fromEntries(fd.entries()));
  alert("Thank you! Your registration is submitted.");
  this.reset();
});