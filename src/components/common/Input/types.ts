export interface InputProps {
  label: string;
  name: string;
  defaultValue: string;
  type: string;
  onChange: (value: string) => void;
}
