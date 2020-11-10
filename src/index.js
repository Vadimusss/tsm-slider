import React from 'react';
import ReactDOM from 'react-dom'
import images from './images.js';
import Slider from './components/Slider.jsx';

const sliderClass = '.point';

const container = document.querySelector(sliderClass);
const slides = {
  imagesUrl: [
    'https://www.tsm-company.ru/assets/templates/TSM-COMPANY.RU/img/slider_design_fon.jpg',
    'https://www.tsm-company.ru/assets/templates/TSM-COMPANY.RU/img/slider_service_fon.jpg',
  ], 
}

ReactDOM.render(<Slider slides={slides} container={container}/>, container);
