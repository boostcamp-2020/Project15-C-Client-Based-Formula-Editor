import React, { useState } from 'react';
import Header from '../components/Set/Header';
import styled from '@emotion/styled';
import Content from '../components/Content';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => (
      <>
        <Tab.Pane>
          <Content />
        </Tab.Pane>
      </>
    ),
  },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const TabExampleMenuPositionRight = () => (
  <Tab menu={{ fluid: true, vertical: true }} menuPosition="left" panes={panes} />
);

function MainPage() {
  return (
    <MainContainer>
      <Header />
      {/* <Content /> */}
      <TabExampleMenuPositionRight />
    </MainContainer>
  );
}

export default MainPage;
