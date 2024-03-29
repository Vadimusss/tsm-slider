/* eslint-disable react/prop-types */
/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/core';
import SlidesWrapper from './SlidesWrapper.jsx';
import Slide from './Slide.jsx';
import Arrow from './Arrow.jsx';
import Dots from './Dots.jsx';
import { getDisplayedSlidesQuantity, prepareSlidesToCarusel } from '../utils';

const Slider = (props) => {
  const {
    slides,
    container,
    containerClass,
    autoPlay,
    withDots,
    responsive,
    slidesToShow,
    slideImgSize,
    margin,
  } = props;

  const containerWidth = container.clientWidth;
  const slidesDisplayedNow = getDisplayedSlidesQuantity(slidesToShow, responsive, containerWidth);
  const multipliedSlides = prepareSlidesToCarusel(slides, slidesToShow);
  const firstSlide = multipliedSlides[multipliedSlides.length - 1];
  const displayedSlides = multipliedSlides.slice(0, slidesToShow);
  const lastSlide = multipliedSlides[slidesToShow];

  const getWidth = () => containerWidth / slidesDisplayedNow;

  const [state, setState] = useState({
    currentSlideIndex: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [firstSlide, ...displayedSlides, lastSlide],
  });

  const {
    currentSlideIndex, translate, transition, _slides,
  } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  const smoothTransition = () => {
    let newSlides = [];
    if (currentSlideIndex === 0) {
      newSlides = [firstSlide, ...displayedSlides, lastSlide];
    } else {
      newSlides = [
        ...multipliedSlides.slice(currentSlideIndex - 1),
        ...multipliedSlides.slice(0, currentSlideIndex - 1),
      ];
    }

    setState({
      ...state,
      transition: 0,
      translate: getWidth(),
      _slides: newSlides,
    });
  };

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const nextSlide = () => setState({
    ...state,
    currentSlideIndex: (currentSlideIndex === multipliedSlides.length - 1)
      ? 0 : currentSlideIndex + 1,
    translate: translate + getWidth(),
  });

  const prevSlide = () => setState({
    ...state,
    currentSlideIndex: (currentSlideIndex === 0)
      ? multipliedSlides.length - 1 : currentSlideIndex - 1,
    translate: translate - getWidth(),
  });

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes('SlidesWrapper')) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener('transitionend', smooth);
    // eslint-disable-next-line no-undef
    const onResize = window.addEventListener('resize', resize);

    let interval = null;

    if (autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }

    return () => {
      slider.removeEventListener('transitionend', transitionEnd);
      // eslint-disable-next-line no-undef
      window.removeEventListener('resize', onResize);

      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const sliderStyles = css`
    position: relative;
    height: 100%;
    width: ${getWidth() * slidesDisplayedNow}px;
    margin: 0 auto;
  `;

  const innerStyles = css`
    height: 100%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  `;

  return (
    <div css={sliderStyles} ref={sliderRef}>
      <div css={innerStyles}>
        <SlidesWrapper
          translate={translate}
          transition={transition}
          width={getWidth() * _slides.length}
        >
          {_slides.map((slide) => (
            <Slide
              width={getWidth() - margin * 2}
              margin={margin}
              key={slide.key}
              slide={slide}
              slideImgSize={slideImgSize}
              containerClass={containerClass}
            />
          ))}
        </SlidesWrapper>
      </div>
      <Arrow direction="left" containerClass={containerClass} handleClick={prevSlide} />
      <Arrow direction="right" containerClass={containerClass} handleClick={nextSlide} />

      {withDots && <Dots slides={slides} currentSlideIndex={currentSlideIndex} />}
    </div>
  );
};

export default Slider;
