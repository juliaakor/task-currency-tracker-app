import React from 'react';

import { IconProps } from './IconTypes';

export const LibraIcon = ({ color = '#5B2C2B', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1152)">
        <path
          d="M50.4167 53.5416C48.7825 54.2907 47.006 54.6784 45.2083 54.6784C43.4107 54.6784 41.6342 54.2907 40 53.5416C38.2916 52.9519 36.4757 52.7396 34.6774 52.9195C32.879 53.0993 31.1411 53.667 29.5833 54.5833C30.6988 54.1972 31.6821 53.5032 32.4195 52.5814C33.1569 51.6597 33.6182 50.548 33.75 49.375V33.75C33.761 31.9248 34.3709 30.1538 35.486 28.7088C36.6011 27.2639 38.1598 26.2251 39.9225 25.7518C41.6853 25.2786 43.5547 25.3972 45.2435 26.0894C46.9324 26.7816 48.3472 28.0091 49.2708 29.5833M43.9583 42.0833H29.375"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1152">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
