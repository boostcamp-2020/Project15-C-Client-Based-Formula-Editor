import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Input from '@set/Input';
import Header from '@set/Header';
import Output from '@set/Output';
import Loading from '@ingredients/Loading';
import SaveButtons from '@set/SaveButtons';
import ResizeHeader from '@set/ResizeHeader';

import { observer } from '@utils/util';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  animation: slidein 0.5s;
  height: 100%;
  @keyframes slidein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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

interface MainPageProps {
  toggle: boolean;
  onToggle: () => void;
}

function MainPage({ toggle, onToggle }: MainPageProps) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (isLoading) return <Loading size={'big'} />;

  if (toggle) return <ResizeHeader onToggle={onToggle} />;
  return (
    <MainContainer onClick={observer.notify}>
      <Header onToggle={onToggle} />
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
