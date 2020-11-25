import React from 'react';
import * as S from './style';
import TextArea from '../../Ingredients/TextAreaItem';
import TemplateButtons from '../TemplateButtons';

function OutputContents() {
  return (
    <S.ContentsContainer>
      <S.ContentsHeader>
        <TemplateButtons></TemplateButtons>
      </S.ContentsHeader>
      <S.ContentsBox>
        <TextArea></TextArea>
      </S.ContentsBox>
    </S.ContentsContainer>
  );
}

export default OutputContents;
