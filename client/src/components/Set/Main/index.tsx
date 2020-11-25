import React from 'react';
import MainContainer from './style';
import MainContents from '../../Cook/Main';
import SaveButtons from '../../Cook/SaveButtons';

function Main() {
  return (
    <>
      <MainContainer>
        <MainContents />
        <SaveButtons />
      </MainContainer>
    </>
  );
}

export default Main;
