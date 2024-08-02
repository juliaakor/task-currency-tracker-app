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
