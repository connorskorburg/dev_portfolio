window.addEventListener('scroll', () => {
  // work position, hero position, navbar right
  const workPos = document.getElementById('work').getBoundingClientRect();
  const heroPos = document.getElementById('hero').getBoundingClientRect();
  const navRight = document.querySelector('.nav-right');
  // if user scrolls past hero section, show the back to top button
  heroPos.top > -30 ? document.getElementById('home-btn').style.display = 'none' : document.getElementById('home-btn').style.display = 'inline-block';
  // if user scrolls to work section, change the nav right bg color if the user is on desktop
  workPos.top < 70 && window.innerWidth > 1050 ? navRight.style.backgroundColor = '#B1D6DE'
    : window.innerWidth > 1050 && workPos.top > 70 ? navRight.style.backgroundColor = '#527093'
    : navRight.style.backgroundColor = '#fff'
});