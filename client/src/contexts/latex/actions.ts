import { createAction } from '@utils/util';
import { EditTabInfo, InitLatex } from './types';

export const EDIT_LATEX = 'latex/EDIT';
export const INIT_LATEX = 'latex/INIT';
export const ADD_TAB = 'tab/ADD';
export const REMOVE_TAB = 'tab/REMOVE';
export const CHANGE_TAB = 'tab/CHANGE';

export const editLatex = createAction<typeof EDIT_LATEX, EditTabInfo>(EDIT_LATEX);
export const initLatex = createAction<typeof INIT_LATEX, InitLatex>(INIT_LATEX);
export const addTab = createAction<typeof ADD_TAB>(ADD_TAB);
export const removeTab = createAction<typeof REMOVE_TAB, number>(REMOVE_TAB);
export const changeTab = createAction<typeof CHANGE_TAB, number>(CHANGE_TAB);
