import { editLatex } from './actions';

export interface TabInfo {
  id: number;
  latex: string;
}

export type LatexAction = ReturnType<typeof editLatex>;

export interface LatexState {
  currentTab: number;
  totalLatex: TabInfo[];
}
