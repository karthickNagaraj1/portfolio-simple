// Smooth scroll for nav links (works with anchor hrefs)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      // close mobile menu if open
      document.querySelector('.nav-links').classList.remove('show');
      const menu = document.querySelector('.menu-toggle');
      if (menu) menu.classList.remove('active');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mobile Menu Toggle (hamburger)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
    // ARIA
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
  });
  // keyboard accessibility
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menuToggle.click();
    }
  });
}

// Optional: close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove('show');
    if (menuToggle) menuToggle.classList.remove('active');
  }
});

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // if you want one-time reveal, unobserve:
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* small contact form placeholder behavior */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // simple in-page confirmation — replace with real submit later
    alert('Thanks! Your message was received (demo).');
    contactForm.reset();
  });
}
