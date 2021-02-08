const header = document.querySelector('.header');

window.onscroll = function() {
  const y = window.scrollY;
  if (y > 300) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}


