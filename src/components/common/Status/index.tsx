import React from 'react';

import { PulsingCircleIcon } from '@components/Icons';

import * as styles from './style.scss';

export interface StatusProps {
  value: string;
}

export const Status = ({ value, ...props }: StatusProps) => {
  return (
    <div className={styles.status} {...props}>
      <PulsingCircleIcon />
      <span className={styles.statusValue}>Last updated at {value}</span>
    </div>
  );
};
