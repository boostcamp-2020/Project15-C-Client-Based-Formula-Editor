import React from 'react';
import ButtonItem from '@ingredients/ButtonItem';
import PageTabItem from '@ingredients/PageTabItem';
import useTab from './usePageTab';
import { TAB_LIMIT } from '@constants/constants';
import { Menu } from 'semantic-ui-react';
import { TabContainer } from './style';

function PageTab() {
  const { addTabHandler, currentTab, totalLatex } = useTab();

  return (
    <TabContainer>
      <Menu pointing vertical>
        {totalLatex.map((item, index) => {
          if (item) {
            return (
              <PageTabItem
                key={item.id}
                item={item}
                index={index}
                isCurrentTab={item.id === currentTab}
              />
            );
          }
        })}
      </Menu>
      {totalLatex.length < TAB_LIMIT && (
        <ButtonItem icon={'plus'} size={'mini'} handler={addTabHandler}></ButtonItem>
      )}
    </TabContainer>
  );
}

export default PageTab;
