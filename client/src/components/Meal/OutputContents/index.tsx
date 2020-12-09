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
      <OutputFormula />
    </S.ContentsContainer>
  );
}

export default OutputContents;
