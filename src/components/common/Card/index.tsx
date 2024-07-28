import React, { KeyboardEvent, ReactNode } from 'react';

import { CurrenciesType } from '@constants/api';

import * as styles from './style.scss';

export interface CardProps {
  label: string;
  rate: string;
  icon: ReactNode;
  onClick: (code: CurrenciesType) => void;
  code: CurrenciesType;
}

export const Card = ({ code, icon, label, onClick, rate, ...props }: CardProps) => {
  const handleClick = () => {
    onClick(code);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick(code);
    }
  };

  return (
    <div role="button" tabIndex={0} className={styles.card} onClick={handleClick} onKeyDown={onKeyDown} {...props}>
      {icon}
      <div className={styles.currencyWrapper}>
        <h4 className={styles.currencyHeading}>{label}</h4>
        <span className={styles.rate}>{rate}</span>
      </div>
    </div>
  );
};
