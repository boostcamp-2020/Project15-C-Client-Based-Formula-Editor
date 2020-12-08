import { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';
import { FONT_SIZE_LISTS } from '@constants/constants';
import { FontSizeListType, FontSizeMenuProps } from './index';

const useFontSizeMenu = ({ toggleSizeMenu }: FontSizeMenuProps) => {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [stateList, setStateList] = useState<FontSizeListType[]>(FONT_SIZE_LISTS);

  const clickHandler = useCallback(
    (clickIndex: number, fontSize: string) => {
      const newStateList = stateList.map((state, index) => {
        state.checked = clickIndex === index ? true : false;
        return state;
      });

      dispatch(editLatex({ fontSize }));
      toggleSizeMenu();
      setStateList(newStateList);
    },
    [stateList]
  );

  return {
    clickHandler,
    menuRef,
  };
};

export default useFontSizeMenu;
