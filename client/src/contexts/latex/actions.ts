export const ADD_LATEX = 'latex/ADD' as const;

export const addLatex = (latex: string) => ({
  type: ADD_LATEX,
  payload: latex,
});
