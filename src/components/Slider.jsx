/** @jsx jsx */
import React, { useState } from 'react';
import SlidesWrapper from './SlidesWrapper.jsx';
import Slide from './Slide.jsx'
import { css, jsx } from '@emotion/core';
import Arrow from './Arrow.jsx';

const Slider = (props) => {
  const { slides: { imagesUrl }, container } = props;
  const getWidth = () => container.clientWidth;
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === imagesUrl.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (imagesUrl.length - 1) * getWidth(),
        activeIndex: imagesUrl.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  return <div css={sliderStyles}>
    <SlidesWrapper
      translate={translate}
      transition={transition}
      width={getWidth() * imagesUrl.length}
    >
      {imagesUrl.map((imageUrl, i) => <Slide key={i} imageUrl={imageUrl} />)}
    </SlidesWrapper>
    <Arrow direction="left" handleClick={prevSlide} />
    <Arrow direction="right" handleClick={nextSlide} />
  </div>
};

const sliderStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`

export default Slider;