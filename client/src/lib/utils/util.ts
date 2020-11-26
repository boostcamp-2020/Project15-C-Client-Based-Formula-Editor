export function createAction<T, P>(type: T): (payload: P) => { type: T; payload: P };
export function createAction<T>(type: T): () => { type: T };
export function createAction<T, P>(type: T) {
  return (payload?: P) => {
    return {
      type,
      payload,
    };
  };
}
