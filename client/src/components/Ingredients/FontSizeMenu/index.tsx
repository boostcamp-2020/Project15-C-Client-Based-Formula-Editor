import React, { SetStateAction, useCallback } from 'react';
import { Icon } from 'semantic-ui-react';
import { FONT_SIZE_LISTS } from '@constants/constants';
import * as S from './style';
import useFontSizeMenu from './useFontSizeMenu';

export interface FontSizeListType {
  size: string;
  checked: boolean;
}
export interface FontSizeMenuProps {
  toggleSizeMenu: () => void;
}

function FontSizeMenu({ toggleSizeMenu }: FontSizeMenuProps) {
  const { clickHandler, menuRef } = useFontSizeMenu({ toggleSizeMenu });
  const changeSizeHandler = useCallback(
    (index: number, size: string) => () => {
      clickHandler(index, size);
    },
    []
  );

  return (
    <S.FontContainer ref={menuRef}>
      {FONT_SIZE_LISTS.map((sizeList: FontSizeListType, index: number) => {
        return (
          <S.FontWapper key={index} onClick={changeSizeHandler(index, sizeList.size)}>
            <S.FontSizeText>{sizeList.size}</S.FontSizeText>
            <S.FontSizeClicked>{sizeList.checked && <Icon name="check" />}</S.FontSizeClicked>
          </S.FontWapper>
        );
      })}
    </S.FontContainer>
  );
}

export default React.memo(FontSizeMenu);
