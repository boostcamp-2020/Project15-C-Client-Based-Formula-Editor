import { MathField } from 'react-mathquill';

//TODO: 리팩토링 하기
export const EDIT_LATEX = 'latex/EDIT' as const;
export const INIT_LATEX = 'latex/INIT' as const;
export const ADD_TAB = 'tab/ADD' as const;
export const REMOVE_TAB = 'tab/REMOVE' as const;
export const CHANGE_TAB = 'tab/CHANGE' as const;

export const editLatex = (latex: string) => ({
  type: EDIT_LATEX,
  payload: latex,
});

export const initLatex = (mathfield: MathField | null) => ({
  type: INIT_LATEX,
  payload: mathfield,
});

export const addTab = () => ({
  type: ADD_TAB,
});

export const removeTab = (id: number) => ({
  type: REMOVE_TAB,
  payload: id,
});

export const changeTab = (id: number) => ({
  type: CHANGE_TAB,
  payload: id,
});
