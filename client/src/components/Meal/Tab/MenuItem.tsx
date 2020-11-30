import React from 'react';
import { useDispatch } from 'react-redux';
import { Label, Menu } from 'semantic-ui-react';
import { changeTab, removeTab, TabInfo } from '../../../contexts/latex';
import useMenuItem from './useMenuItem';

interface MenuItemProps {
  item: TabInfo;
  currentTab: number;
  index: number;
}

function MenuItem({ item, currentTab, index }: MenuItemProps) {
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

export default MenuItem;
