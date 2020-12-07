import { userLogin } from './actions';

export type UserAction =
  ReturnType<typeof userLogin>

export interface UserState {
  userId : number;
  favoriteLists: FavoriteList[]
}

export interface FavoriteList {
  id : number;
  latex : string;
  title : string;
}
