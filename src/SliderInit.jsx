import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';

export default (options) => {
  const {
    slides, containerClass, autoPlay, withDots,
  } = options;
  // eslint-disable-next-line no-undef
  const container = document.querySelector(`.${containerClass}`);
  ReactDOM.render(<Slider
    slides={slides}
    containerClass={containerClass}
    container={container}
    autoPlay={autoPlay}
    withDots={withDots}
  />, container);
};
