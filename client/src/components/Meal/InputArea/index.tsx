import React from 'react';
import Tab from '../Tab';
import InputContents from '../InputContents';
import * as S from './style';

function InputArea() {
  return (
    <S.InputAreaContainer>
      <Tab></Tab>
      <InputContents></InputContents>
    </S.InputAreaContainer>
  );
}

export default InputArea;
