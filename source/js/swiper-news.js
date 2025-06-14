import Swiper from "swiper";
import {Pagination, Mousewheel, Navigation, Scrollbar, Grid} from 'swiper/modules';

window.addEventListener('DOMContentLoaded', function () {
  const containersDescription = document.querySelectorAll('.news-card__text-subcontainer-description');
  const containersTitle = document.querySelectorAll('.news-card__text-subcontainer-title');
  const containersDate = document.querySelectorAll('.news-card__date-subcontainer');
  const newsCard = document.querySelectorAll('.news-card');

  containersDescription.forEach(function(container) {
      let currentHeight = container.clientHeight || container.offsetHeight;

      let newHeightValue = `${currentHeight - 24}px`;

      container.style.setProperty('--nb-h', newHeightValue);
  });

  containersTitle.forEach(function(container) {
    let currentHeight = container.clientHeight || container.offsetHeight;

    let newHeightValue = `${currentHeight - 24}px`;

    container.style.setProperty('--nb-h', newHeightValue);
});

containersDate.forEach(function(container) {
  let currentHeight = container.clientHeight || container.offsetHeight;

  let newHeightValue = `${currentHeight - 24}px`;

  container.style.setProperty('--nb-h', newHeightValue);
});

newsCard.forEach(function(card) {
  const textContainer = card.querySelector('.news-card__text-container');
  const containerImage = card.querySelector('.news-card__image');

  let currentHeight = textContainer.clientHeight || textContainer.offsetHeight;

  let newHeightValue = `${currentHeight - 24}px`;

  containerImage.style.setProperty('--nb-h', newHeightValue);
});

const items = document.querySelectorAll(".news__slider-item");

    if (window.innerWidth > 320){
        for(let i = 0; i < items.length; i++) {
            if(i % 4 === 1) {
            const startCol = Math.floor(i / 4) * 2 + 2;
            items[i].style.gridColumn = `${startCol}/${startCol + 1}`;
            }
        }
    }
});

  const swiper = new Swiper ('#swiper-news', {
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
    },
    768: {
      slidesPerView: 2,
      allowTouchMove: true,
      initialSlide: 0,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    1440: {
        slidesPerView: "auto",
        initialSlide: 0,
        grid: false,
        spaceBetween: 32,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    }
  },

  pagination: {
    el: '.news__pagination-wrapper',
    clickable: true,
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      let bullets = '';
      let start, end;

      if (total <= 4) {
        start = 0;
        end = total - 1;
      } else if (current <= 2) {
        start = 0;
        end = 3;
      } else if (current >= total - 1) {
        start = total - 4;
        end = total - 1;
      } else {
        start = current - 2;
        end = current + 1;
      }
      
      for (let i = 0; i < total; i++) {
        const active = i === current - 1 ? 'news__pagination-button--active' : '';
        const hidden = i < start || i > end ? 'style="display: none;"' : '';
        
        bullets += `
          <button class="news__pagination-button ${active}" ${hidden} data-index="${i}">
            ${i + 1}
          </button>
        `;
      }
      
      return bullets;
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

      this.slides[0].style.width = '604px';
      // Устанавливаем ширину остальных слайдов
      for (let i = 1; i < this.slides.length; i++) {
        this.slides[i].style.width = '286px';
      }
      // Обновляем Swiper
      this.update();
    },
    
  },
});

document.querySelector('.news__pagination-wrapper').addEventListener('click', function(e) {
  const button = e.target.closest('.news__pagination-button');
  if (button) {
    const index = parseInt(button.getAttribute('data-index'));
    swiper.slideTo(index);
  }
});


