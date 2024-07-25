import React from 'react';
import { NavLink } from 'react-router-dom';

import { LogoIcon } from '@components/Icons';
import { FOOTER_ROUTES } from '@constants/routes';

import * as styles from './style.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.companyInfo}>
        <h3 className={styles.heading}>
          <LogoIcon />
          Modsen Currency Tracker
        </h3>
        <p className={styles.infoParagraph}>
          Since then, the company has grown organically to. Starsup is the world&apos;s largest trading platform, with
          $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders
          worldwide.
        </p>
      </div>
      <div className={styles.footerNav}>
        {FOOTER_ROUTES.map(({ label, section }) => (
          <ul key={label}>
            <li className={styles.linkSection}>{label}</li>
            {section.map(({ link, linkLabel }) => (
              <NavLink to={link} key={linkLabel}>
                <li className={styles.link}>{linkLabel}</li>
              </NavLink>
            ))}
          </ul>
        ))}
      </div>
      <span className={styles.copyright}>Startsup © 2023-2024, All Rights Reserved</span>
    </footer>
  );
};
