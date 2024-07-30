import { createSlice } from '@reduxjs/toolkit';

import { CurrencyDetail } from '@constants/api';
import { fetchCurrencies } from '@store/currency/currencyThunk';

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

export const currencyReducer = currencySlice.reducer;
