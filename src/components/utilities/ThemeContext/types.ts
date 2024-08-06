export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export interface ContextProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}
