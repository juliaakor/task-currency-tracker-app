import React from 'react';

import { IconProps } from './IconTypes';

export const CanadianDollarIcon = ({ color = '#452534', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1211)">
        <path
          d="M58.75 27.5H50.4166C48.759 27.5 47.1693 28.1585 45.9972 29.3306C44.8251 30.5027 44.1666 32.0924 44.1666 33.75C44.1666 35.4076 44.8251 36.9973 45.9972 38.1694C47.1693 39.3415 48.759 40 50.4166 40H52.5C54.1576 40 55.7473 40.6585 56.9194 41.8306C58.0915 43.0027 58.75 44.5924 58.75 46.25C58.75 47.9076 58.0915 49.4973 56.9194 50.6694C55.7473 51.8415 54.1576 52.5 52.5 52.5H44.1666"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.8333 52.5H33.75C30.4348 52.5 27.2554 51.183 24.9112 48.8388C22.567 46.4946 21.25 43.3152 21.25 40C21.25 36.6848 22.567 33.5054 24.9112 31.1612C27.2554 28.817 30.4348 27.5 33.75 27.5H35.8333"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M50.4166 56.6667V52.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52.5 27.5V23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_1211">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
