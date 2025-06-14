import Swiper from "swiper";
import {Pagination, Mousewheel, Navigation, Scrollbar, Grid} from 'swiper/modules';

function reorderSlidesForGrid(swiperContainer, rows = 2) {
  const wrapper = swiperContainer.querySelector('.swiper-wrapper');
  const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
  
  if (slides.length <= rows) return; // Если слайдов меньше, чем строк, не меняем порядок

  const reorderedSlides = [];
  const slidesPerColumn = Math.ceil(slides.length / rows);

  // Собираем новый порядок: [1, 3, 5..., 2, 4, 6...]
  for (let i = 0; i < slidesPerColumn; i++) {
    for (let row = 0; row < rows; row++) {
      const index = i * rows + row;
      if (index < slides.length) {
        reorderedSlides.push(slides[index]);
      }
    }
  }

  // Очищаем и вставляем слайды в новом порядке
  wrapper.innerHTML = '';
  reorderedSlides.forEach(slide => wrapper.appendChild(slide));
}

// Применяем перестановку перед инициализацией Swiper
const swiperEl = document.querySelector('#swiper-news');
if (swiperEl) {
  reorderSlidesForGrid(swiperEl, 2); // 2 строки
}

  new Swiper ('#swiper-news', {
  modules: [Pagination, Mousewheel, Navigation, Scrollbar, Grid],
  direction: 'horizontal',
  loop: false,
  allowTouchMove: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 0,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: "row"
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

   on: {
    init: function() {
      const slides = this.slides; // все слайды
      const half = Math.ceil(slides.length / 2); // округляем вверх (для 7 → 4)
      
      // Добавляем класс для второй половины
      slides.forEach((slide, index) => {
        if (index >= half) {
          slide.classList.add('news-card--indent');
        }
      });
    },
  },
});
