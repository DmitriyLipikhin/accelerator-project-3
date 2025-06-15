import Swiper from "swiper";
import { Pagination, Mousewheel, Navigation, Scrollbar } from 'swiper/modules';

new Swiper('#swiper-reviews', {
  modules: [Pagination, Mousewheel, Navigation, Scrollbar],
  direction: 'horizontal',
  loop: false,
  allowTouchMove: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: "auto",
      spaceBetween: 30,
      scrollbar: {
        dragSize: 326
      },
      allowTouchMove: true,
    },

    1440: {
      slidesPerView: 2,
      allowTouchMove: false,
      spaceBetween: 32,
      scrollbar: {
        dragSize: 394
      }
    }
  },

  scrollbar: {
    el: '.reviews__scrollbar',
    hide: false,
    dragClass: 'reviews__drag',
    draggable: true
  },

  navigation: {
    nextEl: '.reviews__slider-button-right',
    prevEl: '.reviews__slider-button-left'
  },
});
