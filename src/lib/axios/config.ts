import axios from 'axios';

import { env } from '@constants/env';

export const currencyApi = axios.create({
  baseURL: 'https://api.currencyapi.com/',
  headers: {
    Accept: 'application/json',
    apikey: env.CURRENCY_API_KEY,
  },
  timeout: 10000,
});

currencyApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

currencyApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 429 || error.response.status === 400 || error.response.status === 403) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);
