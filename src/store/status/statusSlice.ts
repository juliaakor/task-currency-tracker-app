import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { formatStatusTime } from '@/lib/utils/format';

export interface StatusState {
  lastUpdated: string;
}

const initialState: StatusState = {
  lastUpdated: formatStatusTime(new Date()),
};

const statusSlice = createSlice({
  initialState,
  name: 'updateStatus',
  reducers: {
    setStatusUpdate: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        lastUpdated: action.payload,
      };
    },
  },
});

export const { setStatusUpdate } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
