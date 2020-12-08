import { createAction } from '@utils/util';
import { AxiosError } from 'axios';
import { UserDataType, FavoriteItem } from './types';

export const USER_LOGIN = 'user/LOGIN';
export const USER_LOGOUT = 'user/LOGOUT';
export const GET_FAVORITES_REQUEST = 'favorites/request';
export const GET_FAVORITES_SUCCESS = 'favorites/success';
export const GET_FAVORITES_FAILURE = 'favorites/failure';
export const CREATE_FAVORITES = 'favorites/create';
export const DELETE_FAVORITES = 'favorites/delete';

export const userLogin = createAction<typeof USER_LOGIN, number>(USER_LOGIN);
export const userLogout = createAction<typeof USER_LOGOUT>(USER_LOGOUT);
export const createFavorites = createAction<typeof CREATE_FAVORITES, FavoriteItem>(
  CREATE_FAVORITES
);
export const deleteFavorites = createAction<typeof DELETE_FAVORITES, number>(DELETE_FAVORITES);
export const getFavoritesRequest = createAction<typeof GET_FAVORITES_REQUEST, number>(
  GET_FAVORITES_REQUEST
);
export const getFavoritesSuccess = createAction<typeof GET_FAVORITES_SUCCESS, UserDataType>(
  GET_FAVORITES_SUCCESS
);
export const getFavoritesFailure = createAction<typeof GET_FAVORITES_FAILURE, AxiosError>(
  GET_FAVORITES_FAILURE
);
