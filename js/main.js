const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.1,
  multiplier: 3.0,
  smartphone: { smooth: true },
  tablet: { smooth: true }
});

// Helper function to handle navigation to external pages
function handleExternalLink(link) {
  const href = link.getAttribute('href');
  if (href && href.trim().toLowerCase().endsWith('.html')) {
    window.location.href = href; // ← ensures navigation
    return true; // signals that navigation happened
  }
  return false;
}

// Smooth scrolling for nav links (same-page only)
document.querySelectorAll('#nav-bar a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (handleExternalLink(link)) return; // navigate if it's an external HTML page

    // ✅ Only prevent default if it’s an on-page scroll
    e.preventDefault();

    const targetID = link.getAttribute('data-target');
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
    if (handleExternalLink(link)) return; // navigate if it's an external HTML page

    e.preventDefault();

    const targetID = link.dataset.target;
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