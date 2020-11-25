import React, { useState } from 'react';
import { Label, Menu } from 'semantic-ui-react';
import { TabContainer } from './style';
import { Icon } from 'semantic-ui-react';
import Button from '../../Ingredients/ButtonItem';

function Tab() {
  const [tabState, setTabState] = useState({ activeItem: '1' });
  const handleItemClick = (name: string) => setTabState({ activeItem: name });
  const { activeItem } = tabState;

  return (
    <TabContainer>
      <Menu pointing vertical>
        <Menu.Item name="inbox" active={activeItem === '1'} onClick={() => handleItemClick('1')}>
          <Label size="mini" color="teal">
            X
          </Label>
          수식 1
        </Menu.Item>
        <Menu.Item name="inbox" active={activeItem === '2'} onClick={() => handleItemClick('2')}>
          <Label size="mini" color="teal">
            X
          </Label>
          수식 2
        </Menu.Item>
      </Menu>
      <Button icon={'plus'} size={'mini'}></Button>
    </TabContainer>
  );
}

export default Tab;
