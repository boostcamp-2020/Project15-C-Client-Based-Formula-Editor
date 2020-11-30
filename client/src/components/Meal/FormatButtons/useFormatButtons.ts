import { useDispatch } from 'react-redux';
import { changeTextAlign, clearLatex } from '@contexts/latex';
import useToggle from '@hooks/useToggle';

const useFormatButtons = () => {
  const dispatch = useDispatch();
  const [sizeMenu, toggleSizeMenu] = useToggle(false);

  const alignHandler = (direction: string): void => {
    dispatch(changeTextAlign(direction));
  };
  const clearHandler = (): void => {
    dispatch(clearLatex());
  };

  return {
    sizeMenu,
    toggleSizeMenu,
    alignHandler,
    clearHandler,
  };
};

export default useFormatButtons;
