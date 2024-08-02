import { ReactNode } from 'react';

export interface InputProps {
  label?: string;
  name: string;
  defaultValue: string;
  type: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  children?: ReactNode;
}
