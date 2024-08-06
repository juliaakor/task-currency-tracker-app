import { TimeUnit } from 'chart.js';

import { CurrencyFormFields } from '@components/CurrencyForm/types';

export interface ChartItemProps {
  optionsData: CurrencyFormFields[];
  unit: TimeUnit;
}

export interface ChartItem {
  x: number | Date;
  o: number;
  h: number;
  l: number;
  c: number;
}
