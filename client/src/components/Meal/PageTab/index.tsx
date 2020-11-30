import React from 'react';
import Button from '../../Ingredients/ButtonItem';
import MenuItem from '../../Ingredients/PageTabItem';
import useTab from './usePageTab';
import { TabContainer } from './style';
import { Menu } from 'semantic-ui-react';
import { TAB_LIMIT } from '@constants/constants';

function PageTab() {
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
      {totalLatex.length < TAB_LIMIT && (
        <Button icon={'plus'} size={'mini'} handler={addTabHandler}></Button>
      )}
    </TabContainer>
  );
}

export default PageTab;
