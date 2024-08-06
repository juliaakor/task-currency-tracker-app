import { useEffect } from 'react';

import { CURRENCIES, CurrenciesType, CurrencyDetail } from '@constants/api';
import { getFormatedDate } from '@lib/utils/api';
import { isCurrencyChangedSelector, fetchCurrencies, CurrencyStateStatus } from '@store/currency';
import { useAppDispatch, useAppSelector } from '@store/index';

export const useFetchCurrencies = (fromCurrency: CurrenciesType): CurrencyDetail[] => {
  const dispatch = useAppDispatch();
  const { elements, isCurrencyChanged, status } = useAppSelector(isCurrencyChangedSelector(fromCurrency));

  useEffect(() => {
    if (status === CurrencyStateStatus.Idle || isCurrencyChanged) {
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
