import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
export type UserAction = ActionType<typeof actions>;

export interface UserDataType {
  userId : number;
  favoriteLists: FavoriteList[] | [];
}

export interface FavoriteList {
  id : number;
  latex : string;
  title : string;
}

export interface UserState {
  UserFavorites:{
    loading: boolean;
    error: Error | null;
    data : UserDataType ;
  }
}