import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

export const sliderHero = new Swiper('.hero__wrapper', {
  direction: 'horizontal',
  loop: true,
  // navigation: {
  //   nextEl: '.judges__button--prev',
  //   prevEl: '.judges__button--next',
  // },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },
  modules: [Autoplay, Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});
