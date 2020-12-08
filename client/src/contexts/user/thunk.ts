import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { UserAction } from './types';
import { getFavorites } from '@lib/apis/favorite';
import { getFavoritesAsync } from './actions';

export function getFavoritesThunk(userId: number): ThunkAction<void, RootState, null, UserAction> {
  return async dispatch => {
    const { request, success, failure } = getFavoritesAsync;
    dispatch(request());
    try {
      const favoriteLists = await getFavorites(userId);
      dispatch(success({
          userId, favoriteLists: favoriteLists.favorites
      }));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}