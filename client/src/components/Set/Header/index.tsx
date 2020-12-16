import React from 'react';
import { Button } from 'semantic-ui-react';
import FormulaList from '@meal/FormulaList';
import { getImageURL } from '@utils/util';
import * as S from './style';

interface HeaderProps {
  onToggle: () => void;
}

function Header({ onToggle }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <S.LogoImg src={getImageURL('logo.png')} />
      </S.Logo>
      <FormulaList />
      <S.ButtonWrapper>
        <Button.Group basic size="large">
          <Button icon="sort" size="massive" onClick={onToggle} />
        </Button.Group>
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
