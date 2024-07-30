import React from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@components/Icons';
import { OutsideClickProvider, usePortal } from '@components/utilities';

import * as styles from './style.scss';
import { ModalProps } from './types';

export const Modal = ({ children, isOpen = false, onClose, ...props }: ModalProps) => {
  const portalRoot = usePortal();

  if (!isOpen || !portalRoot) return null;

  return createPortal(
    <div className={styles.modal} {...props}>
      <OutsideClickProvider onOutsideClick={onClose} className={styles.modalContent}>
        <div className={styles.modalBody}>
          {children}
          <button type="button" className={styles.button} onClick={onClose}>
            <CloseIcon /> Close
          </button>
        </div>
      </OutsideClickProvider>
    </div>,
    portalRoot
  );
};
