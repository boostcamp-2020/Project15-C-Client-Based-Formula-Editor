import React, { useEffect, useState } from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Input from '@set/Input';
import Output from '@set/Output';
import SaveButtons from '@set/SaveButtons';
import { observer } from '../lib/utils/util';
import FavoriteModal from '@meal/FavoriteModal';
import { Dimmer, Loader, Segment, Image } from 'semantic-ui-react';

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

const Test = styled.div`
  height: 100%;
  & div {
    height: 100%;
  }
`;

const Test2 = styled.div`
  background: url(./image/giphy.gif);
  background-position: center;
  width: 400px;
  height: 150px;
  height: 100%;
`;
const Test3 = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
function MainPage() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  if (!isLoading)
    return (
      <Test3>
        <Test2 />
      </Test3>
    );
  // return (
  //   <Test>
  //     <Segment>
  //       <Dimmer active>
  //         <Loader>Formula Chef</Loader>
  //       </Dimmer>
  //       <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  //     </Segment>
  //   </Test>
  // );
  return (
    <MainContainer onClick={observer.notify}>
      <FavoriteModal />
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
