import React from 'react';
import { Icon } from 'semantic-ui-react';
import MenuBar from '@meal/MenuBar';
import * as S from './style';

interface ResizeHeaderProps {
  onToggle: () => void;
}

function ResizeHeader({ onToggle }: ResizeHeaderProps) {
  return (
    <S.ResizeHeaderContainer>
      <S.IconWrapper>
        <Icon name="caret up" color="grey" size="big" onClick={onToggle} />
      </S.IconWrapper>
      <MenuBar />
    </S.ResizeHeaderContainer>
  );
}

export default ResizeHeader;
