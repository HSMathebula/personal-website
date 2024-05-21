const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const overlay = document.querySelector('.overlay');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
  overlay.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
  overlay.classList.remove('menu-btn');
});

nav.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
  overlay.classList.remove('menu-btn');
});