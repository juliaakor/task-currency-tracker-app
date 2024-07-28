import React from 'react';

import { CurrenciesType } from '@constants/api';

import * as styles from './style.scss';

interface SelectProps {
  label: string;
  name: string;
  value: CurrenciesType;
  options: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

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
