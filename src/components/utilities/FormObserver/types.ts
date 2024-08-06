export enum MessageStatus {
  Success = 'success',
  Fail = 'fail',
  Error = 'error',
}

export interface ObserverUpdateFunctions {
  [key: string]: () => void;
}

export interface Observer {
  update: (message: string) => void;
}

export interface FormObserverProps<P> {
  WrappedComponent: React.ComponentType<P>;
  observerUpdateFunctions?: ObserverUpdateFunctions;
}
