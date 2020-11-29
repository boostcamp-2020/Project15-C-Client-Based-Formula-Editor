import React from 'react';
import Button from '../../Ingredients/ButtonItem';
import MenuItem from './MenuItem';
import useTab from './useTab';
import { TabContainer } from './style';
import { Menu } from 'semantic-ui-react';

function Tab() {
  const { addTabHandler, currentTab, totalLatex } = useTab();

  return (
    <TabContainer>
      <Menu pointing vertical>
        {totalLatex.map((item, index) => {
          if (item) {
            return <MenuItem key={item.id} item={item} index={index} currentTab={currentTab} />;
          }
        })}
      </Menu>
      {totalLatex.length < 4 && (
        <Button icon={'plus'} size={'mini'} handler={addTabHandler}></Button>
      )}
    </TabContainer>
  );
}

export default Tab;
