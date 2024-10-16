import React from 'react';

import { IconProps } from './IconTypes';

export const BitcoinIcon = ({ color = '#3D2E28', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1170)">
        <path
          d="M27.5 27.5H44.1667C45.8243 27.5 47.414 28.1585 48.5861 29.3306C49.7582 30.5027 50.4167 32.0924 50.4167 33.75C50.4167 35.4076 49.7582 36.9973 48.5861 38.1694C47.414 39.3415 45.8243 40 44.1667 40C45.8243 40 47.414 40.6585 48.5861 41.8306C49.7582 43.0027 50.4167 44.5924 50.4167 46.25C50.4167 47.9076 49.7582 49.4973 48.5861 50.6694C47.414 51.8415 45.8243 52.5 44.1667 52.5H27.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M31.6666 27.5V52.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31.6666 40H44.1666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33.75 21.25V27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.0834 21.25V27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33.75 52.5V58.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.0834 52.5V58.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_1170">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
