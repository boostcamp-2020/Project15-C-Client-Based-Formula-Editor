import { UserAction, UserState } from './types';
import {
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAILURE,
  DELETE_FAVORITES,
} from './actions';

const initialState: UserState = {
  loading: false,
  error: null,
  userInfo: {
    userId: null,
    favoriteLists: [],
  },
};

function reducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case GET_FAVORITES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: action.payload,
      };
    case GET_FAVORITES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: {
          userId: action.payload,
          favoriteLists: [
            ...state.userInfo.favoriteLists.filter((favorite) => favorite.id !== action.payload),
          ],
        },
      };
    default:
      return state;
  }
}

export default reducer;
