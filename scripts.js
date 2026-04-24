/*
 * Resonance SEO — main script
 * Interactive behaviors for the phase-4 rebuild.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- GA4 custom events ---------------------------------------------- */

  function trackConversion(ctaLocation) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'book_call_click', { cta_location: ctaLocation });
    }
  }

  document.querySelectorAll('a[href*="calendly.com"]').forEach((cta, index) => {
    cta.addEventListener('click', () => {
      let ctaLocation = 'cta_' + index;
      if (cta.closest('.hero')) ctaLocation = 'hero_secondary';
      else if (cta.closest('.consulting-section')) ctaLocation = 'consulting_section';
      else if (cta.classList.contains('nav-cta')) ctaLocation = 'nav_menu';
      trackConversion(ctaLocation);
    });
  });

  /* ----- Newsletter stub (handles every .newsletter form; backend wired later) ----- */

  document.querySelectorAll('form.newsletter').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter__input');
      const status = form.querySelector('.newsletter__status');
      const email = (input.value || '').trim();
      if (!email || !email.includes('@')) {
        if (status) status.textContent = 'Please enter a valid email address.';
        input.focus();
        return;
      }
      if (status) status.textContent = 'Thanks — the newsletter launches soon. You’ll be first on the list.';
      input.value = '';
      if (typeof gtag !== 'undefined') {
        const location = form.closest('footer') ? 'footer' : 'hero';
        gtag('event', 'newsletter_signup_attempt', { cta_location: location });
      }
    });
  });

  /* ----- UTM capture ---------------------------------------------------- */

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content')
  };
  if (utmParams.utm_source) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', utmParams);
    }
  }

  /* ----- Header scroll state -------------------------------------------- */

  const header = document.querySelector('header');
  const scrollProgress = document.querySelector('.scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (header) {
      header.classList.toggle('scrolled', scrollTop > 8);
    }
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      scrollProgress.style.width = ((scrollTop / docHeight) * 100) + '%';
    }
  }, { passive: true });

  /* Scroll reveals are now pure CSS via animation-timeline: view() —
     see styles.css. No JS observer needed. */

  /* ----- Mobile nav toggle ---------------------------------------------- */

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav.nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') &&
          !navMenu.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----- Smooth scroll for same-page anchors ---------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }

      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    });
  });

  /* ----- Accordion nudge ------------------------------------------------ */

  document.querySelectorAll('.accordion-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });
});
