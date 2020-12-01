import React from 'react';
import { Icon } from 'semantic-ui-react';
import { FONT_SIZE_LISTS } from '@constants/constants';
import * as S from './style';
import useFontSizeList from './useFontSizeList';

export interface FontSizeListType {
  size: string;
  checked: boolean;
}
export interface FontSizeMenuProps {
  toggleSizeMenu: () => void;
}

function FontSizeList({ toggleSizeMenu }: FontSizeMenuProps) {
  const { clickHandler } = useFontSizeList({ toggleSizeMenu });

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
            <span>{sizeList.size}</span>
            <span>{sizeList.checked && <Icon name="check" />}</span>
          </S.FontWapper>
        );
      })}
    </S.FontContainer>
  );
}

export default FontSizeList;
