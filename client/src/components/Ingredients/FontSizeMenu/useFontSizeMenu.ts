import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';
import { FONT_SIZE_LISTS } from '@constants/constants';
import { FontSizeListType, FontSizeMenuProps } from './index';
import test from '@utils/util';
import useListener from '@hooks/useListener';

const useFontSizeMenu = ({ toggleSizeMenu, setSizeMenu }: FontSizeMenuProps) => {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [stateList, setStateList] = useState<FontSizeListType[]>(FONT_SIZE_LISTS);

  test.subscribe((target: HTMLElement) => {
    console.log('되냐');
    if (target.closest('span') !== menuRef.current) {
      setSizeMenu(false);
    }
  });
  // const callback = () => {
  //   const myExtension = document.querySelector<HTMLIFrameElement>('#iframe');
  //   console.log('우리의 태그', myExtension);
  //   if (myExtension) {
  //     myExtension?.contentDocument?.body.addEventListener('click', (e: any) => {
  //       console.log(e.target);
  //       if (e.target.closest('span') !== menuRef.current) {
  //         setSizeMenu(false);
  //       }
  //     });
  //   }
  //   return () =>
  //     myExtension?.contentDocument?.body.removeEventListener('click', (e: any) => {
  //       console.log(e.target);
  //       if (e.target.closest('span') !== menuRef.current) {
  //         setSizeMenu(false);
  //       }
  //     });
  // };

  // useEffect(callback, []);
  //useListener(callback);
  const clickHandler = (clickIndex: number, fontSize: string) => {
    const newStateList = stateList.map((state, index) => {
      state.checked = clickIndex === index ? true : false;
      return state;
    });

    dispatch(editLatex({ fontSize }));
    toggleSizeMenu();
    setStateList(newStateList);
  };

  return {
    clickHandler,
    menuRef,
  };
};

export default useFontSizeMenu;
