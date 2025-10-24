const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.1,
  multiplier: 3.0,
  smartphone: { smooth: true },
  tablet: { smooth: true }
});

// Smooth scrolling for nav links (same-page only)
document.querySelectorAll('#nav-bar a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetID = link.getAttribute('data-target');
    const href = link.getAttribute('href');

    // ✅ Allow normal navigation for external pages
    if (href && href.endsWith('.html')) return;

    // ✅ Only prevent default if it’s an on-page scroll
    e.preventDefault();

    if (targetID) {
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        scroll.scrollTo(targetEl, {
          offset: 0,
          duration: 1000,
          easing: [0.25, 0.00, 0.35, 1.00]
        });
      }
    }
  });
});

window.addEventListener('load', () => {
  scroll.update();
});

// Footer smooth scrolling (same logic)
const footerLinks = document.querySelectorAll('.footer-home-link a');

footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetID = link.dataset.target;
    const href = link.getAttribute('href');

    // ✅ Allow normal navigation for external pages
    if (href && href.endsWith('.html')) return;

    // ✅ Only prevent default for in-page scroll
    e.preventDefault();

    if (targetID) {
      const targetSection = document.getElementById(targetID);
      if (targetSection) scroll.scrollTo(targetSection);
    }
  });
});

// Active link effect
const navLinks = document.querySelectorAll('#nav-bar ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
