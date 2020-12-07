import { UserAction, UserState } from './types';
import { USER_LOGIN } from './actions';

const initialState: UserState = {
    userId: 0
};
  
function reducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
      case USER_LOGIN: {
        return {
          ...state,
          userId: action.payload,
        };
      }
      default:
        return state;
    }
}
export default reducer;