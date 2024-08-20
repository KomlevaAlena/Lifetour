export const mobileMenu = function sliderGallery() {
  const menuButton = document.querySelector('.main-nav__toggle');
  const mobiMenu = document.querySelector('.main-nav__list');
  // const noJs = Array.from(document.querySelectorAll('.main-nav__nojs'));

  // for (let i = 0; i < 2; i++) {
  //   noJs[i].classList.remove('main-nav__nojs');
  // }

  menuButton.addEventListener('click', () =>{
    mobiMenu.classList.toggle('main-nav__list--open');
    menuButton.classList.toggle('main-nav__toggle--active');
  });
};
