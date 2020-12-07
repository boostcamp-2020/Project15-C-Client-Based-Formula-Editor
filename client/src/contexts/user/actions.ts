import { createAction } from '@utils/util';
import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { UserDataType } from './types';
export const USER_LOGIN = 'user/LOGIN';
export const GET_FAVORITES = 'favorites/init';
export const GET_FAVORITES_SUCCESS = 'favorites/success';
export const GET_FAVORITES_ERROR = 'favorites/error';
export const DELETE_FAVORITES = 'favorites/delete';

export const userLogin = createAction<typeof USER_LOGIN, number>(USER_LOGIN);
export const deleteFavorites = createAction<typeof DELETE_FAVORITES, number>(DELETE_FAVORITES);
export const getFavoritesAsync = createAsyncAction(
    GET_FAVORITES,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_ERROR
  )<undefined, UserDataType, AxiosError>();