import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import { INPUT_TEXT } from '@constants/constants';
import { Icon } from 'semantic-ui-react';
import * as S from './style';

function MenuBarInput() {
  return (
    <S.TextAreaItemWrapper>
      <S.LabelWrapper>
        <S.LabelIcon>
          <Icon name="pencil" size="large" />
        </S.LabelIcon>
        <S.LabelText className="globalFont">{INPUT_TEXT}</S.LabelText>
      </S.LabelWrapper>
      <TextAreaItem size={'mini'} />
    </S.TextAreaItemWrapper>
  );
}

export default MenuBarInput;
