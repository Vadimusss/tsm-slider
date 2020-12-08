/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';

const sliders = [
  {
    type: 'slider',
    containerClass: 'point',
    autoPlay: false,
    withDots: true,
    slides: [
      {
        id: 1,
        slideImgUrl: 'https://www.tsm-company.ru/assets/templates/TSM-COMPANY.RU/img/slider_design_fon.jpg',
        slideTitle: 'title text',
        slideDescription: 'description text',
        slideLinkUrl: 'link URL',
      },
      {
        id: 2,
        slideImgUrl: 'https://www.tsm-company.ru/assets/templates/TSM-COMPANY.RU/img/slider_service_fon.jpg',
        slideTitle: null,
        slideDescription: null,
        slideLinkUrl: null,
      },
      {
        id: 3,
        slideImgUrl: 'https://www.tsm-company.ru/assets/templates/TSM-COMPANY.RU/img/slider-design_fon02.jpg',
        slideTitle: 'title text',
        slideDescription: 'description text',
        slideLinkUrl: 'link URL',
      },
    ],
  },
];

const prepareSlides = (slides) => {
  const quantity = slides.length;
  if (quantity === 1) {
    return [...slides, ...slides, ...slides].map((slide, key) => ({ ...slide, key }));
  } if (quantity === 2) {
    return [...slides, ...slides].map((slide, key) => ({ ...slide, key }));
  }
  return slides.map((slide, key) => ({ ...slide, key }));
};

sliders.forEach((slider) => {
  const { type } = slider;
  if (type === 'slider') {
    const {
      slides, containerClass, autoPlay, withDots,
    } = slider;
    // eslint-disable-next-line no-undef
    const container = document.querySelector(`.${containerClass}`);
    ReactDOM.render(<Slider
      slides={prepareSlides(slides)}
      containerClass={containerClass}
      container={container}
      autoPlay={autoPlay}
      withDots={withDots}
    />, container);
  }
});

/* const uri = document.location.pathname.substring(1);
jQuery.ajax({
  type: 'GET',
  cache: false,
  url: '/assets/get_fields.php',
  data: { uri },
  success(data) {
    const sliders = JSON.parse(data);

    sliders.forEach((slider) => {
      const { type } = slider;
      if (type === 'slider') {
        const {
          slides, containerClass, autoPlay, withDots,
        } = slider;
        // eslint-disable-next-line no-undef
        const container = document.querySelector(`.${containerClass}`);
        ReactDOM.render(<Slider
          slides={prepareSlides(slides)}
          containerClass={containerClass}
          container={container}
          autoPlay={autoPlay}
          withDots={withDots}
        />, container);
      }
    });
  },
  error(error) {
    throw new Error(`Не удалось загрузить слайдеры! ${error.message}`);
  },
}); */
