/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ imageUrl }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      background-image: url('${imageUrl}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide