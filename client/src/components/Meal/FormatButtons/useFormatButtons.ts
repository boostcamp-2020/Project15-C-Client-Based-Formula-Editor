import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';
import useToggle from '@hooks/useToggle';

const useFormatButtons = () => {
  const dispatch = useDispatch();
  const [sizeMenu, toggleSizeMenu, setSizeMenu] = useToggle(false);
  const [colorMenu, toggleColorMenu] = useToggle(false);

  const alignHandler = (direction: string): void => {
    dispatch(editLatex({ textAlign: direction }));
  };

  const clearHandler = (): void => {
    dispatch(editLatex({ latex: '' }));
  };

  return {
    sizeMenu,
    toggleSizeMenu,
    setSizeMenu,
    colorMenu,
    toggleColorMenu,
    alignHandler,
    clearHandler,
  };
};

export default useFormatButtons;
