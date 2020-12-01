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

function observe() {
  const subscriber = new Set<any>();
  const subscribe = (callback: any) => {
    subscriber.add(callback);
  };
  const notify = (e: React.MouseEvent) => {
    subscriber.forEach((fn) => fn(e.target));
  };

  return {
    subscribe,
    notify,
  };
}

export const observer = observe();
