import { CurrencyOption } from '@components/common/DropdownOption/types';

export interface CurrencyDropdownProps {
  onCurrencySelect: (currencyCode: string) => void;
  options: CurrencyOption[];
  defaultOption: string;
}

export interface CurrencyDropdownState {
  isOpen: boolean;
  selectedOption: string;
  options: CurrencyOption[];
}
