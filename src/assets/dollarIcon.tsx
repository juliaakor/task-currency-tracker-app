import React from 'react';

import { IconProps } from './IconTypes';

export const DollarIcon = ({ color = '#2A4628', size = 80, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="80" height="80" rx="8" fill={color} />
      <g clipPath="url(#clip0_1_1140)">
        <path
          d="M49.4941 31.0715C49.0794 29.8949 48.3221 28.8693 47.3197 28.1267C46.3172 27.3842 45.1155 26.9586 43.8691 26.9048H35.5358C33.8782 26.9048 32.2885 27.5633 31.1163 28.7354C29.9442 29.9075 29.2858 31.4972 29.2858 33.1548C29.2858 34.8124 29.9442 36.4021 31.1163 37.5742C32.2885 38.7463 33.8782 39.4048 35.5358 39.4048H43.8691C45.5267 39.4048 47.1164 40.0633 48.2885 41.2354C49.4606 42.4075 50.1191 43.9972 50.1191 45.6548C50.1191 47.3124 49.4606 48.9021 48.2885 50.0742C47.1164 51.2463 45.5267 51.9048 43.8691 51.9048H35.5358C34.2894 51.851 33.0877 51.4254 32.0852 50.6828C31.0827 49.9403 30.3254 48.9147 29.9108 47.7381"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 20.9524V27.2024M40 52.2024V58.4524"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1140">
          <rect width="50" height="50" fill="white" transform="translate(15 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};
