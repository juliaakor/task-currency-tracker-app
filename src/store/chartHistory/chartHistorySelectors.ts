import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store/index';

export const selectChartHistory = (state: RootState) => state.chartHistory.data;

export const selectChartHistoryByCurrency = (currency: string) =>
  createSelector([selectChartHistory], (data) => {
    const history = data[currency] || [];

    return history.map((item) => ({
      ...item,
      date: new Date(item.date),
    }));
  });
