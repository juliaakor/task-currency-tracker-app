import React from 'react';

import { Form, Input, Modal } from '@components/common';
import { PortalProvider, withFormObserver } from '@components/utilities';
import { MessageStatus } from '@components/utilities/FormObserver/types';
import {
  errorCurrencyFormSubmitToast,
  inProgressCurrencyFormSubmitToast,
  successCurrencyFormSubmitToast,
} from '@lib/utils/toasts';

import * as styles from './styles.scss';
import { CurrencyFormProps, CurrencyFormState } from './types';

const defaultCurrencyValues = { closePrice: 0, date: new Date(), highPrice: 0, lowPrice: 0, openPrice: 0 };

const customObserver = {
  update: (message: string) => {
    if (message === MessageStatus.success) {
      successCurrencyFormSubmitToast();
    } else if (message === MessageStatus.fail) {
      inProgressCurrencyFormSubmitToast();
    } else if (message === MessageStatus.error) {
      errorCurrencyFormSubmitToast();
    }
  },
};

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

    if (historyLength === 30) {
      formObserver.setIsUpdate(true, MessageStatus.error);

      return;
    }

    const { values } = this.state;
    onSubmit({ ...values, date: new Date(values.date) });
    this.handleResetFields();

    if (historyLength === 29) {
      formObserver.setIsUpdate(true, MessageStatus.success);

      return;
    }

    formObserver.setIsUpdate(true, MessageStatus.fail);
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
              <Input
                defaultValue={values.date.toString()}
                type="date"
                placeholder="Enter date"
                label="Date"
                name="date"
                onChange={this.handleInputChange('date')}
              />
              <Input
                defaultValue={values.openPrice.toLocaleString()}
                type="number"
                placeholder="Enter open price"
                label="Open Price"
                name="openPrice"
                onChange={this.handleInputChange('openPrice')}
              />
              <Input
                defaultValue={values.closePrice.toLocaleString()}
                type="number"
                placeholder="Enter close price"
                label="Close Price"
                name="closePrice"
                onChange={this.handleInputChange('closePrice')}
              />
              <Input
                defaultValue={values.highPrice.toLocaleString()}
                type="number"
                placeholder="Enter high price"
                label="High Price"
                name="highPrice"
                onChange={this.handleInputChange('highPrice')}
              />
              <Input
                defaultValue={values.lowPrice.toLocaleString()}
                type="number"
                placeholder="Enter low price"
                label="Low Price"
                name="lowPrice"
                onChange={this.handleInputChange('lowPrice')}
              />
            </div>
          </Form>
        </Modal>
      </PortalProvider>
    );
  }
}

export const CurrencyForm = withFormObserver({ WrappedComponent: CurrencyFormComponent, customObserver });
