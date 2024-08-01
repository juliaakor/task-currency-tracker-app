import React, { useState } from 'react';

import * as styles from './style.scss';
import { TextareaProps } from './types';

export const Textarea = ({ error, label, name, onChange, value: defaultValue }: TextareaProps) => {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: inputValue } = e.target;

    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className={styles.textareaField}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea className={styles.textarea} name={name} id={name} value={value} onChange={onInputChange} />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
