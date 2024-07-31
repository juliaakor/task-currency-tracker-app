import axios from 'axios';

import { env } from '@constants/env';
import { StatusCode } from '@type/axios';

export const currencyApi = axios.create({
  baseURL: 'https://api.currencyapi.com/',
  headers: {
    Accept: 'application/json',
    apikey: env.CURRENCY_API_KEY,
  },
  timeout: 10000,
});

currencyApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => {
    throw error;
  }
);

currencyApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === StatusCode.TooManyRequests ||
      error.response.status === StatusCode.BadRequest ||
      error.response.status === StatusCode.Forbidden
    ) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);
