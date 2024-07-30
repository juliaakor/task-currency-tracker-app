import { createAsyncThunk } from '@reduxjs/toolkit';

import { getExchangeRates } from '@api/index';
import { CurrencyRequestType } from '@constants/api';
import { convertResToCurrencyDetail } from '@lib/utils/api';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async ({ currencies, date, fromCurrency }: CurrencyRequestType) => {
    const currenciesData = await getExchangeRates({
      baseCurrency: fromCurrency,
      currencies,
      date,
    });

    return convertResToCurrencyDetail(currenciesData);
  }
);
