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
      <MenuBar />
    </S.ResizeHeaderContainer>
  );
}

export default ResizeHeader;
