import { useState, useEffect } from 'react';

import { CurrenciesType } from '@constants/api';
import { currencySelector } from '@store/currency';
import { useAppSelector } from '@store/index';

import { useFetchCurrencies } from './useFetchCurrencies';
import { useUpdateStatus } from './useUpdateStatus';

export const useCurrencySelection = () => {
  const { updateStatus } = useUpdateStatus();
  const { initialCurrency } = useAppSelector(currencySelector);
  const [fromCurrency, setFromCurrency] = useState<CurrenciesType>(initialCurrency?.code || 'USD');
  const [toCurrency, setToCurrency] = useState<CurrenciesType>('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const elements = useFetchCurrencies(fromCurrency);

  useEffect(() => {
    const toCurrencyDetail = elements.find((element) => element.code === toCurrency);
    if (toCurrencyDetail) {
      setConvertedAmount(amount * Number(toCurrencyDetail.rate));
    }
  }, [amount, fromCurrency, toCurrency, elements]);

  const handleAmountChange = (value: string) => {
    const numValue = parseFloat(value);
    const validValue = !Number.isNaN(numValue) && numValue >= 0 ? numValue : 0;

    setAmount(validValue);
  };

  const handleFromCurrencyChange = (currency: CurrenciesType) => {
    setFromCurrency(currency);
    updateStatus();
  };

  const handleToCurrencyChange = (currency: CurrenciesType) => {
    setToCurrency(currency);
  };

  return {
    convertedAmount,
    elements,
    fromCurrency,
    handleAmountChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    toCurrency,
  };
};
