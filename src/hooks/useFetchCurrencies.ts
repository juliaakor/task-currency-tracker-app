import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CURRENCIES, CurrenciesType, CurrencyDetail } from '@constants/api';
import { getFormatedDate } from '@lib/utils/api';
import { AppDispatch, RootState } from '@store/index';
import { fetchCurrencies } from '@store/slices/currencySlice';

export const useFetchCurrencies = (fromCurrency: CurrenciesType): CurrencyDetail[] => {
  const dispatch = useDispatch<AppDispatch>();
  const { elements, status } = useSelector((state: RootState) => state.currencies);
  const isChanged =
    elements.find((currency) => {
      return currency.code === fromCurrency;
    })?.rate !== 1;

  useEffect(() => {
    if (status === 'idle' || isChanged) {
      dispatch(
        fetchCurrencies({
          currencies: Object.keys(CURRENCIES).join(','),
          date: getFormatedDate(),
          fromCurrency,
        })
      );
    }
  }, [fromCurrency, status, dispatch, elements, isChanged]);

  return elements;
};
