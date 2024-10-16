import React from 'react';

import { IconProps } from './IconTypes';

export const PulsingCircleIcon = ({ size = 50, ...props }: IconProps) => {
  return (
    <svg
      className="pulsing-circle"
      width={size}
      height={size}
      viewBox="0 0 50 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.0168933">
        <path
          d="M25 0C38.7975 0 50 11.5359 50 25.744C50 39.9521 38.7975 51.488 25 51.488C11.2025 51.488 0 39.9521 0 25.744C0 11.5359 11.2025 0 25 0Z"
          fill="#00BC4F"
        />
      </g>
      <g opacity="0.353972">
        <path
          d="M25 8.73615C34.1154 8.73615 41.5164 16.3574 41.5164 25.744C41.5164 35.1307 34.1154 42.7519 25 42.7519C15.8846 42.7519 8.48364 35.1307 8.48364 25.744C8.48364 16.3574 15.8846 8.73615 25 8.73615Z"
          fill="#00BC4F"
        />
      </g>
      <g opacity="0.691051">
        <path
          d="M24.9998 17.4722C29.4331 17.4722 33.0325 21.1788 33.0325 25.744C33.0325 30.3092 29.4331 34.0158 24.9998 34.0158C20.5665 34.0158 16.967 30.3092 16.967 25.744C16.967 21.1788 20.5665 17.4722 24.9998 17.4722Z"
          fill="#00BC4F"
        />
      </g>
    </svg>
  );
};
