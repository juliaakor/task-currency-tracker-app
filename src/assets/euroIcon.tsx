import React from 'react';

import { IconProps } from './IconTypes';

export const EuroIcon = ({ color = '#1D324B', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1164)">
        <path
          d="M50.8334 29.5834C49.0752 27.5736 46.8476 26.2142 44.4299 25.6756C42.0122 25.1369 39.512 25.443 37.2428 26.5554C34.9736 27.6679 33.0364 29.5372 31.6742 31.9289C30.3119 34.3207 29.5852 37.1284 29.5852 40C29.5852 42.8717 30.3119 45.6794 31.6742 48.0711C33.0364 50.4629 34.9736 52.3322 37.2428 53.4446C39.512 54.5571 42.0122 54.8632 44.4299 54.3245C46.8476 53.7858 49.0752 52.4264 50.8334 50.4167"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42.0833 35.8333H25.4166M25.4166 44.1666H42.0833"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1164">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
