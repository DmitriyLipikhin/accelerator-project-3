import Swiper from "swiper";
import {Pagination, Mousewheel} from 'swiper/modules';

new Swiper ('#swiper-hero', {
  modules: [Pagination, Mousewheel],
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0
    },
  },

  pagination: {
    el: '.hero__slider-pagination',
    clickable: true,
    type: 'bullets',
  },

  on: {
    init(sliderInstance) {
      sliderInstance.slides.forEach((slide, index) => {
        let innerPaginationEl = slide.querySelector('.hero__slider-pagination');
        
        for(let i=0; i < sliderInstance.slides.length; i++) {
          innerPaginationEl.insertAdjacentHTML("beforeend", '<span class="hero__pagination-button"></span>');
        }
        
        setTimeout(() => {
          updateInnerPagination(sliderInstance, index);
        }, 0);
      });
    },
    slideChange(sliderInstance) {
      updateInnerPagination(sliderInstance, sliderInstance.realIndex);
    }
  }
});

function updateInnerPagination(instance, currentIndex) {
    instance.slides[currentIndex].querySelectorAll('.hero__pagination-button')
      .forEach((el, idx) => el.classList.toggle('hero__pagination-button--active', idx === currentIndex));
  }