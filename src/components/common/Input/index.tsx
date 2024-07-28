import React, { useEffect, useState } from 'react';

import * as styles from './style.scss';

export interface InputProps {
  label: string;
  name: string;
  type: string;
  onChange: (value: string) => void;
}

export const Input = ({ label, name, onChange, type = 'text', ...props }: InputProps) => {
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;

    setValue(inputValue);
  };

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

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
