import { useSelector } from 'react-redux';

import { CurrenciesType } from '@constants/api';
import { RootState } from '@store/index';

export const useCurrencyElements = () => {
  const { elements } = useSelector((state: RootState) => state.currencies);

  const initialCurrency = elements.find((currency) => currency.rate === 1);

  return { elements, initialCurrency };
};

export const useIsCurrencyChanged = (fromCurrency: CurrenciesType) => {
  const { elements, status } = useSelector((state: RootState) => state.currencies);

  const isCurrencyChanged = elements.find((currency) => currency.code === fromCurrency)?.rate !== 1;

  return { elements, isCurrencyChanged, status };
};
