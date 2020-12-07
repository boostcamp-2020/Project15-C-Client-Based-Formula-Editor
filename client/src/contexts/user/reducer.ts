import { UserAction, UserState } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_FAVORITES, GET_FAVORITES_SUCCESS, GET_FAVORITES_ERROR } from './actions';
const initialState: UserState = {
  UserFavorites:{
    loading: false,
    error:  null,
    data : {
      userId: 0,
      favoriteLists: null
    }
  }
};
  
const reducer = createReducer<UserState, UserAction>(initialState, {
  [GET_FAVORITES]: state => ({
    ...state,
    UserFavorites: {
      loading: true,
      error: null,
      data: null
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
      data: null
    }
  })
});

export default reducer;