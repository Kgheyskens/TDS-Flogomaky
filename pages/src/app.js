document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const lottieContainer = document.getElementById('lottie-preloader');

  if (preloader && lottieContainer) {
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    const path = isIndex ? 'pages/assets/preloader.json' : 'assets/preloader.json';

    try {
      const animation = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
      });

      animation.addEventListener('DOMLoaded', () => {
        console.log('Lottie animation loaded successfully.');
      });

      animation.addEventListener('data_failed', () => {
        console.error('Lottie animation data failed to load. Hiding preloader.');
        preloader.style.display = 'none';
      });

    } catch (error) {
      console.error('Error loading Lottie animation:', error);
      preloader.style.display = 'none';
    }
  }

  window.addEventListener('load', () => {
    if (preloader) {
      preloader.style.display = 'none';
    }
  });

  // Scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.card, .hero');
  hiddenElements.forEach(el => observer.observe(el));

  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
