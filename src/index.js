import './index.css';

const header = document.querySelector('.header');
const buttonShowMore = document.querySelector('.button-more');
const partnersHide = document.querySelectorAll('.partners-hide');
const mobileMenuButton = document.querySelector('.header__menu');
const mobileMenu = document.querySelector('.mobile-menu');

window.onscroll = function() {
  const y = window.scrollY;
  if (y > 300) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

buttonShowMore.addEventListener('click', () => {
  partnersHide.forEach((element) => {
    element.classList.toggle('partners-hide');
  });
});

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
