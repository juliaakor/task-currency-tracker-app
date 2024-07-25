import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './style.scss';

interface NavItemProps {
  href: string;
  label: string;
}

export const NavItem = ({ href, label, ...props }: NavItemProps) => {
  return (
    <NavLink to={href} {...props}>
      <li className={styles.navItem}>{label}</li>
    </NavLink>
  );
};
