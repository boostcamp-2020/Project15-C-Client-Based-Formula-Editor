import React, { useEffect } from 'react';
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

function FontSizeList({ toggleSizeMenu }: FontSizeMenuProps) {
  const { clickHandler } = useFontSizeMenu({ toggleSizeMenu });

  return (
    <S.FontContainer>
      {FONT_SIZE_LISTS.map((sizeList: FontSizeListType, index: number) => {
        return (
          <S.FontWapper
            key={index}
            onClick={() => {
              clickHandler(index, sizeList.size);
            }}
          >
            <S.FontSizeText>{sizeList.size}</S.FontSizeText>
            <S.FontSizeClicked>{sizeList.checked && <Icon name="check" />}</S.FontSizeClicked>
          </S.FontWapper>
        );
      })}
    </S.FontContainer>
  );
}

export default FontSizeList;
