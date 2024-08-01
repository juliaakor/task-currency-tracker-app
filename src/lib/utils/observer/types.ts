export interface Observer {
  update(message: string): void;
}

export interface Subject {
  addObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notify(message: string): void;
}
