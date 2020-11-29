import { LatexAction, LatexState } from './types';
import { EDIT_LATEX, INIT_LATEX, ADD_TAB, CHANGE_TAB, REMOVE_TAB } from './actions';

const initialState: LatexState = {
  maxId: 0,
  currentTab: 0,
  totalLatex: [
    {
      id: 0,
      latex: '',
      fontSize: 11,
      fontColor: 'black',
      textAlign: 'left',
    },
  ],
  mathfield: null,
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

    case ADD_TAB: {
      const nextId = state.maxId + 1;

      return {
        ...state,
        maxId: nextId,
        currentTab: nextId,
        totalLatex: [
          ...state.totalLatex,
          {
            id: nextId,
            latex: '',
            fontSize: 11,
            fontColor: 'black',
            textAlign: 'left',
          },
        ],
      };
    }

    case REMOVE_TAB: {
      const isLengthOne = state.totalLatex.length === 1;
      // 길이가 1개였을 때 삭제하면 초기화.
      if (isLengthOne) {
        const nextId = state.maxId + 1;
        return {
          ...state,
          maxId: nextId,
          currentTab: nextId,
          totalLatex: [
            {
              id: nextId,
              latex: '',
              fontSize: 11,
              fontColor: 'black',
              textAlign: 'left',
            },
          ],
        };
      }

      const currnetIndex = state.totalLatex.findIndex((latex) => latex.id === action.payload);
      const isLast = currnetIndex === state.totalLatex.length - 1;

      if (isLast) {
        return {
          ...state,
          currentTab: state.totalLatex[currnetIndex - 1].id,
          totalLatex: state.totalLatex.filter((latex) => latex.id !== action.payload),
        };
      }

      return {
        ...state,
        currentTab: state.totalLatex[currnetIndex + 1].id,
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
