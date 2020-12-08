import { ThunkAction } from 'redux-thunk';
import { RootState } from '@contexts/index';
import { UserAction } from './types';
import { getFavoritesRequest, getFavoritesSuccess, getFavoritesFailure } from './actions';
import favoriteAPI from '@lib/apis/favorite';

export function getFavoritesThunk(userId: number): ThunkAction<void, RootState, null, UserAction> {
  return async (dispatch) => {
    dispatch(getFavoritesRequest(userId));
    try {
      const favoriteLists = await favoriteAPI.getFavorites(userId);
      dispatch(
        getFavoritesSuccess({
          userId,
          favoriteLists: favoriteLists.favorites,
        })
      );
    } catch (error) {
      dispatch(getFavoritesFailure(error));
    }
  };
}
