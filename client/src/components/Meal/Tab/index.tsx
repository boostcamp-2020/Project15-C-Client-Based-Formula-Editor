import React from 'react';
import TabButton from '../../Ingredients/TabButton';
import { TabContainer } from './style';
import { Icon } from 'semantic-ui-react';

function Tab() {
  return (
    <TabContainer>
      <TabButton index={1}></TabButton>
      <TabButton index={1}></TabButton>
      <TabButton index={1}></TabButton>
      <Icon name="plus square" size="large" />
    </TabContainer>
  );
}

export default Tab;
