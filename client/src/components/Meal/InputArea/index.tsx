import React from 'react';
import * as S from './style';
import Tab from '../Tab';
import InputContents from '../InputContents';

function InputArea() {
  return (
    <S.InputContentsContainer>
      <Tab></Tab>
      <InputContents></InputContents>
    </S.InputContentsContainer>
  );
}

export default InputArea;
