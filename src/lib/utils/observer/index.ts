import { Observer, Subject } from './types';

export class FormObserver implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(message: string) {
    this.observers.forEach((observer) => observer.update(message));
  }

  setIsUpdate(isUpdated: boolean, message: string) {
    if (isUpdated) {
      this.notify(message);
    }
  }
}
