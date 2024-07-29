import { CurrencyResponseType } from '@constants/api';
import { currencyApi } from '@lib/axios/config';

export interface GetExchangeRatesRequestType {
  date: string;
  baseCurrency: string;
  currencies: string;
}

export const getExchangeRates = async ({ baseCurrency, currencies, date }: GetExchangeRatesRequestType) => {
  try {
    const request = `v3/historical?date=${date}&base_currency=${baseCurrency}&currencies=${currencies}`;
    const response = await currencyApi.get<CurrencyResponseType>(request);

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching latest currency rates:', error);
    throw error;
  }
};
