import React, { useEffect, useState } from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Input from '@set/Input';
import Output from '@set/Output';
import SaveButtons from '@set/SaveButtons';
import { observer } from '../lib/utils/util';
import ResizeHeader from '@set/ResizeHeader';
import TestComponet from './TestComponet';
import { Icon } from 'semantic-ui-react';
import useToggle from '@hooks/useToggle';

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
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 3000);
  // }, []);
  // if (!isLoading) return <TestComponet />;

  const [toggle, onToggle] = useToggle(false);
  if (toggle) return <ResizeHeader onToggle={onToggle} />;
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
