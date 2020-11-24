import { addLatex } from './actions';

export type LatexAction = ReturnType<typeof addLatex>;
export interface LatexState {
  totalLatex: string;
}
