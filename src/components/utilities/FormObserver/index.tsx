import React, { useEffect, useRef } from 'react';

import { FormObserver } from '@lib/utils/observer';
import { errorToast, failFormSubmitToast, successFormSubmitToast } from '@lib/utils/toasts';

import { FormObserverProps, MessageStatus } from './types';

export const withFormObserver = <P extends object>({ WrappedComponent, customObserver }: FormObserverProps<P>) => {
  const WithFormObserver = (props: Omit<P, 'formObserver'>) => {
    const formObserverRef = useRef(new FormObserver());

    useEffect(() => {
      const formObserver = formObserverRef.current;

      const defaultObserver = (message: string) => {
        if (message === MessageStatus.success) {
          successFormSubmitToast();
        }
        if (message === MessageStatus.fail) {
          failFormSubmitToast();
        }
        if (message === MessageStatus.error) {
          errorToast();
        }
      };

      const observer = {
        update: (message: string) => {
          if (customObserver) {
            customObserver.update(message);
          } else {
            defaultObserver(message);
          }
        },
      };

      formObserver.addObserver(observer);

      return () => {
        formObserver.removeObserver(observer);
      };
    }, []);

    return <WrappedComponent {...(props as P)} formObserver={formObserverRef.current} />;
  };

  WithFormObserver.displayName = `WithFormObserver(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithFormObserver;
};
