/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';

const Arrow = ({ direction, handleClick, containerClass }) => (
  <div
    role="button"
    tabIndex={0}
    onKeyUp={handleClick}
    className={`${containerClass}__${direction === 'right' ? 'right' : 'left'}-arrow`}
    onClick={handleClick}
    css={css`
      outline: none;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
      cursor: pointer;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
    `}
  >
    {direction === 'right'
      ? <img alt="slide left" src={rightArrow} />
      : <img alt="slide right" src={leftArrow} />}
  </div>
);

export default Arrow;
