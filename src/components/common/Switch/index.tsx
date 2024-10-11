import React, { KeyboardEvent } from 'react';

import { useAppSelector } from '@store/index';
import { selectIsThemeDark } from '@store/theme';

import * as styles from './style.scss';
import { SwitchProps } from './types';

export const Switch = ({ onToggle }: SwitchProps) => {
  const isThemeDark = useAppSelector(selectIsThemeDark);

  const switcherStatusStyle = isThemeDark ? styles.off : styles.on;

  const toggleSwitch = () => {
    onToggle();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') return;

    toggleSwitch();
    event.preventDefault();
  };

  return (
    <div
      className={`${styles.themeSwitcher} ${switcherStatusStyle}`}
      onClick={toggleSwitch}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isThemeDark}
      tabIndex={0}
      aria-label="Toggle theme switch"
    >
      <div className={styles.switch}>
        <div className={styles.circle} />
      </div>
    </div>
  );
};
