import { CurrencyResponseType } from '@constants/api';

export const convertResToCurrencyDetail = ({ data }: CurrencyResponseType) => {
  return Object.keys(data).map((key) => ({
    code: data[key].code,
    rate: data[key].value < 0.01 ? +data[key].value.toExponential(2) : +data[key].value.toFixed(2),
  }));
};
