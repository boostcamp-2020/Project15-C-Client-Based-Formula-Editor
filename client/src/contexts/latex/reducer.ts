import { LatexAction, LatexState } from './types';
import { ADD_LATEX } from './actions';

const initialState: LatexState = {
  totalLatex: '',
};

function reducer(state: LatexState = initialState, action: LatexAction): LatexState {
  switch (action.type) {
    case ADD_LATEX: {
      return { totalLatex: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
