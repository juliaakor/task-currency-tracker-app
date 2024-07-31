import { createSelector } from '@reduxjs/toolkit';

import { CurrenciesType } from '@constants/api';
import { RootState } from '@store/index';

export const currencySelector = createSelector(
  (state: RootState) => state.currencies.elements,
  (elements) => {
    const initialCurrency = elements.find((currency) => currency.rate === 1);

    return { elements, initialCurrency };
  }
);

export const isCurrencyChangedSelector = (fromCurrency: CurrenciesType) =>
  createSelector(
    (state: RootState) => state.currencies,
    ({ elements, status }) => {
      const isCurrencyChanged = elements.find((currency) => currency.code === fromCurrency)?.rate !== 1;

      return { elements, isCurrencyChanged, status };
    }
  );
