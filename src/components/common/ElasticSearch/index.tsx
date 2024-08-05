import React from 'react';

import { DropdownOption } from '@components/common/DropdownOption';
import { CurrencyOption } from '@components/common/DropdownOption/types';
import { Input } from '@components/common/Input';
import { initSelectedOptionState } from '@lib/utils/api';

import * as styles from './style.scss';
import { SearchProps, SearchState } from './types';

export class ElasticSearch extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      isFocused: false,
      options: initSelectedOptionState(),
      value: '',
    };
  }

  handleInputChange = (value: string) => {
    this.setState({ value });
    this.filterOptions(value);
  };

  handleOptionClick = (currencyCode: string) => {
    const { onCurrencySelect } = this.props;
    onCurrencySelect(currencyCode);

    this.setState({ isFocused: false, value: '' });
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ isFocused: false });
    }, 100);
  };

  filterOptions = (query: string) => {
    if (query.length === 0) {
      this.setState({ options: initSelectedOptionState() });

      return;
    }

    const filteredOptions: CurrencyOption[] = initSelectedOptionState().filter((currency) =>
      currency.label.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ options: filteredOptions });
  };

  render() {
    const { isFocused, options, value } = this.state;

    const isDropdownFocused = isFocused && options.length > 0 ? styles.show : '';

    return (
      <div className={styles.elasticSearchContainer}>
        <Input
          type="text"
          defaultValue={value}
          name="search"
          placeholder="Сurrency search..."
          onChange={this.handleInputChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div className={`${styles.dropdownContainer} ${isDropdownFocused}`}>
          {options.map((option) => (
            <DropdownOption key={option.code} option={option} selected={false} onOptionClick={this.handleOptionClick} />
          ))}
        </div>
      </div>
    );
  }
}
