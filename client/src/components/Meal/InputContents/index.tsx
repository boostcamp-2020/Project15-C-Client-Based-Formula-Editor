import React from 'react';
import * as S from './style';
import TextAreaItem from '../../Ingredients/TextAreaItem';

function InputContents() {
  return (
    <S.ContentsContainer>
      <S.ContentsHeader></S.ContentsHeader>
      <S.ContentsBox>
        <TextAreaItem></TextAreaItem>
      </S.ContentsBox>
    </S.ContentsContainer>
  );
}

export default InputContents;
