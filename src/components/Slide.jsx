/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({
  width, containerClass, slide: {
    slideImgUrl,
    slideTitle,
    slideDescription,
    slideLinkUrl,
  },
}) => (
  <div
    className={`${containerClass}__slide`}
    css={css`
      height: 100%;
      width: ${width}px;
      background-image: url('${slideImgUrl}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  >
    {(slideTitle || slideDescription || slideLinkUrl) && (
    <div className={`${containerClass}__slide-overlay`}>
      {slideTitle && <span className={`${containerClass}__slide-title`}>{slideTitle}</span>}
      {slideDescription && <span className={`${containerClass}__slide-description`}>{slideDescription}</span>}
      {slideLinkUrl && <a href={slideLinkUrl} className={`${containerClass}__slide-link`}>подробнее об услуге</a>}
    </div>
    )}
  </div>
);

export default Slide;
