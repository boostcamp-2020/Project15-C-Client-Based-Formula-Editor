import React from 'react';
import * as S from './style';
import Tab from '../Tab';
import InputContents from '../InputContents';

function InputArea() {
  return (
    <S.InputAreaContainer>
      <Tab></Tab>
      <InputContents></InputContents>
    </S.InputAreaContainer>
  );
}

export default InputArea;
