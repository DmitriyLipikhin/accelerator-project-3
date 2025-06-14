import Swiper from "swiper";
import {Pagination, Mousewheel, Navigation, Scrollbar, Grid} from 'swiper/modules';

function reorderSlidesForGrid(swiperContainer, rows = 2) {
  const wrapper = swiperContainer.querySelector('.swiper-wrapper');
  const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));

  if (slides.length <= rows) return;

  const reorderedSlides = [];
  const slidesPerColumn = Math.ceil(slides.length / rows);

  for (let i = 0; i < slidesPerColumn; i++) {
    for (let row = 0; row < rows; row++) {
      const index = i * rows + row;
      if (index < slides.length) {
        reorderedSlides.push(slides[index]);
      }
    }
  }

  wrapper.innerHTML = '';
  reorderedSlides.forEach(slide => wrapper.appendChild(slide));
}

const swiperEl = document.querySelector('#swiper-news');
if (swiperEl) {
  reorderSlidesForGrid(swiperEl, 2);
}

window.addEventListener('DOMContentLoaded', function () {
  const containersDescription = document.querySelectorAll('.news-card__text-subcontainer-description');
  const containersTitle = document.querySelectorAll('.news-card__text-subcontainer-title');
  const containersDate = document.querySelectorAll('.news-card__date-subcontainer');
  const newsCard = document.querySelectorAll('.news-card');

  containersDescription.forEach(function(container) {
      let currentHeight = container.clientHeight || container.offsetHeight;

      let newHeightValue = `${currentHeight - 24}px`;

      container.style.setProperty('--nb-h', newHeightValue);

      console.log(`Высота для элемента "${container.textContent}" стала: ${newHeightValue}`);
  });

  containersTitle.forEach(function(container) {
    let currentHeight = container.clientHeight || container.offsetHeight;

    let newHeightValue = `${currentHeight - 24}px`;

    container.style.setProperty('--nb-h', newHeightValue);

    console.log(`Высота для элемента "${container.textContent}" стала: ${newHeightValue}`);
});

containersDate.forEach(function(container) {
  let currentHeight = container.clientHeight || container.offsetHeight;

  let newHeightValue = `${currentHeight - 24}px`;

  container.style.setProperty('--nb-h', newHeightValue);

  console.log(`Высота для элемента "${container.textContent}" стала: ${newHeightValue}`);
});

newsCard.forEach(function(card) {
  const textContainer = card.querySelector('.news-card__text-container');
  const containerImage = card.querySelector('.news-card__image');

  let currentHeight = textContainer.clientHeight || textContainer.offsetHeight;

  let newHeightValue = `${currentHeight - 24}px`;

  containerImage.style.setProperty('--nb-h', newHeightValue);

  console.log(`Высота для элемента "${containerImage.textContent}" стала: ${newHeightValue}`);
});

});

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
    el: '.news__pagination-wrapper',
    clickable: true,
    type: 'bullets',
    bulletClass: 'news__pagination-button',
    bulletActiveClass: 'news__pagination-button--active',
    renderBullet: function (index, className) {
      return `<button class="${className}">${index + 1}</button>`;
    },
  },

  navigation: {
    nextEl:'.news__pagination-button-arrow--right',
    prevEl:'.news__pagination-button-arrow--left'
  },

   on: {
    init: function() {
      const slides = this.slides;
      const half = Math.ceil(slides.length / 2);

      slides.forEach((slide, index) => {
        if (index >= half) {
          slide.classList.add('news-card--indent');
        }
      });
    },
  },
});
