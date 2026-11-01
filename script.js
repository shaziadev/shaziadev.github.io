(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  // ----- Theme toggle -----
  var themeBtn = document.querySelector('.theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return media.matches ? 'dark' : 'light';
  }

  function updateThemeLabel() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    themeBtn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    updateThemeLabel();
  });
  media.addEventListener && media.addEventListener('change', updateThemeLabel);
  updateThemeLabel();

  // ----- Mobile menu -----
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');

  function closeMenu() {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  // ----- Reveal on scroll -----
  var items = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // ----- Footer year -----
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
