export interface TextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}
