import { UserAction, UserState } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_FAVORITES, GET_FAVORITES_SUCCESS, GET_FAVORITES_ERROR, DELETE_FAVORITES } from './actions';
const initialState: UserState = {
  UserFavorites:{
    loading: false,
    error:  null,
    data : {
      userId: 0,
      favoriteLists: []
    }
  }
};
  
const reducer = createReducer<UserState, UserAction>(initialState, {
  [GET_FAVORITES]: state => ({
    ...state,
    UserFavorites: {
      loading: true,
      error: null,
      data : {
        userId: 0,
        favoriteLists: []
      }
    }
  }),
  [GET_FAVORITES_SUCCESS]: (state, action) => ({
    ...state,
    UserFavorites: {
      loading: false,
      error: null,
      data: {
        userId: action.payload.userId,
        favoriteLists: action.payload.favoriteLists
      }
    }
  }),
  [GET_FAVORITES_ERROR]: (state, action) => ({
    ...state,
    UserFavorites: {
      loading: false,
      error: action.payload,
      data: {
        userId: 0,
        favoriteLists: []
      }
    }
  }),
  [DELETE_FAVORITES]: (state, action) => (
    {
    ...state,
    UserFavorites: {
      loading: false,
      error: null,
      data: {
        userId : action.payload,
        favoriteLists: [...state.UserFavorites.data.favoriteLists.filter(favorite=> favorite.id !== action.payload)]
      }
    }
  }),
});

export default reducer;