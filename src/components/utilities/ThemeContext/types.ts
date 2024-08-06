export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export interface ContextProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}
