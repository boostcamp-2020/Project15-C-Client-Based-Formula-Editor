import React from 'react';
import TemplateButtons from '@meal/FormatButtons';
import OutputFormula from '@meal/OutputFormula';
import * as S from './style';

function OutputContents() {
  return (
    <S.ContentsContainer>
      <S.ContentsHeader>
        <TemplateButtons></TemplateButtons>
      </S.ContentsHeader>
      <OutputFormula border={'1px solid #d4d4d5'} />
    </S.ContentsContainer>
  );
}

export default OutputContents;
