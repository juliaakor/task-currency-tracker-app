export enum MessageStatus {
  success = 'success',
  fail = 'fail',
  error = 'error',
}

export interface Observer {
  update: (message: string) => void;
}

export interface FormObserverProps<P> {
  WrappedComponent: React.ComponentType<P>;
  customObserver?: Observer;
}
