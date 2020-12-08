/* eslint-disable react/prop-types */
/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/core';
import { uniqBy } from 'lodash';
import SlidesWrapper from './SlidesWrapper.jsx';
import Slide from './Slide.jsx';
import Arrow from './Arrow.jsx';
import Dots from './Dots.jsx';

const Slider = (props) => {
  const {
    slides, container, containerClass, autoPlay, withDots,
  } = props;
  const getWidth = () => container.clientWidth;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];
  const [state, setState] = useState({
    activeSlide: 0,
    displayedSlideId: firstSlide.id,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });
  const {
    activeSlide, displayedSlideId, translate, transition, _slides,
  } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  const smoothTransition = () => {
    let newSlides = [];
    if (activeSlide === slides.length - 1) {
      newSlides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      newSlides = [lastSlide, firstSlide, secondSlide];
    } else {
      newSlides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      displayedSlideId: newSlides[1].id,
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
    translate: translate + getWidth(),
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
  });

  const prevSlide = () => setState({
    ...state,
    translate: 0,
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
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
    width: ${getWidth()}px;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
`;

  return (
    <div css={sliderStyles} ref={sliderRef}>
      <SlidesWrapper
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {_slides.map((slide) => (
          <Slide
            width={getWidth()}
            key={slide.key}
            slide={slide}
            containerClass={containerClass}
          />
        ))}
      </SlidesWrapper>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      {withDots && <Dots slides={uniqBy(slides, 'id')} displayedSlideId={displayedSlideId} />}
    </div>
  );
};

export default Slider;
