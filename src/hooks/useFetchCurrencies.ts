import { useEffect, useState } from 'react';

import { convertResToCurrencyDetail, getFormatedDate } from '@/lib/utils/api';
import { getExchangeRates } from '@api/index';
import { CURRENCIES, CurrenciesType, CurrencyDetail, CurrencyResponseType } from '@constants/api';

// import { mock } from './mock';

export const useFetchCurrencies = (fromCurrency: CurrenciesType) => {
  const [elements, setElements] = useState<CurrencyDetail[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currenciesData = (await getExchangeRates({
        baseCurrency: fromCurrency,
        currencies: Object.keys(CURRENCIES).join(','),
        date: getFormatedDate(),
      })) as CurrencyResponseType;
      // const currenciesData = mock;

      setElements(convertResToCurrencyDetail(currenciesData));
    };

    fetchCurrencies();
  }, [fromCurrency]);

  return elements;
};
