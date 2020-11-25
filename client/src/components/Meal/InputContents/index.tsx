import React from 'react';
import * as S from './style';
import TabButton from '../../Ingredients/TabButton';
import Button from '../../Ingredients/ButtonItem';
import { Icon } from 'semantic-ui-react';

function InputContents() {
  return (
    <S.InputContentsContainer>
      <S.TapWrapper>
        <TabButton index={1}></TabButton>
        <TabButton index={1}></TabButton>
        <TabButton index={1}></TabButton>
        <Icon name="plus square" size="large" />
      </S.TapWrapper>
      <S.ContentsWrapper></S.ContentsWrapper>
    </S.InputContentsContainer>
  );
}

export default InputContents;
