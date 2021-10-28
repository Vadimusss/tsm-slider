/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';

const sliders = [
  {
    containerClass: 'point',
    autoPlay: false,
    withDots: true,
    slidesToShow: 4,
    responsive: {
      1000: 3,
      800: 2,
      400: 1,
    },
    slideImgSize: 'cover', // contain or cover
    margin: 10,
    slides: [
      {
        id: 1,
        slideImgUrl: 'https://www.tsm-company.ru/assets/templates/TSM-COMPANY_NEW/img/test/01.png',
        slideTitle: 'title text',
        slideDescription: 'description text',
        slideLinkUrl: 'yandex.ru',
      },
      {
        id: 2,
        slideImgUrl: 'https://www.tsm-company.ru/assets/templates/TSM-COMPANY_NEW/img/test/02.png',
        slideTitle: null,
        slideDescription: null,
        slideLinkUrl: 'yandex.ru',
      },
      {
        id: 3,
        slideImgUrl: 'https://www.tsm-company.ru/assets/templates/TSM-COMPANY_NEW/img/test/03.png',
        slideTitle: 'title text',
        slideDescription: 'description text',
        slideLinkUrl: 'yandex.ru',
      },
    ],
  },
];

const prepareSlides = (slides, slidesToShow) => {
  if (slides.length > slidesToShow) {
    return slides.map((slide, key) => ({ ...slide, key }));
  }
  let preparedSlides = [];
  while (preparedSlides.length <= slidesToShow + 1) {
    preparedSlides = [...preparedSlides, ...slides].map((slide, key) => ({ ...slide, key }));
  }
  return preparedSlides;
};

sliders.forEach((slider) => {
  const {
    slides, containerClass, autoPlay, withDots, slidesToShow, slideImgSize, margin,
  } = slider;
    // eslint-disable-next-line no-undef
  const container = document.querySelector(`.${containerClass}`);
  ReactDOM.render(<Slider
    slides={prepareSlides(slides, slidesToShow)}
    containerClass={containerClass}
    container={container}
    autoPlay={autoPlay}
    withDots={withDots}
    slidesToShow={slidesToShow}
    slideImgSize={slideImgSize}
    margin={margin}
  />, container);
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
