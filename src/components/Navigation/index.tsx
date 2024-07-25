import React from 'react';

import { Switch, NavItem } from '@components/common';
import { LogoIcon } from '@components/Icons';
import { NAV_ROUTES } from '@constants/routes';

import * as styles from './style.scss';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <LogoIcon />
      <div className={styles.navItems}>
        {NAV_ROUTES.map(([name, link]) => (
          <NavItem key={name} label={name} href={link} />
        ))}
      </div>
      <Switch />
    </nav>
  );
};
