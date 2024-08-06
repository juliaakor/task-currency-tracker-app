import { FormObserver } from '@lib/utils/observer';

export interface CurrencyFormFields {
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  date: Date;
}

export interface CurrencyFormState {
  values: CurrencyFormFields;
  isModalOpen: boolean;
}

export interface CurrencyFormProps {
  currency: string;
  isOpen: boolean;
  formObserver: FormObserver;
  historyLength: number;
  onSubmit: (fields: CurrencyFormFields) => void;
  onClose: () => void;
}
