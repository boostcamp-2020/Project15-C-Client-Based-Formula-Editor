import React from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Input from '@set/Input';
import Output from '@set/Output';
import SaveButtons from '@set/SaveButtons';
import { observer } from '../lib/utils/util';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';

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
  const test= useSelector((state: RootState) => state.user);
  console.log("tets:",test)
  return (
    <MainContainer onClick={observer.notify}>
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
