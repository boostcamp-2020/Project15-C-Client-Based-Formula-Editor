import { Action } from 'redux';

export function createAction<T, P>(type: T): (payload: P) => Action<T> & { payload: P };
export function createAction<T>(type: T): () => Action<T>;
export function createAction<T, P>(type: T) {
  return (payload?: P) => {
    return {
      type,
      payload,
    };
  };
}
