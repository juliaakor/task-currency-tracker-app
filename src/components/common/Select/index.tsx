import React from 'react';

import * as styles from './style.scss';
import { SelectProps } from './types';

export const Select = ({ label, name, onChange, options, value }: SelectProps) => {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select className={styles.select} id={name} name={name} value={value} onChange={onChange}>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};
