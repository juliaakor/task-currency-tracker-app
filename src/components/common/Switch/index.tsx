import React, { useState, KeyboardEvent } from 'react';

import * as styles from './style.scss';

export const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSwitch();
      event.preventDefault();
    }
  };

  return (
    <div
      className={`${styles.themeSwitcher} ${isOn ? styles.on : styles.off}`}
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
