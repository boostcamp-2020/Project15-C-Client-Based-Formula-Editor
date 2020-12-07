import { OPEN_MODAL, CLOSE_MODAL } from './actions';
import { ModalState, ModalAction } from './types';

const initialState: ModalState = {
  isOpen: false,
};

function reducer(state: ModalState = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
      };
    }

    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}

export default reducer;
