import { CurrenciesType } from '@constants/api';

export interface SelectProps {
  label: string;
  name: string;
  value: CurrenciesType;
  options: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
