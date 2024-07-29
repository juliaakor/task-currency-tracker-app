import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getExchangeRates } from '@api/index';
import { CurrenciesType, CurrencyDetail, CurrencyResponseType } from '@constants/api';
import { convertResToCurrencyDetail } from '@lib/utils/api';

export interface CurrencyState {
  elements: CurrencyDetail[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  cache: Record<string, CurrencyDetail[]>;
}

const initialState: CurrencyState = {
  cache: {},
  elements: [],
  error: null,
  status: 'idle',
};

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

const currencySlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        return {
          ...state,
          elements: action.payload,
          status: 'succeeded',
        };
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message || 'Failed to fetch currencies',
          status: 'failed',
        };
      });
  },
  initialState,
  name: 'currencies',
  reducers: {},
});

export default currencySlice.reducer;
