import React from 'react';
import MainContentsContainer from './style';
import InputContents from '../InputContents';
import OutputContents from '../OutputContents';
import styled from '@emotion/styled';

function MainContents() {
  return (
    <MainContentsContainer>
      <InputContents></InputContents>
      <OutputContents></OutputContents>
    </MainContentsContainer>
  );
}

export default MainContents;
