import React from 'react';
import useFontColorMenu from './useFontColorMenu';
import * as S from './style';

function FontColorMenu() {
  const { currentTabInfo, handleChangeComplete } = useFontColorMenu();

  return (
    <>
      <S.FontColorPicker
        type="color"
        id="head"
        name="head"
        value={currentTabInfo.fontColor}
        onChange={(e) => handleChangeComplete(e.target.value)}
      />
      {/* <S.FontColorDiv toggle={colorMenu} onClick={closeHandler}></S.FontColorDiv> */}
    </>
  );
}

export default FontColorMenu;
