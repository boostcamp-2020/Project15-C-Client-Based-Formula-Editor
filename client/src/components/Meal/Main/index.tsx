import React from 'react';
import MainContentsContainer from './style';
import InputArea from '../InputArea';
import OutputArea from '../OutputArea';

function MainContents() {
  return (
    <MainContentsContainer>
      <InputArea></InputArea>
      <OutputArea></OutputArea>
    </MainContentsContainer>
  );
}

export default MainContents;
