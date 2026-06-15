/* ════════════════════════════════════════════
   THIÊN HỔ TECHNOLOGY — Script v2
   ════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile Menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ── Sticky Header ── */
  const header = document.getElementById('header');

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ── Smooth Scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Counter Animation (hero stats) ── */
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1500;
      const start = performance.now();
      function update(now) {
        const pct = Math.min((now - start) / duration, 1);
        el.textContent = Math.round((1 - Math.pow(1 - pct, 3)) * target);
        if (pct < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }
  const counterObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounters();
      obs.disconnect();
    });
  }, { threshold: .4 });
  const countEl = document.querySelector('[data-count]');
  if (countEl) counterObs.observe(countEl.closest('section') || countEl);

  /* ── AOS ── */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

  /* ── Contact Form Validation ── */
  const form = document.getElementById('contactForm');
  if (form) {
    const fields = {
      name:  { el: document.getElementById('cfName'),  err: document.getElementById('cfNameErr'),  min: 2 },
      phone: { el: document.getElementById('cfPhone'), err: document.getElementById('cfPhoneErr'), pattern: /^[0-9\s\+\-]{8,15}$/ },
      email: { el: document.getElementById('cfEmail'), err: document.getElementById('cfEmailErr'), optional: true },
      msg:   { el: document.getElementById('cfMsg'),   err: document.getElementById('cfMsgErr'),   min: 10 },
    };

    function validate(key) {
      const f = fields[key];
      if (!f || !f.el) return true;
      const val = f.el.value.trim();
      let msg = '';
      if (f.optional && !val) { f.err.textContent = ''; f.el.style.borderColor = ''; return true; }
      if (!val) msg = 'Vui lòng điền thông tin này.';
      else if (f.min && val.length < f.min) msg = `Tối thiểu ${f.min} ký tự.`;
      else if (f.pattern && !f.pattern.test(val)) msg = f.key === 'email' ? 'Email không hợp lệ.' : 'Số điện thoại không hợp lệ.';
      f.err.textContent = msg;
      f.el.style.borderColor = msg ? '#F87171' : '';
      return !msg;
    }

    Object.entries(fields).forEach(([key, f]) => {
      if (!f.el) return;
      f.el.addEventListener('blur', () => validate(key));
      f.el.addEventListener('input', () => { if (f.err?.textContent) validate(key); });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const valid = Object.keys(fields).every(k => validate(k));
      if (!valid) return;
      const success = document.getElementById('cfSuccess');
      if (success) {
        success.textContent = 'Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 2 giờ làm việc. 🎉';
        form.reset();
        Object.values(fields).forEach(f => { if (f.el) f.el.style.borderColor = ''; });
        setTimeout(() => { success.textContent = ''; }, 6000);
      }
    });
  }

}); /* end DOMContentLoaded */
