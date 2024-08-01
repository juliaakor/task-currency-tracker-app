import React from 'react';

import * as styles from './style.scss';
import { ButtonProps } from './types';

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type="button" {...props}>
      {label}
    </button>
  );
};
