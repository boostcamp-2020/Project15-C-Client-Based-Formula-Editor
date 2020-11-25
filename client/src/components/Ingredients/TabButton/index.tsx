import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { TabButtonContaner } from './style';
interface TabButtonProps {
  index: number;
}

function TabButton({ index }: TabButtonProps) {
  return (
    <TabButtonContaner>
      <Button icon labelPosition="right" size="mini">
        수식 {index}
        <Icon name="times rectangle" />
      </Button>
    </TabButtonContaner>
  );
}

export default TabButton;
