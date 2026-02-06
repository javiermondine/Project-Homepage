/**
 * Professional Portfolio - Vanilla JavaScript
 * Handles mobile menu toggle and smooth navigation
 */

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScroll();
  initAccessibility();
});

/**
 * Mobile Menu Toggle
 * Handles hamburger menu functionality with proper ARIA attributes
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (!menuToggle || !navMenu) return;

  // Toggle menu on button click
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.setAttribute('data-expanded', !isExpanded);
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('data-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('data-expanded', 'false');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('data-expanded', 'false');
    }
  });
}

/**
 * Smooth Scroll for Anchor Links
 * Enhanced accessibility with focus management
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      // Smooth scroll with focus management
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Set focus to the target section for accessibility
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus();
    });
  });
}

/**
 * Accessibility Enhancements
 * Skip to main content link, keyboard navigation improvements
 */
function initAccessibility() {
  // Ensure all buttons are properly keyboard accessible
  const buttons = document.querySelectorAll('button:not([type])');
  buttons.forEach(button => {
    if (!button.hasAttribute('type')) {
      button.setAttribute('type', 'button');
    }
  });

  // Add keyboard navigation indicators
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });

  // Announce dynamic content changes to screen readers
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        announceToScreenReader('Content updated');
      }
    });
  });

  observer.observe(document.querySelector('main'), {
    childList: true,
    subtree: true
  });
}

/**
 * Helper function to announce messages to screen readers
 * @param {string} message - The message to announce
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(function() {
    announcement.remove();
  }, 1000);
}

/**
 * Performance monitoring (optional)
 * Logs Web Vitals to console in development
 */
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.addEventListener('load', function() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(function(list) {
          const entries = list.getEntries();
          entries.forEach(function(entry) {
            console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
          });
        });
        observer.observe({ entryTypes: ['measure', 'navigation'] });
      } catch (e) {
        // Performance API not available
      }
    }
  });
}
