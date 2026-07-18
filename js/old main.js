document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Theme toggle ---------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  });

  /* ---------------- Mobile nav ---------------- */
  const navBurger = document.getElementById('navBurger');
  const mobileNav = document.getElementById('mobileNav');
  navBurger?.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  /* ---------------- Session uptime meta ---------------- */
  const sessionMeta = document.getElementById('sessionMeta');
  const startTime = Date.now();
  if (sessionMeta) {
    setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      const s = String(elapsed % 60).padStart(2, '0');
      sessionMeta.textContent = `SESSION ${h}:${m}:${s}`;
    }, 1000);
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---------------- Nav active link (scrollspy) ---------------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { threshold: 0.4, rootMargin: '-72px 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------------- Project accordion ---------------- */
  document.querySelectorAll('.project-card').forEach(card => {
    const head = card.querySelector('.project-head');
    const body = card.querySelector('.project-body');
    const inner = card.querySelector('.project-body-inner');

    head.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // close all others (single-open accordion feel, optional)
      document.querySelectorAll('.project-card.open').forEach(other => {
        if (other !== card) {
          other.classList.remove('open');
          other.querySelector('.project-body').style.maxHeight = null;
        }
      });

      if (isOpen) {
        card.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        card.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 40 + 'px';
      }
    });
  });

  /* ---------------- Project filter ---------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const cat = card.dataset.cat;
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
        if (!show && card.classList.contains('open')) {
          card.classList.remove('open');
          card.querySelector('.project-body').style.maxHeight = null;
        }
      });
    });
  });

  /* ---------------- Back to top ---------------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 600);
  });
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
