import React from 'react';
import { useDispatch } from 'react-redux';
import { Label, Menu } from 'semantic-ui-react';
import { changeTab, removeTab, TabInfo } from '../../../contexts/latex';

interface MenuItemProps {
  item: TabInfo;
  currentTab: number;
  index: number;
}

function MenuItem({ item, currentTab, index }: MenuItemProps) {
  const dispatch = useDispatch();

  const handleItemClick = (id: number) => {
    dispatch(changeTab(id));
  };

  const removeTabHandler = (id: number) => {
    dispatch(removeTab(id));
  };

  const onRemoveTab = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeTabHandler(item.id);
  };

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
