import React from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@components/Icons';
import { usePortal } from '@components/utilities';

import * as styles from './style.scss';
import { ModalProps } from './types';

export const Modal = ({ children, isOpen = false, onClose, ...props }: ModalProps) => {
  const portalRoot = usePortal();

  const handleClose = () => {
    onClose();
  };

  if (!isOpen || !portalRoot) return null;

  return createPortal(
    <div className={styles.modal} {...props}>
      <div className={styles.modalBody}>
        {children}
        <button type="button" className={styles.button} onClick={handleClose}>
          <CloseIcon /> Close
        </button>
      </div>
    </div>,
    portalRoot
  );
};
