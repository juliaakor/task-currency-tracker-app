import { CurrencyOption } from '@components/common/DropdownOption/types';

export interface SearchProps {
  onCurrencySelect: (currencyCode: string) => void;
}

export interface SearchState {
  options: CurrencyOption[];
  value: string;
  isFocused: boolean;
}
