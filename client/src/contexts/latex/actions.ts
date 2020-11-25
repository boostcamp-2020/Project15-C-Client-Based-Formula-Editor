export const EDIT_LATEX = 'latex/EDIT' as const;

export const editLatex = (latex: string) => ({
  type: EDIT_LATEX,
  payload: latex,
});
