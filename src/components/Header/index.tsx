import React from 'react';

import { LogoIcon } from '@assets/index';

import * as styles from './style.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.infoContainer}>
        <h1 className={styles.heading}>
          <span className={styles.headingHighlight}>Modsen Currency</span> Tracker
        </h1>
        <p className={styles.infoParagraph}>Quotes for the dollar and other international currencies.</p>
      </div>
      <LogoIcon />
    </header>
  );
};
