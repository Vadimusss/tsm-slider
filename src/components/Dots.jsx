/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css, jsx } from '@emotion/core';

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 8px;
      margin-right: 5px;
      border-radius: 50%;
      background: ${active ? '#006eae' : '#08a0d4'};
    `}
  />
);

const Dots = ({ slides, currentSlideIndex }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map(({ id }, i) => (
      <Dot key={id} active={currentSlideIndex === i} />
    ))}
  </div>
);

export default Dots;
