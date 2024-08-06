import React, { useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;

    setValue(inputValue);
    onChange(inputValue);
  };

  const handleFocus = () => {
    if (type === 'date' && inputRef.current) inputRef.current.showPicker();

    if (onFocus) onFocus();
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
        ref={inputRef}
        className={styles.input}
        id={label}
        name={name}
        onChange={onInputChange}
        onFocus={handleFocus}
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
