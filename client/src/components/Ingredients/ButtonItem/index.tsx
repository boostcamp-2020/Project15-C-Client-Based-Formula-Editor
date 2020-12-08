import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
interface ButtonItemProps {
  title?: string;
  icon?: any;
  size?: 'big' | 'small' | 'mini' | 'tiny' | 'medium' | 'large' | 'huge' | 'massive' | undefined;
  handler: () => void;
  color?: any;
}

function ButtonItem({ title, icon, size, handler, color }: ButtonItemProps) {
  return (
    <Button icon size={size} onClick={handler} color={color}>
      {title}
      {icon ? <Icon name={icon} /> : ''}
    </Button>
  );
}

export default ButtonItem;
