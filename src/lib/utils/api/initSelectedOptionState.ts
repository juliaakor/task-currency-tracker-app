import { CURRENCIES } from '@constants/api';

export const initSelectedOptionState = () => {
  return Object.keys(CURRENCIES).map((key) => ({
    code: key,
    icon: CURRENCIES[key].icon,
    label: CURRENCIES[key].label,
  }));
};
