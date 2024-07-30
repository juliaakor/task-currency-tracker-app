import React from 'react';

import { PulsingCircleIcon } from '@components/Icons';

import * as styles from './style.scss';
import { StatusProps } from './types';

export const Status = ({ value, ...props }: StatusProps) => {
  return (
    <div className={styles.status} {...props}>
      <PulsingCircleIcon />
      <span className={styles.statusValue}>Last updated at {value}</span>
    </div>
  );
};
