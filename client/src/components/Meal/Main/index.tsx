import React from 'react';
import MainContentsContainer from './style';
import InputArea from '../InputArea';
import OutputContents from '../OutputContents';
import styled from '@emotion/styled';

function MainContents() {
  return (
    <MainContentsContainer>
      <InputArea></InputArea>
      <OutputContents></OutputContents>
    </MainContentsContainer>
  );
}

export default MainContents;
