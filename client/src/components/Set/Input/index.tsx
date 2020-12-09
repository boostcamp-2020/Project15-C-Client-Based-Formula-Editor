import React from 'react';
import PageTab from '@meal/PageTab';
import InputContents from '@meal/InputContents';
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
