export type Immutable<T> = {
  readonly [P in keyof T]: T[P];
};
