import { openModal, closeModal } from './actions';

export interface ModalState {
  isOpen: boolean;
}

export type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;
