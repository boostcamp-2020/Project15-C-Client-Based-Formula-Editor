import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';

import * as S from './style';

function MenuBar() {
  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src="/image/logo.png" />
      </S.Logo>
      <TextAreaItem width={'30%'} />
    </S.MenuBarContainer>
  );
}

export default MenuBar;
