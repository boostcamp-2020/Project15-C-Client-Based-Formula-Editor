import React, { useState } from 'react';
import { Label, Menu } from 'semantic-ui-react';
import { TabContainer } from './style';
import { Icon } from 'semantic-ui-react';
import Button from '../../Ingredients/ButtonItem';

interface TabType {
  id: number;
  name: string;
}

function Tab() {
  const [tabState, setTabState] = useState({ activeItem: 1 });
  const handleItemClick = (id: number) => setTabState({ activeItem: id });
  const [tabListState, setTabListState] = useState<(TabType | undefined)[]>([
    { id: 1, name: '수식' },
  ]);
  const addTabHandler = () => {
    const index = tabListState.length + 1;
    setTabListState([...tabListState, { id: index, name: '수식' }]);
  };
  const removeTabHandloer = (id: number) => {
    console.log('dd');
    const tabList: (TabType | undefined)[] = tabListState.filter((item: TabType | undefined) => {
      if (item && id !== item.id) {
        if (item.id > id) item.id -= 1;
        return item;
      }
    });
    setTabListState([...tabList]);
  };

  return (
    <TabContainer>
      <Menu pointing vertical>
        {tabListState.map((item: TabType | undefined, index) => {
          if (item) {
            return (
              <Menu.Item
                key={index}
                name={item.name}
                active={tabState.activeItem === item.id}
                onClick={() => handleItemClick(item.id)}
              >
                <Label size="mini" color="teal" onClick={() => removeTabHandloer(item.id)}>
                  X
                </Label>
                수식 {item.id}
              </Menu.Item>
            );
          }
        })}
      </Menu>
      <Button icon={'plus'} size={'mini'} handler={addTabHandler}></Button>
    </TabContainer>
  );
}

export default Tab;
