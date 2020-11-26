import SliderInit from './SliderInit.jsx';

// eslint-disable-next-line no-undef

const sliders = [
  {
    type: 'slider',
    containerClass: 'point',
    autoPlay: false,
    withDots: false,
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

sliders.forEach((slider) => {
  const { type } = slider;
  if (type === 'slider') {
    SliderInit(slider);
  }
});
