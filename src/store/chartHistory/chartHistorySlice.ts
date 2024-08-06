import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyFormFields } from '@/components/CurrencyForm/types';
import { CURRENCIES, CurrenciesType } from '@constants/api';

export type ChartHistoryStateItemData = Omit<CurrencyFormFields, 'date'> & { date: string };

export type ChartHistoryStateItem = Record<CurrenciesType, ChartHistoryStateItemData[]>;

export interface ChartHistoryState {
  data: ChartHistoryStateItem;
}

export interface ChartHistoryPayload<T> {
  currency: CurrenciesType;
  history: T;
}

export type AddCurrencyHistoryPayload = ChartHistoryPayload<ChartHistoryStateItemData>;
export type ClearCurrencyHistoryPayload = ChartHistoryPayload<never>;
export type UpdateCurrencyHistoryPayload = ChartHistoryPayload<ChartHistoryStateItemData[]>;

const initialState: ChartHistoryState = {
  data: Object.keys(CURRENCIES).reduce((acc, key) => {
    acc[key as CurrenciesType] = [];

    return acc;
  }, {} as ChartHistoryStateItem),
};

const chartHistorySlice = createSlice({
  initialState,
  name: 'chartHistory',
  reducers: {
    addCurrencyHistory: (state, action: PayloadAction<AddCurrencyHistoryPayload>) => {
      const { currency, history } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [currency]: [...state.data[currency], history],
        },
      };
    },
    clearCurrencyHistory: (state, action: PayloadAction<ClearCurrencyHistoryPayload>) => {
      const { currency } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [currency]: [],
        },
      };
    },
    updateCurrencyHistory: (state, action: PayloadAction<UpdateCurrencyHistoryPayload>) => {
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
