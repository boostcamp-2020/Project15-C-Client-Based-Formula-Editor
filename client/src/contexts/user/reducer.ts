import { UserAction, UserState } from './types';
import { USER_LOGIN } from './actions';
import { getFavorites } from '@lib/apis/favorite'
const initialState: UserState = {
    userId: 0,
    favoriteLists: []
};
  
function reducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
      case USER_LOGIN: {
        const userId = action.payload;
        const getFavoriteLists = getFavorites(userId)
        console.log("dd: ", getFavoriteLists)
        return {
          ...state,
          userId: action.payload
        };
      }
      default:
        return state;
    }
}
export default reducer;