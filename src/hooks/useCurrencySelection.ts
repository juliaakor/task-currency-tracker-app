import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CurrenciesType } from '@constants/api';
import { RootState } from '@store/index';

import { useFetchCurrencies } from './useFetchCurrencies';

export const useCurrencySelection = () => {
  const { elements: storageElements } = useSelector((state: RootState) => state.currencies);
  const initialCurrency = storageElements.find((currency) => {
    return currency.rate === 1;
  });

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
    setAmount(numValue);
  };

  const handleFromCurrencyChange = (currency: CurrenciesType) => {
    setFromCurrency(currency);
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
