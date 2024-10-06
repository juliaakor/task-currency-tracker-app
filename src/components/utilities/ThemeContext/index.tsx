import React, { createContext, useCallback, useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@store/index';
import { selectIsThemeDark, setTheme } from '@store/theme';

import { ContextProps, ThemeProviderProps, Theme } from './types';

export const ThemeContext = createContext<ContextProps>({
  darkTheme: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isThemeDark = useAppSelector(selectIsThemeDark);
  const dispatch = useAppDispatch();

  const toggleThemeHandler = useCallback(() => {
    dispatch(setTheme(!isThemeDark));
  }, [dispatch, isThemeDark]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isThemeDark ? Theme.Dark : Theme.Light);
  }, [isThemeDark]);

  const value = useMemo(
    () => ({
      darkTheme: isThemeDark,
      toggleTheme: toggleThemeHandler,
    }),
    [isThemeDark, toggleThemeHandler]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
