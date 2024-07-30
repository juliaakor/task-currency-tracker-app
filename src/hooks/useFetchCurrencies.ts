import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CURRENCIES, CurrenciesType, CurrencyDetail } from '@constants/api';
import { getFormatedDate } from '@lib/utils/api';
import { useIsCurrencyChanged, fetchCurrencies, CurrencyStateStatus } from '@store/currency';
import { AppDispatch } from '@store/index';

export const useFetchCurrencies = (fromCurrency: CurrenciesType): CurrencyDetail[] => {
  const dispatch = useDispatch<AppDispatch>();
  const { elements, isCurrencyChanged, status } = useIsCurrencyChanged(fromCurrency);

  useEffect(() => {
    if (status === CurrencyStateStatus.idle || isCurrencyChanged) {
      dispatch(
        fetchCurrencies({
          currencies: Object.keys(CURRENCIES).join(','),
          date: getFormatedDate(),
          fromCurrency,
        })
      );
    }
  }, [fromCurrency, status, dispatch, isCurrencyChanged]);

  return elements;
};
