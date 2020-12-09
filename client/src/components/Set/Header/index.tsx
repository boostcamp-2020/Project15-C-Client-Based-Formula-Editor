import React from 'react';
import FormulaList from '@meal/FormulaList';
import * as S from './style';
import { getImageURL } from '@utils/util';

function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <S.LogoImg src={getImageURL('logo.png')} />
      </S.Logo>
      <FormulaList />
    </S.HeaderContainer>
  );
}

export default Header;
