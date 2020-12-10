import React from 'react';
import FormulaList from '@meal/FormulaList';
import * as S from './style';
import { getImageURL } from '@utils/util';
import { Button } from 'semantic-ui-react';
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
