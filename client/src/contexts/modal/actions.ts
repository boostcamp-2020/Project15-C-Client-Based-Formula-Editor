import { createAction } from '../../lib/utils/util';

export const OPEN_MODAL = 'modal/OEPN';
export const CLOSE_MODAL = 'modal/CLOSE';

export const openModal = createAction<typeof OPEN_MODAL>(OPEN_MODAL);
export const closeModal = createAction<typeof CLOSE_MODAL>(CLOSE_MODAL);
