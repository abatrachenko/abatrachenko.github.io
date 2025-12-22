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
      // Hide when scrolling up
      else if (scrollTop < lastScrollTop) {
        floatingCTA.classList.remove('visible');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
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
});
