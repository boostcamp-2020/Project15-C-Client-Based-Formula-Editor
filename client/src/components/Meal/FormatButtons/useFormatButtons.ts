import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';
import { observer } from '@utils/util';
import useToggle from '@hooks/useToggle';

const useFormatButtons = () => {
  const dispatch = useDispatch();
  const [sizeMenu, toggleSizeMenu, setSizeMenu] = useToggle(false);
  const [colorMenu, toggleColorMenu, setColorMenu] = useToggle(false);
  const sizeRef = useRef<HTMLDivElement | null>(null);
  const colorRef = useRef<HTMLDivElement | null>(null);

  const alignHandler = useCallback((direction: string): void => {
    dispatch(editLatex({ textAlign: direction }));
  }, []);

  const clearHandler = useCallback((): void => {
    dispatch(editLatex({ latex: '' }));
  }, []);

  const hiddenSizeMenu = useCallback((target: HTMLElement) => {
    if (target.closest('div') !== sizeRef.current) {
      setSizeMenu(false);
    }
  }, []);

  const hiddenColorMenu = useCallback((target: HTMLElement) => {
    if (target.closest('div') !== sizeRef.current) {
      setColorMenu(false);
    }
  }, []);

  useEffect(() => {
    observer.subscribe(hiddenSizeMenu);
    observer.subscribe(hiddenColorMenu);
  }, []);

  return {
    sizeRef,
    colorRef,
    sizeMenu,
    toggleSizeMenu,
    alignHandler,
    clearHandler,
  };
};

export default useFormatButtons;
