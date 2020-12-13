import useToggle from '@hooks/useToggle';
import React from 'react';
import { Button } from 'semantic-ui-react';
import * as S from './style';
interface IconMessageProps {
  title: string;
  iconName: string;
  size: any;
  onClickHandler: () => void;
}

function IconMessage({ title, iconName, size, onClickHandler }: IconMessageProps) {
  const [message, , setToggleMessage] = useToggle(false);
  const onMouseHandler = () => {
    setToggleMessage(true);
  };
  const onMouseLeaveHandler = () => {
    setToggleMessage(false);
  };
  return (
    <S.IconMessageContainer title={title}>
      <Button
        icon={iconName}
        size={size}
        onClick={onClickHandler}
        onMouseMove={onMouseHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    </S.IconMessageContainer>
  );
}

export default IconMessage;
