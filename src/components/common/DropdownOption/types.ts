import { ReactNode } from 'react';

export interface CurrencyOption {
  code: string;
  label: string;
  icon: ReactNode;
}

export interface OptionProps {
  option: CurrencyOption;
  selected: boolean;
  onOptionClick: (code: string) => void;
}

export interface OptionState {
  info: string;
}
