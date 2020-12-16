import React from 'react';
import { TabInfo } from '@contexts/latex';
import useMenuItem from './usePageTabItem';
import { Label, Menu } from 'semantic-ui-react';

interface MenuItemProps {
  item: TabInfo;
  isCurrentTab: boolean;
  index: number;
}

function PageTabItem({ item, isCurrentTab, index }: MenuItemProps) {
  const { handleItemClick, onRemoveTab } = useMenuItem({ item });

  return (
    <Menu.Item key={item.id} name={'수식'} active={isCurrentTab} onClick={handleItemClick(item.id)}>
      <Label size="mini" color="teal" onClick={onRemoveTab}>
        X
      </Label>
      수식 {index + 1}
    </Menu.Item>
  );
}

export default React.memo(PageTabItem);
