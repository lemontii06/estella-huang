// Consolidated Fullscreen Viewer Logic
function initFullscreenGallery(selector) {
    const images = document.querySelectorAll(selector);
    const viewer = document.querySelector('.fullscreen-viewer');
    const fullscreenImg = viewer.querySelector('.fullscreen-image');
    const closeBtn = viewer.querySelector('.close-viewer');
  
    const openViewer = (img) => {
      fullscreenImg.src = img.src;
      fullscreenImg.alt = img.alt;
      viewer.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
  
    const closeViewer = () => {
      viewer.classList.remove('active');
      document.body.style.overflow = 'auto';
    };
  
    images.forEach(img => {
      img.addEventListener('click', () => openViewer(img));
    });
  
    closeBtn.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (e) => e.target === viewer && closeViewer());
  }
  
  // Initialize all galleries
  document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navList = document.querySelector('nav ul');
    mobileMenuButton.addEventListener('click', () => navList.classList.toggle('active'));
  
    // Footer Year
    document.querySelector('footer p').textContent = 
      `© ${new Date().getFullYear()} Estella Huang. All rights reserved.`;
  
    // Initialize galleries
    initFullscreenGallery('.photography-gallery img');
    initFullscreenGallery('.graphic-design-gallery img');
    initFullscreenGallery('.illustration-gallery img');
  });