// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
// import {Form} from './modules/form-validate/form';
// import {initTabs} from './modules/tabs/init-tabs';
// import {initAccordions} from './modules/accordion/init-accordion';
import {sliderHero} from './modules/slider';
import {sliderTours} from './modules/slider';
// import {slider2} from './modules/slider';
// import {initVideo} from './modules/video';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    // initModals();
    // const form = new Form();
    // window.form = form;
    // form.init();
    sliderHero.init();
    sliderTours.init();
    // slider2.init();
    // initTabs();
    // initAccordions();
    // initVideo();
  });
});
