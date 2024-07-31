import { CurrenciesType, CurrencyDetail } from '@constants/api';

export interface CardListProps {
  heading: string;
  elements: Array<CurrencyDetail>;
  onCardClick: (currencyKey: CurrenciesType) => void;
}
