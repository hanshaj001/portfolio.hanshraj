(() => {
  // Toggle Navbar Menu
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // Active Section Highlighting + Sticky Header + Auto Close Menu
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  const header = document.querySelector('header');

  window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(section => {
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    // Close navbar menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };

  // Scroll Reveal Animations
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    // reset: true  // Uncomment if you want repeated animations on scroll
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  // Typed Text Animation
  new Typed('.multiple-text', {
    strings: ['Hire Me', 'Frontend Web Designer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
  });
})();
