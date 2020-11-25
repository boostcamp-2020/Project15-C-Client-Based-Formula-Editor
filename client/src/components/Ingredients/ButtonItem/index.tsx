import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
interface ButtonItemProps {
  title?: string;
  icon?: any;
  size?: 'big' | 'small' | 'mini' | 'tiny' | 'medium' | 'large' | 'huge' | 'massive' | undefined;
}

function ButtonItem({ title, icon, size }: ButtonItemProps) {
  return (
    <Button icon size={size}>
      {title}
      {icon ? <Icon name={icon} /> : ''}
    </Button>
  );
}

export default ButtonItem;
