import { useDispatch } from 'react-redux';
import { closeModal } from '@contexts/modal';

const useFavoriteModal = () => {
  const dispatch = useDispatch();

  const onClickModalClosed = () => {
    dispatch(closeModal());
  };

  const onClickRegister = () => {};

  return {
    onClickModalClosed,
    onClickRegister,
  };
};

export default useFavoriteModal;
