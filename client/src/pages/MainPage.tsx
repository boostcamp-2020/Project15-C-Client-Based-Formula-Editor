import React from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Input from '@set/Input';
import Output from '@set/Output';
import SaveButtons from '@set/SaveButtons';
import test from '../lib/utils/util';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Main = styled.div`
  height: 100%;
  display: flex;
`;
const ContentsContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  padding: 10px;
`;

function MainPage() {
  return (
    <MainContainer onClick={test.onClick}>
      <Header />
      <Main>
        <ContentsContainer>
          <Input />
          <Output />
        </ContentsContainer>
        <SaveButtons />
      </Main>
    </MainContainer>
  );
}

export default MainPage;
