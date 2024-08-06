import React, { useState } from 'react';

import { Button, CurrencyChart, CurrencyDropdown } from '@components/common';
import { CurrencyFormFields } from '@components/CurrencyForm/types';
import { CurrencyForm } from '@components/index';
import { useModal } from '@hooks/index';
import { initSelectedOptionState } from '@lib/utils/api';
import {
  addCurrencyHistory,
  selectChartHistoryByCurrency,
  clearCurrencyHistory,
  updateCurrencyHistory,
} from '@store/chartHistory';
import { useAppDispatch, useAppSelector } from '@store/index';

import * as styles from './styles.scss';

const options = initSelectedOptionState();

export const TimelinePage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(options[0].code);
  const { closeModal, isModalOpen, openModal } = useModal();

  const dispatch = useAppDispatch();
  const history = useAppSelector(selectChartHistoryByCurrency(selectedCurrency));

  const handleAddHistory = (newHistory: CurrencyFormFields) => {
    const newHistoryDateString = newHistory.date.toISOString();

    const existingHistoryIndex = history.findIndex(
      (record: CurrencyFormFields) => record.date.toISOString() === newHistoryDateString
    );

    if (existingHistoryIndex !== -1) {
      const updatedHistory = history.map((record, index) =>
        index === existingHistoryIndex
          ? {
              ...record,
              ...newHistory,
              date: newHistoryDateString,
            }
          : {
              ...record,
              date: record.date.toISOString(),
            }
      );

      dispatch(
        updateCurrencyHistory({
          currency: selectedCurrency,
          history: updatedHistory as (Omit<CurrencyFormFields, 'date'> & { date: string })[],
        })
      );
    } else {
      dispatch(
        addCurrencyHistory({
          currency: selectedCurrency,
          history: {
            ...newHistory,
            date: newHistoryDateString,
          },
        })
      );
    }
  };

  const handleClearHistory = () => {
    dispatch(
      clearCurrencyHistory({
        currency: selectedCurrency,
      })
    );
  };

  const handleCurrencySelect = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
  };

  const handleFormSubmit = (fields: CurrencyFormFields) => {
    handleAddHistory(fields);
    closeModal();
  };

  return (
    <div className={styles.timelineContainer}>
      <CurrencyDropdown defaultOption={selectedCurrency} options={options} onCurrencySelect={handleCurrencySelect} />
      <CurrencyChart optionsData={history} unit="day" />
      <CurrencyForm
        historyLength={history.length}
        currency={selectedCurrency}
        onSubmit={handleFormSubmit}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <div className={styles.buttonsContainer}>
        <Button label="Add new" type="button" onClick={openModal} />
        <Button label="Clear" type="button" onClick={handleClearHistory} />
      </div>
    </div>
  );
};
