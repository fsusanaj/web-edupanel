// ===========================
//  EduPanel — main.js
// ===========================

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translateY(7px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translateY(-7px)' : '';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// --- AOS (Animate On Scroll) — lightweight custom implementation ---
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger siblings inside the same parent
        const siblings = entry.target.parentElement.querySelectorAll('[data-aos]');
        let delay = 0;
        siblings.forEach((el, i) => {
          if (el === entry.target) delay = i * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

initAOS();

// --- Smooth active nav link highlight ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const anchor = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (anchor) {
      anchor.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// --- Counter animation for stats ---
function animateCounter(el, target, duration = 1200, prefix = '', suffix = '') {
  const startTime = performance.now();
  const isDecimal = String(target).includes('.');

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = eased * target;
    el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Observe solution stats
const solutionStats = document.querySelector('.solution-stats');
if (solutionStats) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const nums = solutionStats.querySelectorAll('.solution-num');
      const values = [6, 100, null, null]; // null = text, not number
      nums.forEach((el, i) => {
        if (values[i] !== null) {
          animateCounter(el, values[i], 1000, '', values[i] === 100 ? '%' : '');
        }
      });
      statsObserver.unobserve(solutionStats);
    }
  }, { threshold: 0.4 });
  statsObserver.observe(solutionStats);
}

// --- Floating notification cards: re-trigger animation on view ---
const floatingNotifs = document.querySelector('.floating-notifs');
if (floatingNotifs) {
  const notifObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const cards = floatingNotifs.querySelectorAll('.fn-card');
      cards.forEach((card, i) => {
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = `slideIn 0.6s ${i * 0.15}s both`;
      });
      notifObserver.unobserve(floatingNotifs);
    }
  }, { threshold: 0.3 });
  notifObserver.observe(floatingNotifs);
}

// --- Pricing row highlight on hover (mobile-friendly) ---
document.querySelectorAll('.pt-row').forEach(row => {
  row.addEventListener('mouseenter', () => row.style.paddingLeft = '36px');
  row.addEventListener('mouseleave', () => row.style.paddingLeft = '');
});
