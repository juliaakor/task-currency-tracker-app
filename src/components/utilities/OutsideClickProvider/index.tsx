import React, { useRef, useEffect } from 'react';

interface OutsideClickProviderProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const OutsideClickProvider = ({ children, className, onOutsideClick }: OutsideClickProviderProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};
