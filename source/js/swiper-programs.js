import Swiper from "swiper";
import {Pagination, Mousewheel, Navigation, Scrollbar} from 'swiper/modules';

new Swiper ('#swiper-programs', {
  modules: [Pagination, Mousewheel, Navigation, Scrollbar],
  direction: 'horizontal',
  loop: false,
  allowTouchMove: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0,
      spaceBetween: 15
    },

    768: {
        slidesPerView: 2,
        spaceBetween: 30,
        scrollbar: {
            dragSize: 326
        }
    },

    1440: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 32,
        scrollbar: {
            dragSize: 394
        }
    }
  },

  pagination: {
    el: '.hero__slider-pagination',
    clickable: true,
    type: 'bullets',
  },

  navigation: {
    nextEl:'.programs__button-right',
    prevEl:'.programs__button-left'
  },
  
  scrollbar: {
    el:'.programs__scrollbar',
    hide: false,
    dragClass: 'programs__drag',
    draggable: true
  }
});