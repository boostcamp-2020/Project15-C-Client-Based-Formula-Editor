import React from 'react';
import OutputContents from '@meal/OutputContents';
import * as S from './style';

function OutputArea() {
  return (
    <S.OutputAreaContainer>
      <OutputContents></OutputContents>
    </S.OutputAreaContainer>
  );
}

export default OutputArea;
