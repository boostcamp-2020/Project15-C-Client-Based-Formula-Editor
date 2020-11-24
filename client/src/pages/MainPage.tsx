import React from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function MainPage() {
  return (
    <MainContainer>
      <Header />
      {/* <Main/> */}
    </MainContainer>
  );
}

export default MainPage;
