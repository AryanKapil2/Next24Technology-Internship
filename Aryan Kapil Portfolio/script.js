// Toggle the hamburger menu
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}

// Function to open links in a new tab
function openLink(url) {
  window.open(url, '_blank');
}

// Function to navigate to a section
function navigateTo(sectionId) {
  location.href = sectionId;
}

// Adding event listeners to social icons
document.querySelector('#socials-container .linkedin-icon').addEventListener('click', () => {
  openLink('https://www.linkedin.com/in/aryankapil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app');
});

document.querySelector('#socials-container .github-icon').addEventListener('click', () => {
  openLink('https://github.com/AryanKapil1');
});

// Adding event listeners to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      navigateTo(link.getAttribute('href'));
  });
});

// Smooth scrolling
document.querySelectorAll('.nav-links a, .arrow').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Highlight active link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
          current = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
});
