export const validateRequiredText = (value: string, fieldName: string, minLength?: number) => {
  if (value.trim() === '') return `${fieldName} is required`;

  if (minLength !== undefined && value.trim().length < minLength)
    return `${fieldName} must be at least ${minLength} characters long`;

  return '';
};
