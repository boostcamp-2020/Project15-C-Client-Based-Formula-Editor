import React from 'react';
import OutputFormula from '@meal/OutputFormula';
import FormatButtons from '@meal/FormatButtons';
import * as S from './style';

function OutputContents() {
  return (
    <S.ContentsContainer>
      <S.ContentsHeader>
        <FormatButtons />
      </S.ContentsHeader>
      <OutputFormula border={'1px solid #d4d4d5'} />
    </S.ContentsContainer>
  );
}

export default OutputContents;
