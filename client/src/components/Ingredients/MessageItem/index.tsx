import React from 'react';
import { Message } from 'semantic-ui-react';
import * as S from './style';

interface MessageItemProps {
  title: string;
  children?: string | React.ReactChild;
  positive: boolean;
}

function MessageItem({ title, children, positive }: MessageItemProps) {
  return (
    <S.MessageContainer>
      <Message positive={positive} negative={!positive}>
        <Message.Header>{title}</Message.Header>
        {children}
      </Message>
    </S.MessageContainer>
  );
}

export default MessageItem;
