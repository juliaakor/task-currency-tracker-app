import React from 'react';

import { BankMap, ElasticSearch } from '@components/common';

import * as styles from './style.scss';
import { BankCardState } from './types';

export class BankCard extends React.Component<Record<string, never>, BankCardState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      selectedCurrency: null,
    };
  }

  handleCurrencySelect = (currencyCode: string) => {
    this.setState({ selectedCurrency: currencyCode });
  };

  render() {
    const { selectedCurrency } = this.state;

    return (
      <div className={styles.bankCardContainer}>
        <h3 className={styles.heading}>Search currency in the bank</h3>
        <ElasticSearch onCurrencySelect={this.handleCurrencySelect} />
        <BankMap selectedCurrency={selectedCurrency} />
      </div>
    );
  }
}
