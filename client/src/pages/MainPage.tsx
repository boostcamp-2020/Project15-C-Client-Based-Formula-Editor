import React, { useState } from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Content from '../components/Set/Main';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function MainPage() {
  return (
    <MainContainer>
      <Header />
      <Content />
    </MainContainer>
  );
}

export default MainPage;
