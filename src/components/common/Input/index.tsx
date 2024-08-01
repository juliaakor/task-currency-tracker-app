import React, { useState } from 'react';

import * as styles from './style.scss';
import { InputProps } from './types';

export const Input = ({
  defaultValue,
  error,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  type = 'text',
  ...props
}: InputProps) => {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;

    setValue(inputValue);
    onChange(value);
  };

  return (
    <div className={styles.inputWrapper}>
      <span className={styles.infoWrapper}>
        {label && (
          <label className={styles.label} htmlFor={label}>
            {label}
          </label>
        )}
        <span />
      </span>
      <input
        className={styles.input}
        id={label}
        name={name}
        onChange={onInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
