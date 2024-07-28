import React from 'react';

import { Card } from '@components/common/Card';
import { CURRENCIES, CurrenciesType, CurrencyDetail } from '@constants/api';

import * as styles from './style.scss';

interface CardListProps {
  elements: Array<CurrencyDetail>;
  onCardClick: (currencyKey: CurrenciesType) => void;
}

export const CardList = ({ elements, onCardClick, ...props }: CardListProps) => {
  const handleCardClick = (code: CurrenciesType) => () => {
    onCardClick(code);
  };

  return (
    <div className={styles.list} {...props}>
      {elements.map(({ code, rate }) => (
        <Card
          key={code}
          rate={rate}
          label={CURRENCIES[code].label}
          icon={CURRENCIES[code].icon}
          onClick={handleCardClick(code)}
          code={code}
        />
      ))}
    </div>
  );
};
