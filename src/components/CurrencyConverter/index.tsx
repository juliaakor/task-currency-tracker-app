import React, { ChangeEvent } from 'react';

import { CardList, Input, Modal, Select } from '@components/common';
import { PortalProvider } from '@components/utilities';
import { CURRENCIES, CurrenciesType } from '@constants/api';
import { useCurrencySelection, useModal } from '@hooks/index';

import * as styles from './style.scss';

const options = Object.fromEntries(Object.entries(CURRENCIES).map(([key, value]) => [key, value.label]));

export const CurrencyConverter = () => {
  const { closeModal, isModalOpen, openModal } = useModal();
  const {
    convertedAmount,
    elements,
    fromCurrency,
    handleAmountChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    toCurrency,
  } = useCurrencySelection();

  const onCardClick = (currencyKey: CurrenciesType) => {
    handleFromCurrencyChange(currencyKey);
    openModal();
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    handleToCurrencyChange(e.target.value as CurrenciesType);

  return (
    <>
      <CardList heading="Quotes" elements={elements} onCardClick={onCardClick} />
      <PortalProvider>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.converter}>
            <div className={styles.fromCurrency}>
              <span className={styles.currencyOutput}>
                <span className={styles.label}>From:</span> {CURRENCIES[fromCurrency]?.label}
              </span>
            </div>
            <Select label="To:" name="toCurrency" value={toCurrency} options={options} onChange={onSelectChange} />
            <Input type="number" defaultValue="1" name="amount" label="Amount" onChange={handleAmountChange} />
            <div className={styles.currencyOutput}>
              <span className={styles.label}>Converted Amount:</span> {convertedAmount.toFixed(2)}
            </div>
          </div>
        </Modal>
      </PortalProvider>
    </>
  );
};
