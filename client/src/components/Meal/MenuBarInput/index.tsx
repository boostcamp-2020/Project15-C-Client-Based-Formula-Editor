import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import { INPUT_ICON, INPUT_TEXT, ICON_SIZE } from '@constants/constants';
import * as S from './style';

function MenuBarInput() {
  return (
    <S.TextAreaItemWrapper>
      <S.LabelWrapper>
        <S.LabelIcon>{INPUT_ICON}</S.LabelIcon>
        <S.LabelText className="globalFont">{INPUT_TEXT}</S.LabelText>
      </S.LabelWrapper>
      <TextAreaItem size={ICON_SIZE.mini} />
    </S.TextAreaItemWrapper>
  );
}

export default MenuBarInput;
