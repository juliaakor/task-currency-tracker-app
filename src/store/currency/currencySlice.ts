/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

import { CurrencyDetail } from '@constants/api';
import { fetchCurrencies } from '@store/currency/currencyThunk';

export enum CurrencyStateStatus {
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
}

export interface CurrencyState {
  elements: CurrencyDetail[];
  status:
    | CurrencyStateStatus.idle
    | CurrencyStateStatus.loading
    | CurrencyStateStatus.succeeded
    | CurrencyStateStatus.failed;
  error: string | null;
  cache: Record<string, CurrencyDetail[]>;
}

const initialState: CurrencyState = {
  cache: {},
  elements: [],
  error: null,
  status: CurrencyStateStatus.idle,
};

const currencySlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        return {
          ...state,
          status: CurrencyStateStatus.loading,
        };
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        return {
          ...state,
          elements: action.payload,
          status: CurrencyStateStatus.succeeded,
        };
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message || 'Failed to fetch currencies',
          status: CurrencyStateStatus.failed,
        };
      });
  },
  initialState,
  name: 'currencies',
  reducers: {},
});

export const currencyReducer = currencySlice.reducer;
