import React from 'react';
import * as S from './style';
import OutputContents from '../OutputContents';

function OutputArea() {
  return (
    <S.OutputAreaContainer>
      <OutputContents></OutputContents>
    </S.OutputAreaContainer>
  );
}

export default OutputArea;
