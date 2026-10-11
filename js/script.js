// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Waitlist form
// NOTE: This is a static site with no backend, so this only confirms the
// input locally. To actually collect emails, point this form at a service
// like Formspree, Getform, or a Google Form, and let it submit normally
// instead of being intercepted here. See README.md for details.
const waitlistForm = document.getElementById('waitlist-form');
const waitlistNote = document.getElementById('waitlist-note');

if (waitlistForm && waitlistNote) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = waitlistForm.email.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      waitlistNote.textContent = 'That email doesn\u2019t look right \u2014 mind double-checking it?';
      waitlistNote.style.color = '#932A33';
      return;
    }

    waitlistNote.textContent = 'Thanks \u2014 you\u2019re on the list. We\u2019ll be in touch.';
    waitlistNote.style.color = '#5B7553';
    waitlistForm.reset();
  });
}
