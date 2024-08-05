import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyFormFields } from '@/components/CurrencyForm/types';
import { CURRENCIES, CurrenciesType } from '@constants/api';

export interface ChartHistoryState {
  data: Record<CurrenciesType, (Omit<CurrencyFormFields, 'date'> & { date: string })[]>;
}

const initialState: ChartHistoryState = {
  data: Object.keys(CURRENCIES).reduce(
    (acc, key) => {
      acc[key as CurrenciesType] = [];

      return acc;
    },
    {} as Record<CurrenciesType, (Omit<CurrencyFormFields, 'date'> & { date: string })[]>
  ),
};

const chartHistorySlice = createSlice({
  initialState,
  name: 'chartHistory',
  reducers: {
    addCurrencyHistory: (
      state,
      action: PayloadAction<{
        currency: CurrenciesType;
        history: Omit<CurrencyFormFields, 'date'> & { date: string };
      }>
    ) => {
      const { currency, history } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [currency]: [...state.data[currency], history],
        },
      };
    },
    clearCurrencyHistory: (
      state,
      action: PayloadAction<{
        currency: CurrenciesType;
      }>
    ) => {
      const { currency } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [currency]: [],
        },
      };
    },
    updateCurrencyHistory: (
      state,
      action: PayloadAction<{
        currency: CurrenciesType;
        history: (Omit<CurrencyFormFields, 'date'> & { date: string })[];
      }>
    ) => {
      const { currency, history } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [currency]: history,
        },
      };
    },
  },
});

export const { addCurrencyHistory, clearCurrencyHistory, updateCurrencyHistory } = chartHistorySlice.actions;
export const chartHistoryReducer = chartHistorySlice.reducer;
