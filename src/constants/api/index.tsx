import React, { ReactNode } from 'react';

import {
  AustralianDollarIcon,
  BitcoinIcon,
  CanadianDollarIcon,
  DollarIcon,
  EuroIcon,
  PesoArgentinoIcon,
  YenIcon,
  YuanIcon,
} from '@components/Icons';

export interface Currency {
  icon: ReactNode;
  label: string;
}

export const CURRENCIES: Record<string, Currency> = {
  ARS: {
    icon: <PesoArgentinoIcon />,
    label: 'Argentine Peso',
  },
  AUD: {
    icon: <AustralianDollarIcon />,
    label: 'Australian Dollar',
  },
  BTC: {
    icon: <BitcoinIcon />,
    label: 'Bitcoin',
  },
  CAD: {
    icon: <CanadianDollarIcon />,
    label: 'Canadian Dollar',
  },
  CNY: {
    icon: <YuanIcon />,
    label: 'Yuan',
  },
  EUR: {
    icon: <EuroIcon />,
    label: 'Euro',
  },
  JPY: {
    icon: <YenIcon />,
    label: 'Yen',
  },
  USD: {
    icon: <DollarIcon />,
    label: 'Commercial Dollar',
  },
};

export type CurrenciesType = keyof typeof CURRENCIES;

export interface CurrencyDetail {
  code: string;
  rate: number;
}

export interface CurrencyResponse {
  code: string;
  value: number;
}

export interface CurrencyResponseType {
  meta: {
    last_updated_at: string;
  };
  data: Record<string, CurrencyResponse>;
}

export interface CurrencyRequestType {
  fromCurrency: CurrenciesType;
  currencies: string;
  date: string;
}
