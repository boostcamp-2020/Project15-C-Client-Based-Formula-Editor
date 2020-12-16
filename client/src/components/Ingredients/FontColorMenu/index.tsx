import React, { useCallback } from 'react';
import useFontColorMenu from './useFontColorMenu';
import * as S from './style';

function FontColorMenu() {
  const { currentTabInfo, handleChangeComplete } = useFontColorMenu();
  const onChangeHandeler = useCallback((e) => handleChangeComplete(e.target.value), []);
  return (
    <>
      <S.FontColorPicker
        type="color"
        id="head"
        name="head"
        value={currentTabInfo.fontColor}
        onChange={onChangeHandeler}
      />
    </>
  );
}

export default React.memo(FontColorMenu);
