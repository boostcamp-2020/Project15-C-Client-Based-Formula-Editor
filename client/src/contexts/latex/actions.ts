import { MathField } from 'react-mathquill';

export const EDIT_LATEX = 'latex/EDIT' as const;
export const INIT_LATEX = 'latex/INIT' as const;

export const editLatex = (latex: string) => ({
  type: EDIT_LATEX,
  payload: latex,
});
export const initLatex = (mathfield: MathField) => ({
  type: INIT_LATEX,
  payload: mathfield,
});
