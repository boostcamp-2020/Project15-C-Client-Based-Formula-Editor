import { MathField } from 'react-mathquill';
import { editLatex } from './actions';
import { initLatex } from './actions';

export interface TabInfo {
  id: number;
  latex: string;
}

export type LatexAction = ReturnType<typeof editLatex> | ReturnType<typeof initLatex>;

export interface LatexState {
  currentTab: number;
  totalLatex: TabInfo[];
  mathfield: MathField | string;
}
