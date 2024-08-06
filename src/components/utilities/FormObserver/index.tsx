import React, { useEffect, useRef } from 'react';

import { FormObserver } from '@lib/utils/observer';
import { errorToast, failFormSubmitToast, successFormSubmitToast } from '@lib/utils/toasts';

import { FormObserverProps, MessageStatus, ObserverUpdateFunctions } from './types';

const toastFunctions: ObserverUpdateFunctions = {
  [MessageStatus.Error]: errorToast,
  [MessageStatus.Fail]: failFormSubmitToast,
  [MessageStatus.Success]: successFormSubmitToast,
};

export const withFormObserver = <P extends object>({
  WrappedComponent,
  observerUpdateFunctions,
}: FormObserverProps<P>) => {
  const WithFormObserver = (props: Omit<P, 'formObserver'>) => {
    const formObserverRef = useRef(new FormObserver());

    useEffect(() => {
      const formObserver = formObserverRef.current;

      const handleUpdate = (message: string) => {
        const defaultFunction = toastFunctions[message];
        const customFunction = observerUpdateFunctions?.[message];
        const notifyFromObserver = customFunction || defaultFunction;

        notifyFromObserver();
      };

      const observer = {
        update: handleUpdate,
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
