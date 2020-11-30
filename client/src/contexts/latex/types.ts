import { MathField } from 'boost-mathquill';
import { addTab, changeTab, editLatex, removeTab, changeFontSize } from './actions';
import { initLatex } from './actions';

export interface TabInfo {
  id: number;
  latex: string;
  fontSize: string;
  fontColor: string;
  textAlign: string;
}

export type LatexAction =
  | ReturnType<typeof editLatex>
  | ReturnType<typeof initLatex>
  | ReturnType<typeof addTab>
  | ReturnType<typeof changeTab>
  | ReturnType<typeof removeTab>
  | ReturnType<typeof changeFontSize>;

export interface LatexState {
  maxId: number;
  currentTab: number;
  totalLatex: TabInfo[];
  mathfield: MathField | null;
}
