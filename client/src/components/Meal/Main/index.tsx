import React from 'react';
import MainContentsContainer from './style';
import InputContents from '../InputContents';
import OutputArea from '../OutputArea';
import styled from '@emotion/styled';

function MainContents() {
  return (
    <MainContentsContainer>
      <InputContents></InputContents>
      <OutputArea></OutputArea>
    </MainContentsContainer>
  );
}

export default MainContents;
