import React from 'react';

import { Form, Input, Textarea } from '@components/common';
import { withFormObserver } from '@components/utilities';
import { useContactForm } from '@hooks/index';

import * as styles from './style.scss';
import { ContactFormProps } from './types';

const ContactForm = ({ formObserver }: ContactFormProps) => {
  const { formState, handleSubmit, submitKey, updateField } = useContactForm(formObserver);

  const handleFieldChange = (name: string) => (value: string) => {
    updateField(name)(value);
  };

  return (
    <div className={styles.contactForm}>
      <h3 className={styles.heading}>Contact us</h3>
      <Form onSubmit={handleSubmit} key={submitKey}>
        <Input
          type="text"
          name="firstName"
          label="First Name"
          defaultValue={formState.firstName}
          onChange={handleFieldChange('firstName')}
          error={formState.errors.firstName}
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name"
          defaultValue={formState.lastName}
          onChange={handleFieldChange('lastName')}
          error={formState.errors.lastName}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          defaultValue={formState.email}
          onChange={handleFieldChange('email')}
          error={formState.errors.email}
        />
        <Textarea
          name="message"
          label="Message"
          value={formState.message}
          onChange={handleFieldChange('message')}
          error={formState.errors.message}
        />
      </Form>
    </div>
  );
};

export const ContactFormWithObserver = withFormObserver(ContactForm);
