import React, { Component } from 'react';

import { DropdownOption } from '@components/common/DropdownOption';
import { CurrencyOption } from '@components/common/DropdownOption/types';
import { ArrowDownIcon } from '@components/Icons';

import * as styles from './styles.scss';
import { CurrencyDropdownProps, CurrencyDropdownState } from './types';

const findSelected = (options: CurrencyOption[], defaultOption: string) =>
  options.find((val) => val.code === defaultOption)?.label || '';

export class CurrencyDropdown extends Component<CurrencyDropdownProps, CurrencyDropdownState> {
  constructor(props: CurrencyDropdownProps) {
    super(props);

    this.state = {
      isOpen: false,
      options: props.options,
      selectedOption: findSelected(props.options, props.defaultOption),
    };
  }

  toggleDropdown = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  handleOptionClick = (currencyCode: string) => {
    const { onCurrencySelect } = this.props;
    const { options } = this.state;

    onCurrencySelect(currencyCode);

    this.setState({ isOpen: false, selectedOption: findSelected(options, currencyCode) });
  };

  handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    this.toggleDropdown();
  };

  render() {
    const { isOpen, options, selectedOption } = this.state;

    return (
      <div className={styles.dropdown}>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={this.handleKeyDown}
          className={styles.dropdownHeader}
          onClick={this.toggleDropdown}
        >
          {selectedOption}
          <span className={`${styles.dropdownIcon} ${isOpen ? styles.open : ''}`}>
            <ArrowDownIcon height={10} width={20} />
          </span>
        </div>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            {options.map((option) => (
              <DropdownOption
                key={option.code}
                option={option}
                selected={option.label === selectedOption}
                onOptionClick={this.handleOptionClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
