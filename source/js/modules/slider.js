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

export const sliderTours = new Swiper('.tours__wrapper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.tours__button--prev',
    prevEl: '.tours__button--next',
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

export const sliderTraining = new Swiper('.training__wrapper--slider', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.training__button--prev',
    prevEl: '.training__button--next',
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
