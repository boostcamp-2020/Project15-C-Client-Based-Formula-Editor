import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import { INPUT_ICON, INPUT_TEXT } from '@constants/constants';
import * as S from './style';

function MenuBarInput() {
  return (
    <S.TextAreaItemWrapper>
      <S.LabelWrapper>
        <S.LabelIcon>{INPUT_ICON}</S.LabelIcon>
        <S.LabelText className="globalFont">{INPUT_TEXT}</S.LabelText>
      </S.LabelWrapper>
      <TextAreaItem size={'mini'} />
    </S.TextAreaItemWrapper>
  );
}

export default MenuBarInput;
