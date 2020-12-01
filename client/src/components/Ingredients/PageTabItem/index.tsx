import React from 'react';
import { Label, Menu } from 'semantic-ui-react';
import { TabInfo } from '../../../contexts/latex';
import useMenuItem from './usePageTabItem';

interface MenuItemProps {
  item: TabInfo;
  currentTab: number;
  index: number;
}

function PageTabItem({ item, currentTab, index }: MenuItemProps) {
  const { handleItemClick, onRemoveTab } = useMenuItem({ item });

  return (
    <Menu.Item
      key={item.id}
      name={'수식'}
      active={currentTab === item.id}
      onClick={() => handleItemClick(item.id)}
    >
      <Label size="mini" color="teal" onClick={onRemoveTab}>
        X
      </Label>
      수식 {index + 1}
    </Menu.Item>
  );
}

export default PageTabItem;
