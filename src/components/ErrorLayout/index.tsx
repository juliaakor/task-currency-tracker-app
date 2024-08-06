import React from 'react';

import * as styles from './styles.scss';
import { ErrorLayoutProps } from './types';

export const ErrorLayout = ({ className, message, title }: ErrorLayoutProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
