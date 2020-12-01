import { Action } from 'redux';
import React from 'react';
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

function closer() {
  const subscriber: any[] = [];
  const subscribe = (callback: any) => {
    subscriber.push(callback);
  };
  const onClick = (e: React.MouseEvent) => {
    subscriber.forEach((fn) => fn(e.target));
  };

  return {
    subscribe,
    onClick,
  };
}

export default closer();
