import { createSlice } from '@reduxjs/toolkit';

import { CurrencyDetail } from '@constants/api';
import { fetchCurrencies } from '@store/currency/currencyThunk';

export enum CurrencyStateStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface CurrencyState {
  elements: CurrencyDetail[];
  status: CurrencyStateStatus;
  error: string | null;
  cache: Record<string, CurrencyDetail[]>;
}

const initialState: CurrencyState = {
  cache: {},
  elements: [],
  error: null,
  status: CurrencyStateStatus.Idle,
};

const currencySlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        return {
          ...state,
          status: CurrencyStateStatus.Loading,
        };
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        return {
          ...state,
          elements: action.payload,
          status: CurrencyStateStatus.Succeeded,
        };
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message || 'Failed to fetch currencies',
          status: CurrencyStateStatus.Failed,
        };
      });
  },
  initialState,
  name: 'currencies',
  reducers: {},
});

export const currencyReducer = currencySlice.reducer;
