document.addEventListener('DOMContentLoaded', () => {
  // Removed the ?submitted=true logic as it's no longer needed with AJAX submission

  const preloader = document.getElementById('preloader');
  const lottieContainer = document.getElementById('lottie-preloader');

  if (preloader && lottieContainer) {
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    // Use absolute paths for preloader.json
    const path = '/TDS-Flogomaky/pages/assets/preloader.json';

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

  // Responsive navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navClose = document.querySelector('.nav-close');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      document.querySelector('.hamburger').classList.toggle('open'); // hamburger animatie
    });
  }
  if (navClose && nav) {
    navClose.addEventListener('click', () => {
      nav.classList.remove('active');
      document.querySelector('.hamburger').classList.remove('open'); // reset hamburger
    });
  }


  // Close nav on scroll if open
  window.addEventListener('scroll', () => {
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });

  // Accordion for "Waarden"
  document.querySelectorAll('.value-card').forEach(card => {
    const content = card.querySelector('.value-content');

    if (card && content) { // Check if card and content exist
      card.addEventListener('click', () => { // Attach listener to the whole card
        card.classList.toggle('active');
        if (card.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    }
  });

  // "Lees meer" toggle for Flogomaky section on wie.html
  const readMoreBtn = document.querySelector('.read-more-btn');
  const readMoreContent = document.querySelector('.read-more-content');

  if (readMoreBtn && readMoreContent) {
    readMoreContent.style.maxHeight = '0'; // Initially hide content
    readMoreContent.style.overflow = 'hidden';
    readMoreContent.style.transition = 'max-height 0.3s ease-in-out';

    readMoreBtn.addEventListener('click', () => {
      if (readMoreContent.style.maxHeight === '0px') {
        readMoreContent.style.maxHeight = readMoreContent.scrollHeight + 'px';
        readMoreBtn.textContent = 'Lees minder';
      } else {
        readMoreContent.style.maxHeight = '0px';
        readMoreBtn.textContent = 'Lees meer';
      }
    });
  }

  // Click-to-reveal for team members
  document.querySelectorAll('.team-card').forEach(card => {
    const content = card.querySelector('.team-member-info .small');

    if (card && content) {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
        if (card.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    }
  });

  // Accordion for "Pains Relieved" and "Gains Created"
  document.querySelectorAll('.pain-gain-item').forEach(item => {
    const title = item.querySelector('.pain-gain-title');
    const content = item.querySelector('.pain-gain-content');

    if (title && content) {
      item.addEventListener('click', () => { // Attach listener to the whole item
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    }
  });

  // Function to handle AJAX form submission
  async function handleFormSubmission(event, form) {
    event.preventDefault(); // Prevent default form submission

    const formUrl = form.action;
    const formData = new FormData(form);

    // For contact form, handle "Anoniem" values if empty
    if (form.id === 'contact-form') {
      const contactNameInput = form.querySelector('#contact-naam');
      const contactEmailInput = form.querySelector('#contact-email');

      if (contactNameInput && contactNameInput.value.trim() === '') {
        formData.set('Naam', 'Anoniem');
      }
      if (contactEmailInput && contactEmailInput.value.trim() === '') {
        formData.set('E-mail', 'Anoniem');
      }
    }

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' // Important for Formspree AJAX
        }
      });

      if (response.ok) {
        form.reset(); // Reset the form fields
        alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.'); // Or display a more styled success message
      } else {
        const data = await response.json();
        if (data.errors) {
          alert(data.errors.map(error => error.message).join(', '));
        } else {
          alert('Er is een probleem opgetreden bij het verzenden van je bericht.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Er is een netwerkfout opgetreden. Probeer het later opnieuw.');
    }
  }

  // Handle signup form submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (event) => handleFormSubmission(event, signupForm));
  }

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => handleFormSubmission(event, contactForm));
  }

  // Carousel for prototype.html
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-control.prev');
    const nextButton = carousel.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let autoPlayInterval;

    const updateCarousel = () => {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const goToNext = () => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    };

    const goToPrev = () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    };

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(goToNext, 5000); // Change slide every 5 seconds
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlayInterval);
    };

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        stopAutoPlay();
        goToNext();
        startAutoPlay();
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        stopAutoPlay();
        goToPrev();
        startAutoPlay();
      });
    }

    // Start auto-play when the page loads
    startAutoPlay();
  }
});