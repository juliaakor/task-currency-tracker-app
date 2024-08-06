import React, { createContext, useEffect, useMemo, useState } from 'react';

import { ContextProps, ThemeProviderProps, Theme } from './types';

export const ThemeContext = createContext<ContextProps>({
  darkTheme: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleThemeHandler = () => {
    setDarkTheme((prevState) => !prevState);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? Theme.Dark : Theme.Light);
  }, [darkTheme]);

  const value = useMemo(
    () => ({
      darkTheme,
      toggleTheme: toggleThemeHandler,
    }),
    [darkTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
