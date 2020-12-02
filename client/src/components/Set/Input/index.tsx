import React from 'react';
import PageTab from '../../Meal/PageTab';
import InputContents from '../../Meal/InputContents';
import * as S from './style';

function InputArea() {
  return (
    <S.InputAreaContainer>
      <PageTab></PageTab>
      <InputContents></InputContents>
    </S.InputAreaContainer>
  );
}

export default InputArea;
