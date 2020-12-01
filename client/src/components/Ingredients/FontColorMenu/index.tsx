import React from 'react';
import useFontColorMenu from './useFontColorMenu';
import * as S from './style';

function FontColorMenu() {
  const { currentTabInfo, handleChangeComplete } = useFontColorMenu();
  const handler = (e: any) => {
    console.log(e);
  };
  return (
    <S.FontColorPicker
      type="color"
      id="head"
      name="head"
      value={currentTabInfo.fontColor}
      onChange={(e) => handleChangeComplete(e.target.value)}
      onClick={(e) => handler(e.target)}
    />
  );
}

export default FontColorMenu;
