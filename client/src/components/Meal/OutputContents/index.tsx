import React from 'react';
import * as S from './style';
// import TextArea from '../../Ingredients/TextAreaItem';
import TemplateButtons from '../TemplateButtons';
import Content from '../../Set/Main/Content';

function OutputContents() {
  return (
    <S.ContentsContainer>
      <S.ContentsHeader>
        <TemplateButtons></TemplateButtons>
      </S.ContentsHeader>
      <S.ContentsBox>
        <Content></Content>
      </S.ContentsBox>
    </S.ContentsContainer>
  );
}

export default OutputContents;
