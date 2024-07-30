import React, { useState, KeyboardEvent } from 'react';

import * as styles from './style.scss';

export const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const switcherStatusStyle = isOn ? styles.on : styles.off;

  const toggleSwitch = () => {
    setIsOn(!isOn);
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
      aria-checked={isOn}
      tabIndex={0}
      aria-label="Toggle theme switch"
    >
      <div className={styles.switch}>
        <div className={styles.circle} />
      </div>
    </div>
  );
};
