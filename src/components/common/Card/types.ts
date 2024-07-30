import { ReactNode } from 'react';

import { CurrenciesType } from '@constants/api';

export interface CardProps {
  label: string;
  rate: number;
  icon: ReactNode;
  onClick: (code: CurrenciesType) => void;
  code: CurrenciesType;
}
