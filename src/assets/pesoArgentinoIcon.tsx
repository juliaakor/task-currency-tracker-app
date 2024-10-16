import React from 'react';

import { IconProps } from './IconTypes';

export const PesoArgentinoIcon = ({ color = '#5A4B2C', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1181)">
        <path
          d="M31.6666 54.5834V25.4167H38.9583C40.1894 25.4167 41.4085 25.6592 42.5459 26.1303C43.6834 26.6015 44.7169 27.292 45.5874 28.1626C46.458 29.0331 47.1485 30.0666 47.6197 31.204C48.0908 32.3415 48.3333 33.5605 48.3333 34.7917C48.3333 36.0228 48.0908 37.2419 47.6197 38.3793C47.1485 39.5168 46.458 40.5503 45.5874 41.4208C44.7169 42.2914 43.6834 42.9819 42.5459 43.4531C41.4085 43.9242 40.1894 44.1667 38.9583 44.1667H31.6666"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M52.5 31.6667H27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52.5 37.9167H27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_1181">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
