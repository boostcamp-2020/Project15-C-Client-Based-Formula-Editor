import React from 'react';
import DictionaryMenuItem from '@ingredients/DictionaryMenuItem';
import * as S from './style';

interface DictionaryHeaderProps {
  MENU_TITLE: any;
  onSelectHandler: any;
  onSearchHandler: any;
  searchWord: any;
  menuItem: any;
}

function DictionaryHeader({
  MENU_TITLE,
  onSelectHandler,
  onSearchHandler,
  searchWord,
  menuItem,
}: DictionaryHeaderProps) {
  return (
    <S.DictionaryHeader>
      <S.DictionaryMenu onChange={onSelectHandler} value={menuItem}>
        {Object.keys(MENU_TITLE).map((key, index) => (
          //   <S.DictionaryMenuItem key={index} value={MENU_TITLE[key]}>
          //     {MENU_TITLE[key]}
          //   </S.DictionaryMenuItem>
          <DictionaryMenuItem title={MENU_TITLE[key]} />
        ))}
        {/* <S.DictionaryMenuItem></S.DictionaryMenuItem>
          <S.DictionaryMenuItem></S.DictionaryMenuItem>
          <S.DictionaryMenuItem></S.DictionaryMenuItem> */}
      </S.DictionaryMenu>

      <S.DictionarySearch onChange={onSearchHandler} value={searchWord} />
    </S.DictionaryHeader>
  );
}

export default DictionaryHeader;
