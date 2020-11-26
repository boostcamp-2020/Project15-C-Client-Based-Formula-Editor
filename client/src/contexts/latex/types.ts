import { MathField } from 'boost-mathquill';
import { addTab, changeTab, editLatex, removeTab } from './actions';
import { initLatex } from './actions';

export interface TabInfo {
  id: number;
  latex: string;
  fontSize: number;
  fontColor: string;
  textAlign: string;
}

export type LatexAction =
  | ReturnType<typeof editLatex>
  | ReturnType<typeof initLatex>
  | ReturnType<typeof addTab>
  | ReturnType<typeof changeTab>
  | ReturnType<typeof removeTab>;

export interface LatexState {
  maxId: number;
  currentTab: number;
  totalLatex: TabInfo[];
  mathfield: MathField | null;
}
