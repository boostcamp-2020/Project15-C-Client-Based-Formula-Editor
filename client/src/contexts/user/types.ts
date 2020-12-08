import {
  userLogin,
  userLogout,
  getFavoritesRequest,
  getFavoritesSuccess,
  getFavoritesFailure,
  deleteFavorites,
} from './actions';

export type UserAction =
  | ReturnType<typeof userLogin>
  | ReturnType<typeof userLogout>
  | ReturnType<typeof getFavoritesRequest>
  | ReturnType<typeof getFavoritesSuccess>
  | ReturnType<typeof getFavoritesFailure>
  | ReturnType<typeof deleteFavorites>;

export interface FavoriteList {
  id: number;
  latex: string;
  title: string;
}

export interface UserState {
  loading: boolean;
  error: Error | null;
  userInfo: UserDataType;
}

export interface UserDataType {
  userId: number | null;
  favoriteLists: FavoriteList[];
}
