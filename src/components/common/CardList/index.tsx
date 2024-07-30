import React from 'react';

import { Card } from '@components/common/Card';
import { Loader } from '@components/Loader';
import { CURRENCIES, CurrenciesType, CurrencyDetail } from '@constants/api';

import * as styles from './style.scss';

interface CardListProps {
  heading: string;
  elements: Array<CurrencyDetail>;
  onCardClick: (currencyKey: CurrenciesType) => void;
}

export const CardList = ({ elements, heading, onCardClick, ...props }: CardListProps) => {
  const handleCardClick = (code: CurrenciesType) => () => {
    onCardClick(code);
  };

  return (
    <div className={styles.listWrapper}>
      {elements ? (
        <div className={styles.list} {...props}>
          <h3 className={styles.heading}>{heading}</h3>
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
      ) : (
        <Loader />
      )}
    </div>
  );
};
