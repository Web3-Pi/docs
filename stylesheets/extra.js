// This is an additional solution to fix the incorrect calculation of the 'active' class when the header is changed
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  const navLinks = document.querySelectorAll('.md-nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      setTimeout(() => {
        navLinks.forEach(l => l.classList.remove('md-nav__link--active'));
        this.classList.add('md-nav__link--active');
      }, 100); // Delay of 100ms
    });
  });

  const currentHash = window.location.hash;
  if (currentHash) {
    navLinks.forEach(l => l.classList.remove('md-nav__link--active'));
    const activeLink = document.querySelector(`a[href="${currentHash}"]`);
    if (activeLink) {
      activeLink.classList.add('md-nav__link--active');
    }
  }
});