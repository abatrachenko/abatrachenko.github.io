/*
 * Resonance SEO - Main JavaScript
 * Interactive features and animations for the consulting website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Scroll Progress Indicator
  const scrollProgress = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }
  });

  // Image Lazy Loading with Animation
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });

  // Parallax Scrolling Effect - Disabled to prevent overlap issues
  // const hero = document.querySelector('.hero');
  // if (hero) {
  //   window.addEventListener('scroll', () => {
  //     const scrolled = window.pageYOffset;
  //     const parallaxSpeed = 0.5;
  //     hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  //   });
  // }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
    observer.observe(el);
  });

  // Animated counter for metrics
  const animateCounter = (element, target, suffix = '') => {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 16);
  };

  // Trigger counter animation when metrics section is visible
  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.metric-number');
        numbers.forEach(num => {
          const target = parseFloat(num.dataset.target);
          const suffix = num.textContent.includes('×') ? '×' : num.textContent.includes('%') ? '%' : '';
          animateCounter(num, target, suffix);
        });
        metricsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    metricsObserver.observe(metricsSection);
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav.nav-menu');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = navMenu.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Accordion functionality
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        setTimeout(() => {
          item.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }, 100);
      }
    });
  });

  // Form validation
  const form = document.querySelector('.form-body');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const websiteInput = document.getElementById('website');
  const revenueSelect = document.getElementById('revenue');
  const messageInput = document.getElementById('message');
  const submitBtn = form ? form.querySelector('.btn') : null;

  if (form && submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset border colors
      [nameInput, emailInput, revenueSelect].forEach(input => {
        if (input) input.style.borderColor = '#e0e0e0';
      });

      // Validate name
      if (nameInput && nameInput.value.trim() === '') {
        nameInput.style.borderColor = 'red';
        isValid = false;
      }

      // Validate email
      if (emailInput && (emailInput.value.trim() === '' || !emailInput.value.includes('@'))) {
        emailInput.style.borderColor = 'red';
        isValid = false;
      }

      // Validate revenue
      if (revenueSelect && revenueSelect.value === '') {
        revenueSelect.style.borderColor = 'red';
        isValid = false;
      }

      if (isValid) {
        // Here you would normally submit the form to a backend
        alert('Thanks! We\'ll be in touch shortly to schedule your call.');

        // Reset form
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (websiteInput) websiteInput.value = '';
        if (revenueSelect) revenueSelect.value = '';
        if (messageInput) messageInput.value = '';
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }

  // Sticky CTA bar visibility
  const stickyCTABar = document.querySelector('.sticky-cta-bar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show sticky CTA after scrolling past hero
    if (scrollTop > 800) {
      stickyCTABar.classList.add('visible');
    } else {
      stickyCTABar.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
  });

  // Floating CTA button visibility
  const floatingCTA = document.querySelector('.floating-cta');

  if (floatingCTA) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Show floating button when scrolling down and past hero section
      if (scrollTop > 300 && scrollTop > lastScrollTop) {
        floatingCTA.classList.add('visible');
      }
      // Hide when near the form section or scrolling up
      else if (scrollTop < lastScrollTop || isNearElement('#form', 300)) {
        floatingCTA.classList.remove('visible');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  // Helper function to check if scroll position is near an element
  function isNearElement(selector, distance) {
    const element = document.querySelector(selector);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (rect.top < distance && rect.top > -rect.height);
  }

  // Exit Intent Popup
  const exitPopup = document.getElementById('exitPopup');
  const exitPopupClose = document.querySelector('.exit-popup-close');
  const exitSubmitBtn = document.getElementById('exitSubmit');
  const exitEmailInput = document.getElementById('exitEmail');
  let exitIntentShown = false;

  // Show popup when cursor leaves viewport
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10 && !exitIntentShown) {
      exitPopup.classList.add('show');
      exitIntentShown = true;
      localStorage.setItem('exitIntentShown', 'true');
    }
  });

  // Check if already shown
  if (localStorage.getItem('exitIntentShown')) {
    exitIntentShown = true;
  }

  // Close popup
  exitPopupClose.addEventListener('click', () => {
    exitPopup.classList.remove('show');
  });

  exitPopup.addEventListener('click', (e) => {
    if (e.target === exitPopup) {
      exitPopup.classList.remove('show');
    }
  });

  // Exit popup form submit
  exitSubmitBtn.addEventListener('click', () => {
    const email = exitEmailInput.value.trim();
    if (email && email.includes('@')) {
      exitSubmitBtn.classList.add('loading');
      setTimeout(() => {
        exitSubmitBtn.classList.remove('loading');
        exitPopup.classList.remove('show');
        alert('Thanks! Check your email for the free SEO audit checklist.');
        exitEmailInput.value = '';
      }, 1500);
    } else {
      alert('Please enter a valid email address.');
    }
  });

  // Social Proof Notifications
  const socialProof = document.getElementById('socialProof');
  const socialProofData = [
    { name: 'Someone', location: 'California', action: 'booked a call', time: '2 minutes ago' },
    { name: 'A business owner', location: 'New York', action: 'requested an audit', time: '5 minutes ago' },
    { name: 'An e-commerce brand', location: 'Texas', action: 'booked a call', time: '8 minutes ago' },
    { name: 'Someone', location: 'Florida', action: 'downloaded the checklist', time: '12 minutes ago' },
  ];

  let currentProofIndex = 0;

  function showSocialProof() {
    const proof = socialProofData[currentProofIndex];
    socialProof.querySelector('strong').textContent = proof.name + ' just ' + proof.action;
    socialProof.querySelector('small').textContent = proof.time + ' from ' + proof.location;

    socialProof.classList.add('show');

    setTimeout(() => {
      socialProof.classList.remove('show');
    }, 5000);

    currentProofIndex = (currentProofIndex + 1) % socialProofData.length;
  }

  // Show first notification after 10 seconds
  setTimeout(showSocialProof, 10000);

  // Show notifications every 20 seconds
  setInterval(showSocialProof, 20000);

  // Enhanced Form Validation
  const formInputs = document.querySelectorAll('.form-body input, .form-body select, .form-body textarea');

  formInputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input);
    });

    input.addEventListener('input', () => {
      if (input.parentElement.classList.contains('error')) {
        validateInput(input);
      }
    });
  });

  function validateInput(input) {
    const parent = input.parentElement;
    parent.classList.remove('error', 'success');

    // Basic XSS protection - sanitize input value
    if (input.value) {
      input.value = input.value.replace(/[<>]/g, '');
    }

    if (input.hasAttribute('required') && !input.value.trim()) {
      parent.classList.add('error');
      return false;
    }

    if (input.type === 'email' && input.value.trim()) {
      if (!input.value.includes('@') || !input.value.includes('.')) {
        parent.classList.add('error');
        return false;
      }
    }

    if (input.value.trim()) {
      parent.classList.add('success');
    }

    return true;
  }

  // Enhanced Form Submit with Loading State
  const submitButton = document.querySelector('.form-body .btn');
  if (submitButton) {
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();

      const allInputs = document.querySelectorAll('.form-body input[required], .form-body select[required]');
      let allValid = true;

      allInputs.forEach(input => {
        if (!validateInput(input)) {
          allValid = false;
        }
      });

      if (allValid) {
        submitButton.classList.add('loading');

        setTimeout(() => {
          submitButton.classList.remove('loading');
          alert('Thanks! We\'ll be in touch shortly to schedule your call.');

          // Reset form
          document.querySelectorAll('.form-body input, .form-body select, .form-body textarea').forEach(input => {
            input.value = '';
            input.parentElement.classList.remove('success', 'error');
          });
        }, 2000);
      } else {
        alert('Please fill in all required fields correctly.');
      }
    });
  }
});
