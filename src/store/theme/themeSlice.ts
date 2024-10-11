import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  isThemeDark: boolean;
}

const initialState: ThemeState = {
  isThemeDark: true,
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isThemeDark: action.payload,
      };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
