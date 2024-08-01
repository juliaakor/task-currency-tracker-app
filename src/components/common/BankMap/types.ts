import { CurrenciesType } from '@constants/api';

export interface BankMapProps {
  selectedCurrency: string | null;
}

export interface BankMapState {
  popup: {
    isOpen: boolean;
    name: string;
    latitude: number;
    longitude: number;
    currencies: Partial<CurrenciesType>[];
  } | null;
}
