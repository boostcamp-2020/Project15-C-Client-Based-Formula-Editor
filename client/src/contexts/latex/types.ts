import { MathField } from 'boost-mathquill';
import { addTab, changeTab, editLatex, removeTab, initLatex } from './actions';

export interface EditTabInfo {
  latex?: string;
  fontSize?: string;
  fontColor?: string;
  textAlign?: string;
}
export interface TabInfo {
  id: number;
  latex: string;
  fontSize: string;
  fontColor: string;
  textAlign: string;
}

export interface InitLatex {
  mathfield: MathField | null;
  mathfieldRef: HTMLDivElement | null;
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
  mathfieldRef: HTMLDivElement | null;
}
