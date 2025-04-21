/**
 * Main JavaScript for Mahdi Akbari Zarkesh's personal website
 */
(function() {
  'use strict';
  
  // Initialize all functionality when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initNavHighlighting();
    initSmoothScroll();
    initScrollToTop();
    initMobileNav();
  });
  
  /**
   * Initialize dark/light theme toggle functionality
   */
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Toggle dark mode on click
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Save preference to localStorage
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    
    // Apply saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
  
  /**
   * Highlight current section in navigation
   */
  function initNavHighlighting() {
    const updateActiveNavItem = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      const navItems = document.querySelectorAll(".nav-item");
      
      let currentSectionId = "";
      
      // Find which section is currently in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });
      
      // Update nav items active state
      navItems.forEach(item => {
        item.removeAttribute('aria-current');
        const href = item.getAttribute('href').substring(1); // Remove #
        if (href === currentSectionId) {
          item.setAttribute('aria-current', 'page');
        }
      });
    };
    
    window.addEventListener('scroll', updateActiveNavItem);
    updateActiveNavItem(); // Initial check
  }
  
  /**
   * Setup smooth scrolling for anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  /**
   * Initialize scroll-to-top button functionality
   */
  function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (!scrollToTopButton) return;
    
    // Scroll to top when clicked
    scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Show/hide button based on scroll position
    function toggleScrollToTopButton() {
      if (window.pageYOffset > 300) {
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.style.visibility = 'visible';
      } else {
        scrollToTopButton.style.opacity = '0';
        scrollToTopButton.style.visibility = 'hidden';
      }
    }
    
    window.addEventListener('scroll', toggleScrollToTopButton);
    toggleScrollToTopButton(); // Initial check
  }
  
  /**
   * Initialize mobile navigation menu
   */
  function initMobileNav() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    if (!mobileMenuToggle || !mobileNav) return;
    
    // Toggle mobile menu visibility
    mobileMenuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      this.setAttribute('aria-expanded', 
        mobileNav.classList.contains('active') ? 'true' : 'false');
    });
    
    // Close mobile menu when a link is clicked
    mobileNavItems.forEach(item => {
      item.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Update mobile nav item active state on scroll
    const updateMobileNavActive = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      let currentSectionId = "";
      
      // Find which section is currently in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });
      
      // Update mobile nav items active state
      mobileNavItems.forEach(item => {
        item.removeAttribute('aria-current');
        const href = item.getAttribute('href').substring(1); // Remove #
        if (href === currentSectionId) {
          item.setAttribute('aria-current', 'page');
        }
      });
    };
    
    window.addEventListener('scroll', updateMobileNavActive);
    updateMobileNavActive(); // Initial check
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();