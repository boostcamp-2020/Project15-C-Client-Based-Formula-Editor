import { Action } from 'redux';
import React from 'react';
import { API } from '@apis/common';
import { getToken } from './token';
import { userLogin } from '@contexts/user';
import { useDispatch } from 'react-redux';

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

export function getImageURL(imageUrl: string | undefined) {
  return process.env.NODE_ENV === 'development'
    ? imageUrl && `./image/${imageUrl}`
    : imageUrl && chrome.extension.getURL(`image/${imageUrl}`);
}

export async function checkLogin() {
  const dispatch = useDispatch();
  const token = await getToken();
  if (!token) return;
  const response = await API.post('/auth/autologin', '', {
    headers: {
      Authorization: token,
    },
  });

  const { userId } = response.data.results;
  dispatch(userLogin(userId));
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
