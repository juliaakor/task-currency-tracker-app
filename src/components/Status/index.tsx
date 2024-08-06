import React from 'react';

import { PulsingCircleIcon } from '@assets/index';
import { useAppSelector } from '@store/index';
import { selectStatusLastUpdated } from '@store/status';

import * as styles from './style.scss';

export const Status = () => {
  const status = useAppSelector(selectStatusLastUpdated);

  return (
    <div className={styles.status}>
      <PulsingCircleIcon />
      <span className={styles.statusValue}>Last updated at {status}</span>
    </div>
  );
};
