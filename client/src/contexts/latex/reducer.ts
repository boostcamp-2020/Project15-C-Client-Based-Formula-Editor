import { LatexAction, LatexState } from './types';
import { EDIT_LATEX } from './actions';

const initialState: LatexState = {
  currentTab: 0,
  totalLatex: [
    {
      id: 0,
      latex: '',
    },
  ],
};

function reducer(state: LatexState = initialState, action: LatexAction): LatexState {
  switch (action.type) {
    case EDIT_LATEX: {
      return {
        ...state,
        totalLatex: state.totalLatex.map((latexItem) =>
          latexItem.id === state.currentTab ? { ...latexItem, latex: action.payload } : latexItem
        ),
      };
    }
    default:
      return state;
  }
}

export default reducer;
