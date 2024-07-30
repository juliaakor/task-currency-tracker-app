import React from 'react';

import * as styles from './style.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      {[1, 2, 3, 4].map((val) => (
        <div key={val} />
      ))}
    </div>
  );
};
