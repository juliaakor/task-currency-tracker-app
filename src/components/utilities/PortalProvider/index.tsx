import React, { createContext, useContext, useRef, useEffect } from 'react';

import { PortalProviderProps } from './types';

const PortalContext = createContext<HTMLDivElement | null>(null);

export const PortalProvider = ({ children }: PortalProviderProps) => {
  const portalRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = document.createElement('div');
    portalRootRef.current = div;
    document.body.appendChild(div);

    return () => {
      if (div) document.body.removeChild(div);
    };
  }, []);

  return <PortalContext.Provider value={portalRootRef.current}>{children}</PortalContext.Provider>;
};

export const usePortal = () => {
  return useContext(PortalContext);
};
