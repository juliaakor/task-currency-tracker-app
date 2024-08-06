import { MessageStatus, ObserverUpdateFunctions } from '@components/utilities/FormObserver/types';
import {
  errorCurrencyFormSubmitToast,
  inProgressCurrencyFormSubmitToast,
  successCurrencyFormSubmitToast,
} from '@lib/utils/toasts';

export const DEFAULT_CURRENCY_VALUES = { closePrice: 0, date: new Date(), highPrice: 0, lowPrice: 0, openPrice: 0 };

export const CUSTOM_TOAST_FUNCTIONS: ObserverUpdateFunctions = {
  [MessageStatus.Error]: errorCurrencyFormSubmitToast,
  [MessageStatus.Fail]: inProgressCurrencyFormSubmitToast,
  [MessageStatus.Success]: successCurrencyFormSubmitToast,
};

export const CURRENCY_FORM_INPUTS = [
  {
    label: 'Date',
    name: 'date',
    placeholder: 'Enter date',
    type: 'date',
  },
  {
    label: 'Open Price',
    name: 'openPrice',
    placeholder: 'Enter open price',
  },
  {
    label: 'Close Price',
    name: 'closePrice',
    placeholder: 'Enter close price',
  },
  {
    label: 'High Price',
    name: 'highPrice',
    placeholder: 'Enter high price',
  },
  {
    label: 'Low Price',
    name: 'lowPrice',
    placeholder: 'Enter low price',
  },
];

export const CHART_CAPACITY = 30;
