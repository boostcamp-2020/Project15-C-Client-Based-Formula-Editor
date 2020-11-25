import { LatexAction, LatexState } from './types';
import { EDIT_LATEX, INIT_LATEX } from './actions';

const initialState: LatexState = {
  currentTab: 0,
  totalLatex: [
    {
      id: 0,
      latex: '',
    },
  ],
  mathfield: '',
};

function reducer(state: LatexState = initialState, action: LatexAction): LatexState {
  switch (action.type) {
    case INIT_LATEX: {
      return { ...state, mathfield: action.payload };
    }
    case EDIT_LATEX: {
      return {
        ...state,
        totalLatex: state.totalLatex.map((latexItem) => {
          return latexItem.id === state.currentTab
            ? { ...latexItem, latex: action.payload }
            : latexItem;
        }),
      };
    }
    default:
      return state;
  }
}

export default reducer;
