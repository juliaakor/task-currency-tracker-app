import React, { useEffect, useRef, ComponentType } from 'react';

import { FormObserver } from '@lib/utils/observer';
import { errorToast, failFormSubmitToast, successFormSubmitToast } from '@lib/utils/toasts';

export const withFormObserver = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithFormObserver = (props: Omit<P, 'formObserver'>) => {
    const formObserverRef = useRef(new FormObserver());

    useEffect(() => {
      const formObserver = formObserverRef.current;

      const observer = {
        update: (message: string) => {
          if (message === 'success') {
            successFormSubmitToast();
          } else if (message === 'fail') {
            failFormSubmitToast();
          } else if (message === 'error') {
            errorToast();
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
