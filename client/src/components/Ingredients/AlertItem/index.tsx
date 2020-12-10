import React from 'react';
import * as S from './style';
import { Icon } from 'semantic-ui-react';
import { AlertMessage } from '@constants/constants';
interface AlertItemProps {
  icon: any;
  message: AlertMessage;
}

function AlertItem({ icon, message }: AlertItemProps) {
  return (
    <S.AlertItemContainer>
      <S.IconBox>
        <Icon name={icon} size="huge" />
      </S.IconBox>
      <S.MessageBox className="globalFont">{message}</S.MessageBox>
    </S.AlertItemContainer>
  );
}

export default AlertItem;
