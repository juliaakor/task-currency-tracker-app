import { useState } from 'react';

import { FormObserver } from '@lib/utils/observer';
import { validateEmail, validateRequiredText } from '@lib/utils/validation';

interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  errors: Errors;
  isLoading: boolean;
  isSubmitted: boolean;
}

const defaultContactFormValues = {
  email: '',
  errors: {
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  },
  firstName: '',
  lastName: '',
  message: '',
};

export const useContactForm = (formObserver: FormObserver) => {
  const [submitKey, setSubmitKey] = useState<number>(0);
  const [formState, setFormState] = useState<FormState>({
    ...defaultContactFormValues,
    isLoading: false,
    isSubmitted: false,
  });

  const validate = () => {
    let formIsValid = true;
    const newErrors: Errors = {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    };

    newErrors.firstName = validateRequiredText(formState.firstName, 'First name', 2);
    newErrors.lastName = validateRequiredText(formState.lastName, 'Last name', 2);
    newErrors.email = validateEmail(formState.email);
    newErrors.message = validateRequiredText(formState.message, 'Message');

    formIsValid = Object.values(newErrors).every((error) => error === '');

    setFormState((prev) => ({
      ...prev,
      errors: newErrors,
    }));

    return formIsValid;
  };

  const updateField = (name: string) => (value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFields = () => {
    setFormState((prev) => ({
      ...prev,
      ...defaultContactFormValues,
    }));

    setSubmitKey((prevKey) => prevKey + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setFormState((prev) => ({ ...prev, isLoading: true }));

      try {
        setFormState((prev) => ({ ...prev, isSubmitted: true }));

        formObserver.setIsUpdate(true, 'success');
        resetFields();
      } catch (error) {
        formObserver.setIsUpdate(true, 'error');
      } finally {
        setFormState((prev) => ({ ...prev, isLoading: false }));
      }

      return;
    }

    formObserver.setIsUpdate(true, 'fail');
  };

  return {
    formState,
    handleSubmit,
    submitKey,
    updateField,
  };
};
