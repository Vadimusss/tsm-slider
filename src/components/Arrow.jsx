/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css, jsx } from '@emotion/core';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      cursor: pointer;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
    `}
  >
    {direction === 'right' ? <img alt="slide left" src={rightArrow} /> : <img alt="slide right" src={leftArrow} />}
  </div>
);

export default Arrow;
