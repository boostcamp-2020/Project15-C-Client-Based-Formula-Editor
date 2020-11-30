import React from 'react';
import Tab from '../../Meal/PageTab';
import InputContents from '../../Meal/InputContents';
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
