import React, { useState } from 'react';

import * as styles from './style.scss';
import { InputProps } from './types';

export const Input = ({ defaultValue, label, name, onChange, type = 'text', ...props }: InputProps) => {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;

    setValue(inputValue);
    onChange(value);
  };

  return (
    <div className={styles.inputWrapper}>
      <span className={styles.infoWrapper}>
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
        <span />
      </span>
      <input
        className={styles.input}
        id={label}
        name={name}
        onChange={onInputChange}
        type={type}
        value={value}
        {...props}
      />
    </div>
  );
};
