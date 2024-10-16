import React from 'react';

import { IconProps } from './IconTypes';

export const YuanIcon = ({ color = '#4D505B', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1188)">
        <path
          d="M46.25 33.75V50.4167C46.25 51.5217 46.689 52.5815 47.4704 53.3629C48.2518 54.1443 49.3116 54.5833 50.4167 54.5833C51.5217 54.5833 52.5815 54.1443 53.3629 53.3629C54.1443 52.5815 54.5833 51.5217 54.5833 50.4167"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M54.5833 33.75H25.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M54.5833 25.4167H25.4166"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.75 33.75V42.0833C33.75 47.2917 32.3605 50.4167 29.5834 54.5833"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1188">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
