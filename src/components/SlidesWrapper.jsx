/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css, jsx } from '@emotion/core';

const SlidesWrapper = ({
  translate,
  transition,
  width,
  children,
}) => (
  <div
    className="SlidesWrapper"
    css={css`
      transform: translateX(-${translate}px);
      transition: transform ease-out ${transition}s;
      height: 100%;
      width: ${width}px;
      display: flex;
    `}
  >
    {children}
  </div>
);

export default SlidesWrapper;
