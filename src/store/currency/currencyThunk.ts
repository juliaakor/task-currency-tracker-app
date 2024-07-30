import { createAsyncThunk } from '@reduxjs/toolkit';

import { getExchangeRates } from '@api/index';
import { CurrenciesType, CurrencyResponseType } from '@constants/api';
import { convertResToCurrencyDetail } from '@lib/utils/api';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async ({ currencies, date, fromCurrency }: { fromCurrency: CurrenciesType; currencies: string; date: string }) => {
    const currenciesData = (await getExchangeRates({
      baseCurrency: fromCurrency,
      currencies,
      date,
    })) as CurrencyResponseType;

    return convertResToCurrencyDetail(currenciesData);
  }
);
