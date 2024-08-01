import React from 'react';

import * as styles from './style.scss';
import { FormProps } from './types';
import { Button } from '../Button';

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <div className={styles.buttonWrapper}>
        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
};
