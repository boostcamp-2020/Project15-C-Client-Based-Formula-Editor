import { TabInfo, LatexAction, LatexState } from './types';
import { EDIT_LATEX, INIT_LATEX, ADD_TAB, CHANGE_TAB, REMOVE_TAB } from './actions';

const initTotalLatex = (id: number): TabInfo => {
  return {
    id,
    latex: '',
    fontSize: '20',
    fontColor: '#000000',
    textAlign: 'left',
  };
};

const initialState: LatexState = {
  maxId: 0,
  currentTab: 0,
  totalLatex: [initTotalLatex(0)],
  mathfield: null,
  mathfieldRef: null,
};

function reducer(state: LatexState = initialState, action: LatexAction): LatexState {
  switch (action.type) {
    case INIT_LATEX: {
      return {
        ...state,
        mathfield: action.payload.mathfield,
        mathfieldRef: action.payload.mathfieldRef,
      };
    }

    case EDIT_LATEX: {
      return {
        ...state,
        totalLatex: state.totalLatex.map((latexItem) => {
          return latexItem.id === state.currentTab
            ? { ...latexItem, ...action.payload }
            : latexItem;
        }),
      };
    }
    case ADD_TAB: {
      const nextId = state.maxId + 1;

      return {
        ...state,
        maxId: nextId,
        currentTab: nextId,
        totalLatex: [...state.totalLatex, initTotalLatex(nextId)],
      };
    }

    case REMOVE_TAB: {
      const isLengthOne: boolean = state.totalLatex.length === 1;
      // 길이가 1개였을 때 삭제하면 초기화.
      if (isLengthOne) {
        const nextId: number = state.maxId + 1;
        return {
          ...state,
          maxId: nextId,
          currentTab: nextId,
          totalLatex: [initTotalLatex(nextId)],
        };
      }

      const currnetIndex: number = state.totalLatex.findIndex(
        (latex) => latex.id === action.payload
      );
      const isLastIndex: boolean = currnetIndex === state.totalLatex.length - 1;
      return {
        ...state,
        currentTab: state.totalLatex[isLastIndex ? currnetIndex - 1 : currnetIndex + 1].id,
        totalLatex: state.totalLatex.filter((latex) => latex.id !== action.payload),
      };
    }

    case CHANGE_TAB: {
      return {
        ...state,
        currentTab: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
