import React from 'react';
import MenuBar from '@meal/MenuBar';
import * as S from './style';

export interface ResizeHeaderProps {
  onToggle: () => void;
}

function ResizeHeader({ onToggle }: ResizeHeaderProps) {
  return (
    <S.ResizeHeaderContainer>
      <MenuBar onToggle={onToggle} />
    </S.ResizeHeaderContainer>
  );
}

export default ResizeHeader;
