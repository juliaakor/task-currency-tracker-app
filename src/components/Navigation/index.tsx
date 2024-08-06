import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LogoIcon } from '@assets/index';
import { Switch, NavItem } from '@components/common';
import { ThemeContext } from '@components/utilities';
import { NAV_ROUTES, ROUTES } from '@constants/routes';

import * as styles from './style.scss';

export const Navigation = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <NavLink to={ROUTES.HOME}>
        <LogoIcon />
      </NavLink>
      <div className={styles.navItems}>
        {NAV_ROUTES.map(([name, link]) => (
          <NavItem key={name} label={name} href={link} />
        ))}
      </div>
      <Switch onToggle={toggleTheme} />
    </nav>
  );
};
