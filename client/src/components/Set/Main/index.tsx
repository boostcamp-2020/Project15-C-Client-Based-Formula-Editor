import React from 'react';
import MainContainer from './style';
import MainContents from '../../Meal/Main';
import SaveButtons from '../../Meal/SaveButtons';

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
