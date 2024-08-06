import React from 'react';

import { Form, Input, Modal } from '@components/common';
import { PortalProvider, withFormObserver } from '@components/utilities';
import { MessageStatus, ObserverUpdateFunctions } from '@components/utilities/FormObserver/types';
import {
  errorCurrencyFormSubmitToast,
  inProgressCurrencyFormSubmitToast,
  successCurrencyFormSubmitToast,
} from '@lib/utils/toasts';

import * as styles from './styles.scss';
import { CurrencyFormFields, CurrencyFormProps, CurrencyFormState } from './types';

const defaultCurrencyValues = { closePrice: 0, date: new Date(), highPrice: 0, lowPrice: 0, openPrice: 0 };

const customToastFunctions: ObserverUpdateFunctions = {
  [MessageStatus.Error]: errorCurrencyFormSubmitToast,
  [MessageStatus.Fail]: inProgressCurrencyFormSubmitToast,
  [MessageStatus.Success]: successCurrencyFormSubmitToast,
};

const CurrencyFormInputs = [
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

const CHART_CAPACITY = 30;

class CurrencyFormComponent extends React.Component<CurrencyFormProps, CurrencyFormState> {
  constructor(props: CurrencyFormProps) {
    super(props);
    this.state = {
      isModalOpen: props.isOpen,
      values: defaultCurrencyValues,
    };
  }

  componentDidUpdate(prevProps: CurrencyFormProps) {
    const { isOpen } = this.props;

    if (prevProps.isOpen !== isOpen) {
      this.setState({ isModalOpen: isOpen });
    }
  }

  handleResetFields = () => {
    this.setState({ values: defaultCurrencyValues });
  };

  handleInputChange = (field: string) => (value: string) => {
    let newValue;
    newValue = field === 'date' ? new Date(value) : (newValue = parseFloat(value));

    if (Number.isNaN(newValue)) newValue = 0;

    this.setState((prev) => ({
      values: {
        ...prev.values,
        [field]: newValue,
      },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { formObserver, historyLength, onSubmit } = this.props;

    if (historyLength === CHART_CAPACITY) {
      formObserver.setIsUpdate(true, MessageStatus.Error);

      return;
    }

    const { values } = this.state;
    onSubmit({ ...values, date: new Date(values.date) });
    this.handleResetFields();

    if (historyLength === CHART_CAPACITY - 1) {
      formObserver.setIsUpdate(true, MessageStatus.Success);

      return;
    }

    formObserver.setIsUpdate(true, MessageStatus.Fail);
  };

  closeModal = () => {
    const { onClose } = this.props;
    onClose();

    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen, values } = this.state;
    const { currency } = this.props;

    return (
      <PortalProvider>
        <Modal isOpen={isModalOpen} onClose={this.closeModal} className={styles.modal}>
          <Form onSubmit={this.handleSubmit}>
            Current currency: ${currency}
            <div>
              {CurrencyFormInputs.map((input) => (
                <Input
                  key={input.name}
                  defaultValue={
                    input.type === 'date'
                      ? values[input.name as keyof CurrencyFormFields].toString()
                      : values[input.name as keyof CurrencyFormFields].toLocaleString()
                  }
                  type={input.type || 'number'}
                  placeholder={input.placeholder}
                  label={input.label}
                  name={input.name}
                  onChange={this.handleInputChange(input.name)}
                />
              ))}
            </div>
          </Form>
        </Modal>
      </PortalProvider>
    );
  }
}

export const CurrencyForm = withFormObserver({
  WrappedComponent: CurrencyFormComponent,
  observerUpdateFunctions: customToastFunctions,
});
