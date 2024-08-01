import React from 'react';

import * as styles from './style.scss';
import { OptionProps, OptionState } from './types';

export class DropdownOption extends React.Component<OptionProps, OptionState> {
  constructor(props: OptionProps) {
    super(props);

    this.state = {
      info: '',
    };
  }

  handleClick = () => {
    const { onOptionClick, option } = this.props;
    onOptionClick(option.code);
  };

  render() {
    const { option, selected } = this.props;
    const { info } = this.state;

    return (
      <div
        role="button"
        tabIndex={0}
        className={styles.dropdownItem}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
      >
        <span className={styles.dropdownIcon} data-selected={selected}>
          {option.icon}
        </span>
        <span className={styles.dropdownLabel} data-selected={selected}>
          {option.label}
        </span>
        <div className={styles.dropdownLabelInfo}>{info}</div>
      </div>
    );
  }
}
