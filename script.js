/*
  script.js — Interactivity for the portfolio
  - Mobile menu toggle
  - Smooth scrolling for navigation links
  - Animated skill progress bars on scroll
  - Simple contact form placeholder handling
*/

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navList.style.display = navList.style.display === 'flex' ? '' : 'flex';
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href || href === '#') return;
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      // close mobile nav after click
      if(window.innerWidth < 720 && navList) navList.style.display = '';
    }
  });
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animate progress bars on load
const progressBars = document.querySelectorAll('.progress-bar');

function animateSkills(){
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value') || '0';
    bar.style.width = value + '%';
  });
}

animateSkills();

const heroPhoto = document.querySelector('.hero-photo');
heroPhoto?.addEventListener('mousemove', (event) => {
  const rect = heroPhoto.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  heroPhoto.style.transform = `rotateX(${y * 8}deg) rotateY(${x * 12}deg)`;
});
heroPhoto?.addEventListener('mouseleave', () => {
  heroPhoto.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

function createSparkle(parent, x, y) {
  const sparkle = document.createElement('span');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  const size = Math.random() * 6 + 4;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.background = `hsla(${Math.random() * 60 + 280},100%,88%,1)`;
  parent.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 650);
}

const sparkleButtons = document.querySelectorAll('.sparkle-btn');
sparkleButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const rect = button.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      createSparkle(button, event.clientX - rect.left + (Math.random() * 30 - 15), event.clientY - rect.top + (Math.random() * 20 - 10));
    }
  });
});

// Contact form handling (placeholder: replace with real backend integration)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const contactSubmit = contactForm?.querySelector('button[type="submit"]');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  // Basic client-side validation
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if(!name || !email || !message){
    formStatus.textContent = 'Please complete all fields before sending.';
    return;
  }

  contactSubmit?.classList.remove('success');
  contactSubmit?.classList.add('loading');
  contactSubmit?.setAttribute('disabled', 'true');
  contactSubmit.textContent = 'Sending...';
  formStatus.textContent = '';

  setTimeout(() => {
    contactSubmit?.classList.remove('loading');
    contactSubmit?.classList.add('success');
    contactSubmit.textContent = 'Message Sent!';
    formStatus.textContent = 'Thanks! Your message has been sent.';
    form.reset();

    setTimeout(() => {
      contactSubmit?.classList.remove('success');
      contactSubmit?.removeAttribute('disabled');
      contactSubmit.textContent = 'Send a hello! 💬';
    }, 2800);
  }, 1200);
});

// Highlight active nav link while scrolling
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll(){
  const scrollPos = window.scrollY + 120; // offset for header
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if(link){
      if(scrollPos >= top && scrollPos < bottom){
        navLinks.forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll);
// initial highlight
onScroll();
