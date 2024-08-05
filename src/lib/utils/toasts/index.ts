import toast, { DefaultToastOptions } from 'react-hot-toast';

import * as styles from './styles.scss';

const baseToastConfig: DefaultToastOptions = {
  ariaProps: {
    'aria-live': 'polite',
    role: 'status',
  },
  className: styles.toast,
  position: 'top-right',
  style: {},
};

const successToastConfig = {
  ...baseToastConfig,
  duration: 4000,
  icon: '👏',
};

const failToastConfig = {
  ...baseToastConfig,
  duration: 3000,
  icon: '💡',
};

const errorToastConfig = {
  ...baseToastConfig,
  duration: 5000,
  icon: '❌',
};

export const successFormSubmitToast = () => toast('Your form has been successfully submitted', successToastConfig);

export const failFormSubmitToast = () => toast('Revalidate your form before submitting', failToastConfig);

export const errorToast = () => toast('Something went wrong...Please load or contact support', errorToastConfig);

export const successCurrencyFormSubmitToast = () =>
  toast('You have successfully entered all 30 values for the graph!', successToastConfig);

export const inProgressCurrencyFormSubmitToast = () =>
  toast(`There are more values left to enter to complete the chart`, failToastConfig);

export const errorCurrencyFormSubmitToast = () =>
  toast(`The chart is full. Clear the chart to submit new values or modify it`, errorToastConfig);
