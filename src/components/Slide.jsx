/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({
  width, slideImgSize, margin = 0, containerClass, slide: {
    slideImgUrl,
    slideTitle,
    slideDescription,
    slideLinkUrl,
  },
}) => (
  <div
    className={`${containerClass}__slide`}
    css={css`
      width: ${width}px;
      background-image: url('${slideImgUrl}');
      background-size: ${slideImgSize || 'cover'};
      background-repeat: no-repeat;
      background-position: center;
      margin: ${margin}px;
      position: relative;
    `}
  >
    {(slideTitle || slideDescription || slideLinkUrl) && (
      <div className={`${containerClass}__slide-overlay`}>
        {slideTitle && <span className={`${containerClass}__slide-title`}>{slideTitle}</span>}
        {slideDescription && <span className={`${containerClass}__slide-description`}>{slideDescription}</span>}
        {slideLinkUrl && <a href={slideLinkUrl} className={`${containerClass}__slide-link`} />}
      </div>
    )}
  </div>
);

export default Slide;
