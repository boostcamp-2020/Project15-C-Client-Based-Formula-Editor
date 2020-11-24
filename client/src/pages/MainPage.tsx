import React from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Content from '../components/Content';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
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
